import axios from "axios";
import { getToken } from "../token";
const COOKIE_KEY = "user_365";

export const SettingPermission = async (user: any, roleData) => {
    const  {role_td, role_ttns, role_ttvp, role_hnnv, role_bcns, role_dldx, role_tgl} = roleData
    const userId = user.userId
    const url = process.env.NEXT_PUBLIC_BASE_URL;
    const isToken = getToken(COOKIE_KEY)
    try {
      const response = await axios.post(
        `${url}api/hr/setting/permision`,
        {userId, role_td, role_ttns, role_ttvp, role_hnnv, role_bcns, role_dldx, role_tgl},
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