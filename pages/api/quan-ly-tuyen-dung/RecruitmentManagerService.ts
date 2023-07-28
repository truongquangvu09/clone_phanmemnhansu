import axios from "axios";

export const GetDataRecruitment = async (
  page: number,
  pageSize: number,
  name: string
) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM5NiwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUUxDIjoxNjY0LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6InRyYW5nY2h1b2k0QGdtYWlsLmNvbSIsInBob25lVEsiOiIiLCJjcmVhdGVkQXQiOjE2NjM4MzY0MDUsInR5cGUiOjEsImNvbV9pZCI6MTY2NCwidXNlck5hbWUiOiJDw7RuZyB0eSBD4buVIHBo4bqnbiBUaGFuaCB0b8OhbiBIxrBuZyBIw6AgMiJ9LCJpYXQiOjE2OTA1MDYyOTAsImV4cCI6MTY5MDU5MjY5MH0.fg7JLbu8-6O9xbN5P7CpnlCEtTVAYdNTPYlfnC4mbWk";
  try {
    const response = await axios.post(
      `${url}/api/hr/recruitment/getRecruitment?page` +
        page +
        `pageSize = ${pageSize}`,
      { page, pageSize, name },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (err) {
    
  }
};

export const AddDataRecruitment = async (formData: any) => {
  const { nameProcess, applyFor,  listStage} = formData
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const token =
   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM5NiwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUUxDIjoxNjY0LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6InRyYW5nY2h1b2k0QGdtYWlsLmNvbSIsInBob25lVEsiOiIiLCJjcmVhdGVkQXQiOjE2NjM4MzY0MDUsInR5cGUiOjEsImNvbV9pZCI6MTY2NCwidXNlck5hbWUiOiJDw7RuZyB0eSBD4buVIHBo4bqnbiBUaGFuaCB0b8OhbiBIxrBuZyBIw6AgMiJ9LCJpYXQiOjE2OTA1MDYyOTAsImV4cCI6MTY5MDU5MjY5MH0.fg7JLbu8-6O9xbN5P7CpnlCEtTVAYdNTPYlfnC4mbWk"

   try {
      const response = await axios.post(
        `${url}/api/hr/recruitment/createRecruitment`,
        {nameProcess, applyFor, listStage},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      return response
   } catch (error) {
   
   }
}

export const DeleteDataRecruitment = async (recruitmentId: number) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const token =
   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM5NiwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUUxDIjoxNjY0LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6InRyYW5nY2h1b2k0QGdtYWlsLmNvbSIsInBob25lVEsiOiIiLCJjcmVhdGVkQXQiOjE2NjM4MzY0MDUsInR5cGUiOjEsImNvbV9pZCI6MTY2NCwidXNlck5hbWUiOiJDw7RuZyB0eSBD4buVIHBo4bqnbiBUaGFuaCB0b8OhbiBIxrBuZyBIw6AgMiJ9LCJpYXQiOjE2OTA1MDYyOTAsImV4cCI6MTY5MDU5MjY5MH0.fg7JLbu8-6O9xbN5P7CpnlCEtTVAYdNTPYlfnC4mbWk"

  try {
    const response = await axios.post(
      `${url}/api/hr/recruitment/softDelete`,
      { recruitmentId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (err) {
   
  }
};

export const UpdateDataRecruitment = async (
  recruitId: number,
  formData: any
) => {
  const { nameProcess, applyFor } = formData;
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM5NiwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUUxDIjoxNjY0LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6InRyYW5nY2h1b2k0QGdtYWlsLmNvbSIsInBob25lVEsiOiIiLCJjcmVhdGVkQXQiOjE2NjM4MzY0MDUsInR5cGUiOjEsImNvbV9pZCI6MTY2NCwidXNlck5hbWUiOiJDw7RuZyB0eSBD4buVIHBo4bqnbiBUaGFuaCB0b8OhbiBIxrBuZyBIw6AgMiJ9LCJpYXQiOjE2OTA1MDYyOTAsImV4cCI6MTY5MDU5MjY5MH0.fg7JLbu8-6O9xbN5P7CpnlCEtTVAYdNTPYlfnC4mbWk";
  try {
    const response = await axios.post(
      `${url}/api/hr/recruitment/updateRecruitment`,
      { recruitId, nameProcess, applyFor },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (err) {
    
  }
};

export const DataRecruitmentStage = async (recruitmentId: string) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL;

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM5NiwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUUxDIjoxNjY0LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6InRyYW5nY2h1b2k0QGdtYWlsLmNvbSIsInBob25lVEsiOiIiLCJjcmVhdGVkQXQiOjE2NjM4MzY0MDUsInR5cGUiOjEsImNvbV9pZCI6MTY2NCwidXNlck5hbWUiOiJDw7RuZyB0eSBD4buVIHBo4bqnbiBUaGFuaCB0b8OhbiBIxrBuZyBIw6AgMiJ9LCJpYXQiOjE2OTA1MDYyOTAsImV4cCI6MTY5MDU5MjY5MH0.fg7JLbu8-6O9xbN5P7CpnlCEtTVAYdNTPYlfnC4mbWk"
  try {
    const response = await axios.post(
      `${url}/api/hr/recruitment/getStage`,
      { recruitmentId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    
  }
};

export const AddDataRecruitmentStage = async (
  recruitmentId: number,
  formData: any
) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const { nameStage, posAssum, target, time, des } = formData;

  const token =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM5NiwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUUxDIjoxNjY0LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6InRyYW5nY2h1b2k0QGdtYWlsLmNvbSIsInBob25lVEsiOiIiLCJjcmVhdGVkQXQiOjE2NjM4MzY0MDUsInR5cGUiOjEsImNvbV9pZCI6MTY2NCwidXNlck5hbWUiOiJDw7RuZyB0eSBD4buVIHBo4bqnbiBUaGFuaCB0b8OhbiBIxrBuZyBIw6AgMiJ9LCJpYXQiOjE2OTA1MDYyOTAsImV4cCI6MTY5MDU5MjY5MH0.fg7JLbu8-6O9xbN5P7CpnlCEtTVAYdNTPYlfnC4mbWk"
  try {
    const response = await axios.post(
      `${url}/api/hr/recruitment/createStage`,
      { recruitmentId, nameStage, posAssum, target, time, des },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (err) {
   
  }
};

export const DeleteDataRecruitmentStage = async (
  stageRecruitmentId: number
) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM5NiwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUUxDIjoxNjY0LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6InRyYW5nY2h1b2k0QGdtYWlsLmNvbSIsInBob25lVEsiOiIiLCJjcmVhdGVkQXQiOjE2NjM4MzY0MDUsInR5cGUiOjEsImNvbV9pZCI6MTY2NCwidXNlck5hbWUiOiJDw7RuZyB0eSBD4buVIHBo4bqnbiBUaGFuaCB0b8OhbiBIxrBuZyBIw6AgMiJ9LCJpYXQiOjE2OTA1MDYyOTAsImV4cCI6MTY5MDU5MjY5MH0.fg7JLbu8-6O9xbN5P7CpnlCEtTVAYdNTPYlfnC4mbWk"
  try {
    const response = await axios.post(
      `${url}/api/hr/recruitment/softDeleteStage`,
      { stageRecruitmentId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (err) {
   
  }
};

export const EditDataRecruitmentStage = async (
  stageRecruitmentId,
  formData
) => {
  const { nameStage, posAssum, target, time, des } = formData
 
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const token =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM5NiwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUUxDIjoxNjY0LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6InRyYW5nY2h1b2k0QGdtYWlsLmNvbSIsInBob25lVEsiOiIiLCJjcmVhdGVkQXQiOjE2NjM4MzY0MDUsInR5cGUiOjEsImNvbV9pZCI6MTY2NCwidXNlck5hbWUiOiJDw7RuZyB0eSBD4buVIHBo4bqnbiBUaGFuaCB0b8OhbiBIxrBuZyBIw6AgMiJ9LCJpYXQiOjE2OTA1MDYyOTAsImV4cCI6MTY5MDU5MjY5MH0.fg7JLbu8-6O9xbN5P7CpnlCEtTVAYdNTPYlfnC4mbWk"
  try {
    const response = await axios.post(
      `${url}/api/hr/recruitment/updateStage`,
      {stageRecruitmentId, nameStage, posAssum, target, time, des},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (err) {
    
  }
};
