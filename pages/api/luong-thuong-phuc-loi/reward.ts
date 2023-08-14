import axios from "axios";
import { getToken } from "../token";
const COOKIE_KEY = "token_base365";
export const GetDataAchievement = async (page: any, pageSize: any, type:any, keyWords: any) => {
  
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const isToken = getToken(COOKIE_KEY)
  try {
    const response = await axios.get(
        `${url}api/hr/welfare/listAchievement?page=${page}&pageSize=${pageSize}&type=${type}&keyWords=${keyWords}`,
        {
          headers: {
            Authorization: `Bearer ${isToken}`,
          },
        }
      );
      return response;
  } catch (err: any) {
   return err.response
  }
};

export const AddAchievement = async (mergedObject) => {
  const {
    achievement_id,
    content,
    list_user,
    list_user_name,
    created_by,
    achievement_at,
    achievement_type,
    appellation,
    achievement_level,
    resion,
    price,
  } = mergedObject;

  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const isToken = getToken(COOKIE_KEY)
  try {
    const response = await axios.post(
      `${url}api/hr/welfare/addAchievement`,
      {
        achievement_id,
        content,
        list_user,
        list_user_name,
        created_by,
        achievement_at,
        achievement_type,
        appellation,
        achievement_level,
        resion,
        price,
      },
      {
        headers: {
          Authorization: `Bearer ${isToken}`,
        },
      }
    );
    return response;
  } catch (err) {
  }
};

export const AddAchievementGroup = async (mergedObject) => {
    const {
      achievement_id,
      content,
      dep_id,
      dep_name,
      created_by,
      achievement_at,
      achievement_type,
      appellation,
      achievement_level,
      resion,
      price,
    } = mergedObject;

    const url = process.env.NEXT_PUBLIC_BASE_URL;
    const isToken = getToken(COOKIE_KEY)
    try {
      const response = await axios.post(
        `${url}api/hr/welfare/addAchievementGroup`,
        {
          achievement_id,
          content,
          dep_id,
          dep_name,
          created_by,
          achievement_at,
          achievement_type,
          appellation,
          achievement_level,
          resion,
          price,
        },
        {
          headers: {
            Authorization: `Bearer ${isToken}`,
          },
        }
      );
      return response;
    } catch (err) {
    }
  };

export const UpdateAchievement = async (id, mergedObject)  => {
  const {
    achievement_id,
    content,
    list_user,
    list_user_name,
    created_by,
    achievement_at,
    achievement_type,
    depId,
    depName,
    appellation,
    achievement_level,
    
  } = mergedObject;
  const url = process.env.NEXT_PUBLIC_BASE_URL;
    const isToken = getToken(COOKIE_KEY)
    try {
      const response = await axios.put(
        `${url}api/hr/welfare/updateAchievement`,
        {
          achievement_id,
          content,
          list_user,
          list_user_name,
          created_by,
          achievement_at,
          achievement_type,
          depId,
          depName,
          appellation,
          achievement_level,
          id,
        },
        {
          headers: {
            Authorization: `Bearer ${isToken}`,
          },
        }
      );
      return response;
    } catch (err) {
    }
}
export const GetDepartmentList = async(com_id:any) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL2;
  const isToken = getToken(COOKIE_KEY)
  try {
    const response = await axios.post(
      `${url}api/qlc/department/list`,
      { com_id },
      {
        headers: {
            Authorization: `Bearer ${isToken}`,
        },
      }
    );
    return response;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};


