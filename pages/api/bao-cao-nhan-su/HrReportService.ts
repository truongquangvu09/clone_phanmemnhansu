import axios from "axios";
import { getToken } from "../token";
const COOKIE_KEY = "user_365";
export const GetDataHrReport = async (page, pageSize) => {
    const url = process.env.NEXT_PUBLIC_BASE_URL;
    const isToken = getToken(COOKIE_KEY)
    try {
      const response = await axios.post(
        `${url}api/hr/report/reportRecruitment?page=${page}&pageSize=${pageSize}`,
        {page, pageSize},
        {
          headers: {
            Authorization: `Bearer ${isToken}`,
          },
        }
      );
      return response.data;
    } catch (err: any) {
      
    }
  };
  export const GetDataHrReport2 = async (page, pageSize) => {
    const url = process.env.NEXT_PUBLIC_BASE_URL;
    const isToken = getToken(COOKIE_KEY)
    try {
      const response = await axios.post(
        `${url}api/hr/report/reportRecruitment?page=${page}&pageSize=${pageSize}`,
        {page, pageSize},
        {
          headers: {
            Authorization: `Bearer ${isToken}`,
          },
        }
      );
      return response.data;
    } catch (err: any) {
      
    }
  };
  export const GetDataHrReport3 = async (page, pageSize) => {
    const url = process.env.NEXT_PUBLIC_BASE_URL;
    const isToken = getToken(COOKIE_KEY)
    try {
      const response = await axios.post(
        `${url}api/hr/report/reportRecruitment?page=${page}&pageSize=${pageSize}`,
        {page, pageSize},
        {
          headers: {
            Authorization: `Bearer ${isToken}`,
          },
        }
      );
      return response.data;
    } catch (err: any) {
      
    }
  };
  export const GetDataHrReport4 = async (page, pageSize) => {
    const url = process.env.NEXT_PUBLIC_BASE_URL;
    const isToken = getToken(COOKIE_KEY)
    try {
      const response = await axios.post(
        `${url}api/hr/report/reportRecruitment?page=${page}&pageSize=${pageSize}`,
        {page, pageSize},
        {
          headers: {
            Authorization: `Bearer ${isToken}`,
          },
        }
      );
      return response.data;
    } catch (err: any) {
      
    }
  };