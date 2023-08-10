import axios from "axios";
import { getToken } from "../token";
const COOKIE_KEY = "user_365";
export const GetDataHrReport = async (formData:FormData) => {
    const url = process.env.NEXT_PUBLIC_BASE_URL;
    const isToken = getToken(COOKIE_KEY)
    try {
      const response = await axios.post(
        `${url}api/hr/report/report`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${isToken}`,
          },
        }
      );
      return response.data;
    } catch (err) {
      console.error("Error fetching recruitment data:", err);
      throw err;
    }
  };

  
export const DetailReport = async (formData:FormData)=>{
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const isToken = getToken(COOKIE_KEY)
  try {
      const response = await axios.post(`${url}api/hr/report/reportDetail
      `,formData,{
          headers: {
              authorization: `Bearer ${isToken}`,
          },
      })
      return response.data
  } catch (error) {
   throw new Error('Failed to get detail of report')   
  }
}

export const ReportCharts = async (formData:FormData)=>{
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const isToken = getToken(COOKIE_KEY)
  try {
      const response = await axios.post(`${url}api/hr/report/reportChart`,formData,{
          headers: {
              authorization: `Bearer ${isToken}`,
          },
      })
      return response.data
  } catch (error) {
   throw new Error('Failed to get chart of report')   
  }
}

