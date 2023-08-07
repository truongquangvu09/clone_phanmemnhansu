import axios from "axios";
import { getToken } from "../token";
const COOKIE_KEY = "user_365";


export const getDataCompany = async () => {
  // const isToken = getToken(COOKIE_KEY)
  const isToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTQxNzUzOCwiaWRUaW1WaWVjMzY1IjoyNDU1NTksImlkUUxDIjoxMjE1OTgsImlkUmFvTmhhbmgzNjUiOjIsImVtYWlsIjpudWxsLCJwaG9uZVRLIjoiMDM5NjY0NjA5MCIsImNyZWF0ZWRBdCI6MTY5MDk1OTYyNiwidHlwZSI6MSwiY29tX2lkIjoxMjE1OTgsInVzZXJOYW1lIjoiY29uZyB0eSB2dnZ2diJ9LCJpYXQiOjE2OTEzMzg1NjQsImV4cCI6MTY5MTQyNDk2NH0.kzprE0aFRBeONnVKgYyp8MJuM9zNsA_MVSQ2K8WHGgs'
  const url = process.env.NEXT_PUBLIC_BASE_URL2;
  try {
    const response = await axios.post(
      `${url}api/qlc/company/info`,
      {},
      {
        headers: {
          Authorization: `Bearer ${isToken}`,
        },
      }
    );
    return response?.data;
  } catch (err) {
      console.log(err)
  }
}

export const SettingPermission = async (dataRes) => {
    const isToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTQxNzUzOCwiaWRUaW1WaWVjMzY1IjoyNDU1NTksImlkUUxDIjoxMjE1OTgsImlkUmFvTmhhbmgzNjUiOjIsImVtYWlsIjpudWxsLCJwaG9uZVRLIjoiMDM5NjY0NjA5MCIsImNyZWF0ZWRBdCI6MTY5MDk1OTYyNiwidHlwZSI6MSwiY29tX2lkIjoxMjE1OTgsInVzZXJOYW1lIjoiY29uZyB0eSB2dnZ2diJ9LCJpYXQiOjE2OTEzMzg1NjQsImV4cCI6MTY5MTQyNDk2NH0.kzprE0aFRBeONnVKgYyp8MJuM9zNsA_MVSQ2K8WHGgs'
    const url = process.env.NEXT_PUBLIC_BASE_URL;
    // const isToken = getToken(COOKIE_KEY)
    try {
      const response = await axios.post(
        `${url}api/hr/setting/permision`,
          dataRes,
        {
          headers: {
            Authorization: `Bearer ${isToken}`,
          },
        }
      );
      return response;
    } catch (err) {
        console.log(err)
    }
  };