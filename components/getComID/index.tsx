import React, { useState, useEffect } from 'react'
import { getToken } from "@/pages/api/token";
import jwt_decode from "jwt-decode";

// Bao bọc hook trong một component khác
const UseComId = () => {
    const [comId, setComId] = useState<any>("");

    useEffect(() => {
        const COOKIE_KEY = "token_base365";
        const currentCookie = getToken(COOKIE_KEY);
        const decodedToken: any = jwt_decode(currentCookie);
        setComId(decodedToken?.data?.com_id);
    }, []);

    return comId;
}

// Sử dụng component bao bọc trong component GetComId
const GetComId = () => {
    const comId = UseComId();

    return comId;
}

export default GetComId;