import axios from "axios";

export const GetDataAchievement = async (page: any, pageSize: any, type:any, keyWords: any) => {
  
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM5NiwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUUxDIjoxNjY0LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6InRyYW5nY2h1b2k0QGdtYWlsLmNvbSIsInBob25lVEsiOiIiLCJjcmVhdGVkQXQiOjE2NjM4MzY0MDUsInR5cGUiOjEsImNvbV9pZCI6MTY2NCwidXNlck5hbWUiOiJDw7RuZyB0eSBD4buVIHBo4bqnbiBUaGFuaCB0b8OhbiBIxrBuZyBIw6AgMiJ9LCJpYXQiOjE2OTA1MDYyOTAsImV4cCI6MTY5MDU5MjY5MH0.fg7JLbu8-6O9xbN5P7CpnlCEtTVAYdNTPYlfnC4mbWk";
  try {
    const response = await axios.get(
        `${url}/api/hr/welfare/listAchievement?page=${page}&pageSize=${pageSize}&type=${type}&keyWords=${keyWords}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response;
  } catch (err) {
    console.log(err)
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

  console.log(
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
  )
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM5NiwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUUxDIjoxNjY0LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6InRyYW5nY2h1b2k0QGdtYWlsLmNvbSIsInBob25lVEsiOiIiLCJjcmVhdGVkQXQiOjE2NjM4MzY0MDUsInR5cGUiOjEsImNvbV9pZCI6MTY2NCwidXNlck5hbWUiOiJDw7RuZyB0eSBD4buVIHBo4bqnbiBUaGFuaCB0b8OhbiBIxrBuZyBIw6AgMiJ9LCJpYXQiOjE2OTA1MDYyOTAsImV4cCI6MTY5MDU5MjY5MH0.fg7JLbu8-6O9xbN5P7CpnlCEtTVAYdNTPYlfnC4mbWk";
  try {
    const response = await axios.post(
      `${url}/api/hr/welfare/addAchievement`,
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
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (err) {
    console.log("Error: ", err);
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
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM5NiwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUUxDIjoxNjY0LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6InRyYW5nY2h1b2k0QGdtYWlsLmNvbSIsInBob25lVEsiOiIiLCJjcmVhdGVkQXQiOjE2NjM4MzY0MDUsInR5cGUiOjEsImNvbV9pZCI6MTY2NCwidXNlck5hbWUiOiJDw7RuZyB0eSBD4buVIHBo4bqnbiBUaGFuaCB0b8OhbiBIxrBuZyBIw6AgMiJ9LCJpYXQiOjE2OTA1MDYyOTAsImV4cCI6MTY5MDU5MjY5MH0.fg7JLbu8-6O9xbN5P7CpnlCEtTVAYdNTPYlfnC4mbWk";
    try {
      const response = await axios.post(
        `${url}/api/hr/welfare/addAchievementGroup`,
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
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response;
    } catch (err) {
      console.log("Error: ", err);
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
    appellation,
    achievement_level,
    
  } = mergedObject;

  console.log(
    achievement_id,
    content,
    list_user,
    list_user_name,
    created_by,
    achievement_at,
    achievement_type,
    appellation,
    achievement_level,
  )
  const url = process.env.NEXT_PUBLIC_BASE_URL;
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM5NiwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUUxDIjoxNjY0LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6InRyYW5nY2h1b2k0QGdtYWlsLmNvbSIsInBob25lVEsiOiIiLCJjcmVhdGVkQXQiOjE2NjM4MzY0MDUsInR5cGUiOjEsImNvbV9pZCI6MTY2NCwidXNlck5hbWUiOiJDw7RuZyB0eSBD4buVIHBo4bqnbiBUaGFuaCB0b8OhbiBIxrBuZyBIw6AgMiJ9LCJpYXQiOjE2OTA1MDYyOTAsImV4cCI6MTY5MDU5MjY5MH0.fg7JLbu8-6O9xbN5P7CpnlCEtTVAYdNTPYlfnC4mbWk";
    try {
      const response = await axios.put(
        `${url}/api/hr/welfare/updateAchievement`,
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
          id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response;
    } catch (err) {
      console.log("Error: ", err);
    }
}
export const GetDepartmentList = async(com_id:any) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL2;
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM5NiwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUUxDIjoxNjY0LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6InRyYW5nY2h1b2k0QGdtYWlsLmNvbSIsInBob25lVEsiOiIiLCJjcmVhdGVkQXQiOjE2NjM4MzY0MDUsInR5cGUiOjEsImNvbV9pZCI6MTY2NCwidXNlck5hbWUiOiJDw7RuZyB0eSBD4buVIHBo4bqnbiBUaGFuaCB0b8OhbiBIxrBuZyBIw6AgMiJ9LCJpYXQiOjE2OTAzNjIwMTAsImV4cCI6MTY5MDQ0ODQxMH0.E2l2iVGfrDwC00__x5fYlrk-7JM2JuZaSPypkxZnb8Q";
  try {
    const response = await axios.post(
      `${url}/api/qlc/department/list`,
      { com_id },
      {
        headers: {
            Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};


