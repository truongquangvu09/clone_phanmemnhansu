import React, { useEffect, useState } from "react";
import styles from "./bodyFrame.module.css";
import BodyFrameHeader from "./bodyFrame_header/bodyFrame_header";
import {
  EmployeeInfo,
  getDataCompany,
} from "@/pages/api/cai-dat/generalSettings";
import jwt_decode from "jwt-decode";
import { getToken } from "@/pages/api/token";
import { getCookie } from "cookies-next";
export interface BodyFrame {}

export default function Bodyframe({ children }: any) {
  const [dataHeader, setDataHeader] = useState<any>();
  const [tokenType, setTokenType] = useState<any>(null);
  const COOKIE_KEY = "user_365";

  useEffect(() => {
    const currentCookie = getToken(COOKIE_KEY);
    if (currentCookie) {
      const decodedToken: any = jwt_decode(currentCookie);
      setTokenType(decodedToken?.data?.type);
    }
  }, []);
useEffect(() => {
    const fetchInfo = async () => {
      try {
        if (tokenType) {
          if (tokenType === 1) {
            const response = await getDataCompany();
            setDataHeader(response?.data);
          } else {
            const response = await EmployeeInfo();
            setDataHeader(response?.data);
          }
        } else {
          const interval = setInterval(async () => {
            const updatedToken = tokenType;
            if (updatedToken === 1) {
              clearInterval(interval);
              const response = await getDataCompany();
              setDataHeader(response?.data);
            } else if (updatedToken === 2) {
              clearInterval(interval);
              const response = await EmployeeInfo();
              setDataHeader(response?.data);
            }
          }, 1000);
        }
      } catch (error) {
        // Xử lý lỗi ở đây
      }
    };
    fetchInfo();
  }, [tokenType]);
  
  return (
    <>
      <div className={`${styles.wrapper}`}>
        <BodyFrameHeader dataHeader = {dataHeader}></BodyFrameHeader>
        {children}
      </div>
    </>
  );
}
