// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import { hasCookie, setCookie } from "cookies-next";
import { getToken } from "../token";
// import jwt from "jsonwebtoken"
const COOKIE_KEY = "user_365";

export const getHomeData = async () => {
  const isToken = getToken(COOKIE_KEY)
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  try {
    const response = await axios.post(
      `${url}api/hr/home/getListInfo`,
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
        `${currentUrl}api/qlc/employee/login`,
        body
      );

      if (res?.status === 200) {
        const userInfo = res?.data?.data?.data;
        setCookie(COOKIE_KEY, userInfo);
      }
    } catch (error) {}
  }
};

export const getDataAuthentication = async () => {
  try{
    const url = process.env.NEXT_PUBLIC_BASE_URL;
    const isToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTQyODExNCwiaWRUaW1WaWVjMzY1IjoxMTAxMjIsImlkUUxDIjoyMjcyLCJpZFJhb05oYW5oMzY1Ijo5LCJlbWFpbCI6bnVsbCwicGhvbmVUSyI6IjA5ODk4NzczMzQzIiwiY3JlYXRlZEF0IjoxNjkxMzk3MjkzLCJ0eXBlIjoyLCJjb21faWQiOjEyMTU5OCwidXNlck5hbWUiOiJuaGFudmllbmhvYW5nMyJ9LCJpYXQiOjE2OTEzOTg1ODEsImV4cCI6MTY5MTQ4NDk4MX0.4fZ-Wegoxh6HE2J8ibqm6uOYKCVQMbPVu-vEF6IAOGY'
    // const isToken = getToken(COOKIE_KEY)
    // const decodedToken = jwt.decode(isToken);

    const response = await axios.post(
      `${url}api/hr/setting/getListPermisionUserLogin`, {},
      {
        headers: {
          Authorization: `Bearer ${isToken}`,
        },
      }
    )
    return response
  }catch(error) {

  }
  
}
