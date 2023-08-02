// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import { hasCookie, setCookie } from "cookies-next";
import { getToken } from "../token";
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
      account: "0989878668",
      password: "123123a",
      type: 2,
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
