import axios from "axios";

export const GetDataHrReport = async (formData:FormData) => {
    const url = process.env.NEXT_PUBLIC_BASE_URL;
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM5NiwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUUxDIjoxNjY0LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6InRyYW5nY2h1b2k0QGdtYWlsLmNvbSIsInBob25lVEsiOiIiLCJjcmVhdGVkQXQiOjE2NjM4MzY0MDUsInR5cGUiOjEsImNvbV9pZCI6MTY2NCwidXNlck5hbWUiOiJDw7RuZyB0eSBD4buVIHBo4bqnbiBUaGFuaCB0b8OhbiBIxrBuZyBIw6AgMiJ9LCJpYXQiOjE2OTA1MDYyNjIsImV4cCI6MTY5MDU5MjY2Mn0.8zrz5AoCfrNI_IS6owM7oSqhQgAZ_XnSJr7zS7-45bM";
    try {
      const response = await axios.post(
        `${url}api/hr/report/report`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (err) {
      console.error("Error fetching recruitment data:", err);
      throw err;
    }
  };