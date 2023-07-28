// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import { hasCookie, setCookie } from "cookies-next";
export const COOKIE_KEY = "user_365";
export const getHomeData = async () => {
  const isToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM5NiwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUUxDIjoxNjY0LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6InRyYW5nY2h1b2k0QGdtYWlsLmNvbSIsInBob25lVEsiOiIiLCJjcmVhdGVkQXQiOjE2NjM4MzY0MDUsInR5cGUiOjEsImNvbV9pZCI6MTY2NCwidXNlck5hbWUiOiJDw7RuZyB0eSBD4buVIHBo4bqnbiBUaGFuaCB0b8OhbiBIxrBuZyBIw6AgMiJ9LCJpYXQiOjE2OTAxNjE5MDgsImV4cCI6MTY5MDI0ODMwOH0.7S5qlZdQi3-Y410Xb3ggdKOuTrcBqtXcaK__mxeJ8J0";
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  try {
    const response = await axios.post(
      `${url}/api/hr/home/getListInfo`,
      {},
      {
        headers: {
          Authorization: `Bearer ${isToken}`,
        },
      }
    );

    return response;
  } catch (err) {
    console.error("Error fetching home data:", err);
    throw err;
  }
};

export const SignIn = async () => {
  const currentCookie = hasCookie(COOKIE_KEY);
  const currentUrl = process.env.NEXT_PUBLIC_BASE_URL2;

  if (!currentCookie) {
    const body = {
      account: "trangchuoi4@gmail.com",
      password: "trang677199",
      type: 1,
    };
    try {
      const res = await axios.post(
        `${currentUrl}/api/qlc/employee/login`,
        body
      );

      if (res?.status === 200) {
        const userInfo = res?.data?.data?.data;
        setCookie(COOKIE_KEY, userInfo);
      }
    } catch (error) {}
  }
};
