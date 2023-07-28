import axios from "axios";

export const getDataListProcessTrain = async (page: any, pageSize: any,) => {
    const isToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM5NiwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUUxDIjoxNjY0LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6InRyYW5nY2h1b2k0QGdtYWlsLmNvbSIsInBob25lVEsiOiIiLCJjcmVhdGVkQXQiOjE2NjM4MzY0MDUsInR5cGUiOjEsImNvbV9pZCI6MTY2NCwidXNlck5hbWUiOiJDw7RuZyB0eSBD4buVIHBo4bqnbiBUaGFuaCB0b8OhbiBIxrBuZyBIw6AgMiJ9LCJpYXQiOjE2OTA1MDg0NjksImV4cCI6MTY5MDU5NDg2OX0.r2vxwXjizwf-QoBOC1FRcwYK9plUKLkfRQEdDNprO-U";
    const url = process.env.NEXT_PUBLIC_BASE_URL;

    try {
        const response = await axios.post(
          `${url}/api/hr/training/listProcessTrain?page` + page + `pageSize` + pageSize ,
          {page, pageSize},
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
}

export const addDataListProcessTrain = async (formData: any) => {
    const {name , description } = formData
    const isToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM5NiwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUUxDIjoxNjY0LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6InRyYW5nY2h1b2k0QGdtYWlsLmNvbSIsInBob25lVEsiOiIiLCJjcmVhdGVkQXQiOjE2NjM4MzY0MDUsInR5cGUiOjEsImNvbV9pZCI6MTY2NCwidXNlck5hbWUiOiJDw7RuZyB0eSBD4buVIHBo4bqnbiBUaGFuaCB0b8OhbiBIxrBuZyBIw6AgMiJ9LCJpYXQiOjE2OTA1MDg0NjksImV4cCI6MTY5MDU5NDg2OX0.r2vxwXjizwf-QoBOC1FRcwYK9plUKLkfRQEdDNprO-U";
    const url = process.env.NEXT_PUBLIC_BASE_URL;

    try {
        const response = await axios.post(
          `${url}/api/hr/training/process` ,
          {name, description},
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
}