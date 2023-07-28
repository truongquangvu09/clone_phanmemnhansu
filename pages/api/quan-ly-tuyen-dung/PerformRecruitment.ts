import axios from "axios";

export const GetDataListNewActive = async (page: number, pageSize: number) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM5NiwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUUxDIjoxNjY0LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6InRyYW5nY2h1b2k0QGdtYWlsLmNvbSIsInBob25lVEsiOiIiLCJjcmVhdGVkQXQiOjE2NjM4MzY0MDUsInR5cGUiOjEsImNvbV9pZCI6MTY2NCwidXNlck5hbWUiOiJDw7RuZyB0eSBD4buVIHBo4bqnbiBUaGFuaCB0b8OhbiBIxrBuZyBIw6AgMiJ9LCJpYXQiOjE2OTA1MDYyOTAsImV4cCI6MTY5MDU5MjY5MH0.fg7JLbu8-6O9xbN5P7CpnlCEtTVAYdNTPYlfnC4mbWk";

  try {
    const response = await axios.post(
      `${url}/api/hr/recruitment/listNewActive?page` +
        page +
        `pageSize = ${pageSize}`,
      { page, pageSize },
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

export const GetTotalCandi = async () => {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM5NiwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUUxDIjoxNjY0LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6InRyYW5nY2h1b2k0QGdtYWlsLmNvbSIsInBob25lVEsiOiIiLCJjcmVhdGVkQXQiOjE2NjM4MzY0MDUsInR5cGUiOjEsImNvbV9pZCI6MTY2NCwidXNlck5hbWUiOiJDw7RuZyB0eSBD4buVIHBo4bqnbiBUaGFuaCB0b8OhbiBIxrBuZyBIw6AgMiJ9LCJpYXQiOjE2OTA1MDYyOTAsImV4cCI6MTY5MDU5MjY5MH0.fg7JLbu8-6O9xbN5P7CpnlCEtTVAYdNTPYlfnC4mbWk";

  try {
    const response = await axios.post(
      `${url}/api/hr/recruitment/totalCandi`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.log("Error:", error);
  }
};

export const GetListSchedule = async (page: number, pageSize: number) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM5NiwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUUxDIjoxNjY0LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6InRyYW5nY2h1b2k0QGdtYWlsLmNvbSIsInBob25lVEsiOiIiLCJjcmVhdGVkQXQiOjE2NjM4MzY0MDUsInR5cGUiOjEsImNvbV9pZCI6MTY2NCwidXNlck5hbWUiOiJDw7RuZyB0eSBD4buVIHBo4bqnbiBUaGFuaCB0b8OhbiBIxrBuZyBIw6AgMiJ9LCJpYXQiOjE2OTA1MDYyOTAsImV4cCI6MTY5MDU5MjY5MH0.fg7JLbu8-6O9xbN5P7CpnlCEtTVAYdNTPYlfnC4mbWk";

  try {
    const response = await axios.post(
      `${url}/api/hr/recruitment/listSchedule?page` +
        page +
        `pageSize = ${pageSize}`,
      { page, pageSize },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.log("Error:", error);
  }
};

export const GetListNews = async (
  page: number,
  pageSize: number,
  title: string,
  formDate,
  toDate
) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM5NiwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUUxDIjoxNjY0LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6InRyYW5nY2h1b2k0QGdtYWlsLmNvbSIsInBob25lVEsiOiIiLCJjcmVhdGVkQXQiOjE2NjM4MzY0MDUsInR5cGUiOjEsImNvbV9pZCI6MTY2NCwidXNlck5hbWUiOiJDw7RuZyB0eSBD4buVIHBo4bqnbiBUaGFuaCB0b8OhbiBIxrBuZyBIw6AgMiJ9LCJpYXQiOjE2OTA1MDYyOTAsImV4cCI6MTY5MDU5MjY5MH0.fg7JLbu8-6O9xbN5P7CpnlCEtTVAYdNTPYlfnC4mbWk";
  try {
    const response = await axios.post(
      `${url}/api/hr/recruitment/listNews?page` +
        page +
        `pageSize = ${pageSize}`,
      { page, pageSize, title, formDate, toDate },
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
export const SoftDeleteNews = async (newsId: number) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM5NiwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUUxDIjoxNjY0LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6InRyYW5nY2h1b2k0QGdtYWlsLmNvbSIsInBob25lVEsiOiIiLCJjcmVhdGVkQXQiOjE2NjM4MzY0MDUsInR5cGUiOjEsImNvbV9pZCI6MTY2NCwidXNlck5hbWUiOiJDw7RuZyB0eSBD4buVIHBo4bqnbiBUaGFuaCB0b8OhbiBIxrBuZyBIw6AgMiJ9LCJpYXQiOjE2OTA1MDYyOTAsImV4cCI6MTY5MDU5MjY5MH0.fg7JLbu8-6O9xbN5P7CpnlCEtTVAYdNTPYlfnC4mbWk";
  try {
    const response = await axios.post(
      `${url}/api/hr/recruitment/softDeleteNews`,
      { newsId },
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

export const DetailNews = async (recruitmentNewsId: any) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM5NiwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUUxDIjoxNjY0LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6InRyYW5nY2h1b2k0QGdtYWlsLmNvbSIsInBob25lVEsiOiIiLCJjcmVhdGVkQXQiOjE2NjM4MzY0MDUsInR5cGUiOjEsImNvbV9pZCI6MTY2NCwidXNlck5hbWUiOiJDw7RuZyB0eSBD4buVIHBo4bqnbiBUaGFuaCB0b8OhbiBIxrBuZyBIw6AgMiJ9LCJpYXQiOjE2OTA1MDYyOTAsImV4cCI6MTY5MDU5MjY5MH0.fg7JLbu8-6O9xbN5P7CpnlCEtTVAYdNTPYlfnC4mbWk";
  try {
    const response = await axios.post(
      `${url}/api/hr/recruitment/detailNews`,
      { recruitmentNewsId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const setAsTemplate = async (newsId: any) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM5NiwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUUxDIjoxNjY0LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6InRyYW5nY2h1b2k0QGdtYWlsLmNvbSIsInBob25lVEsiOiIiLCJjcmVhdGVkQXQiOjE2NjM4MzY0MDUsInR5cGUiOjEsImNvbV9pZCI6MTY2NCwidXNlck5hbWUiOiJDw7RuZyB0eSBD4buVIHBo4bqnbiBUaGFuaCB0b8OhbiBIxrBuZyBIw6AgMiJ9LCJpYXQiOjE2OTA1MDYyOTAsImV4cCI6MTY5MDU5MjY5MH0.fg7JLbu8-6O9xbN5P7CpnlCEtTVAYdNTPYlfnC4mbWk";
  try {
    const response = await axios.post(
      `${url}/api/hr/recruitment/createSampleNews`,
      { newsId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getDataAddress = async () => {
  const url = process.env.NEXT_PUBLIC_BASE_URL_DATA;
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM5NiwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUUxDIjoxNjY0LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6InRyYW5nY2h1b2k0QGdtYWlsLmNvbSIsInBob25lVEsiOiIiLCJjcmVhdGVkQXQiOjE2NjM4MzY0MDUsInR5cGUiOjEsImNvbV9pZCI6MTY2NCwidXNlck5hbWUiOiJDw7RuZyB0eSBD4buVIHBo4bqnbiBUaGFuaCB0b8OhbiBIxrBuZyBIw6AgMiJ9LCJpYXQiOjE2OTA1MDYyOTAsImV4cCI6MTY5MDU5MjY5MH0.fg7JLbu8-6O9xbN5P7CpnlCEtTVAYdNTPYlfnC4mbWk";
  try {
    const response = await axios.post(
      `${url}/api/getData/city`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getDataUser = async () => {
  const url = process.env.NEXT_PUBLIC_BASE_URL2;
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM5NiwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUUxDIjoxNjY0LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6InRyYW5nY2h1b2k0QGdtYWlsLmNvbSIsInBob25lVEsiOiIiLCJjcmVhdGVkQXQiOjE2NjM4MzY0MDUsInR5cGUiOjEsImNvbV9pZCI6MTY2NCwidXNlck5hbWUiOiJDw7RuZyB0eSBD4buVIHBo4bqnbiBUaGFuaCB0b8OhbiBIxrBuZyBIw6AgMiJ9LCJpYXQiOjE2OTA1MDYyOTAsImV4cCI6MTY5MDU5MjY5MH0.fg7JLbu8-6O9xbN5P7CpnlCEtTVAYdNTPYlfnC4mbWk";
  try {
    const response = await axios.post(
      `${url}/api/qlc/managerUser/listAll`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const GetDataCategory = async () => {
  const url = process.env.NEXT_PUBLIC_BASE_URL_DATA;
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM5NiwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUUxDIjoxNjY0LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6InRyYW5nY2h1b2k0QGdtYWlsLmNvbSIsInBob25lVEsiOiIiLCJjcmVhdGVkQXQiOjE2NjM4MzY0MDUsInR5cGUiOjEsImNvbV9pZCI6MTY2NCwidXNlck5hbWUiOiJDw7RuZyB0eSBD4buVIHBo4bqnbiBUaGFuaCB0b8OhbiBIxrBuZyBIw6AgMiJ9LCJpYXQiOjE2OTA1MDYyOTAsImV4cCI6MTY5MDU5MjY5MH0.fg7JLbu8-6O9xbN5P7CpnlCEtTVAYdNTPYlfnC4mbWk";
  try {
    const response = await axios.post(
      `${url}/api/getData/timviec/category`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const CreateNewsRecruitment = async (content, selectedOption) => {
  const {
    title,
    address,
    number,
    timeStart,
    timeEnd,
    jobDetail,
    probationaryTime,
    moneyTip,
    jobDes,
    interest,
    jobRequire,
  } = content;
  const {
    posApply,
    cityId,
    cateId,
    salaryId,
    wokingForm,
    recruitmentId,
    jobExp,
    degree,
    gender,
    memberFollow,
    hrName,
  } = selectedOption;
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM5NiwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUUxDIjoxNjY0LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6InRyYW5nY2h1b2k0QGdtYWlsLmNvbSIsInBob25lVEsiOiIiLCJjcmVhdGVkQXQiOjE2NjM4MzY0MDUsInR5cGUiOjEsImNvbV9pZCI6MTY2NCwidXNlck5hbWUiOiJDw7RuZyB0eSBD4buVIHBo4bqnbiBUaGFuaCB0b8OhbiBIxrBuZyBIw6AgMiJ9LCJpYXQiOjE2OTA1MDYyOTAsImV4cCI6MTY5MDU5MjY5MH0.fg7JLbu8-6O9xbN5P7CpnlCEtTVAYdNTPYlfnC4mbWk";
  try {
    const response = await axios.post(
      `${url}/api/hr/recruitment/createNews`,
      {
        title, posApply, cityId, address, cateId, salaryId, number, timeStart, timeEnd,
        jobDetail, wokingForm, probationaryTime, moneyTip, jobDes, interest,
        recruitmentId, jobExp, degree, gender, jobRequire, memberFollow, hrName,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      
    );
    return response;
  } catch (err:any) {
    console.log(err.message);
  }
};

export const EditNewsRecruitment = async(recruitmentNewsId,content, selectedOption) => {
  const {
    title,
    address,
    number,
    timeStart,
    timeEnd,
    jobDetail,
    probationaryTime,
    moneyTip,
    jobDes,
    interest,
    jobRequire,
  } = content;
  const {
    posApply,
    cityId,
    cateId,
    salaryId,
    wokingForm,
    recruitmentId,
    jobExp,
    degree,
    gender,
    memberFollow,
    hrName,
  } = selectedOption;
  
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM5NiwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUUxDIjoxNjY0LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6InRyYW5nY2h1b2k0QGdtYWlsLmNvbSIsInBob25lVEsiOiIiLCJjcmVhdGVkQXQiOjE2NjM4MzY0MDUsInR5cGUiOjEsImNvbV9pZCI6MTY2NCwidXNlck5hbWUiOiJDw7RuZyB0eSBD4buVIHBo4bqnbiBUaGFuaCB0b8OhbiBIxrBuZyBIw6AgMiJ9LCJpYXQiOjE2OTA1MDYyOTAsImV4cCI6MTY5MDU5MjY5MH0.fg7JLbu8-6O9xbN5P7CpnlCEtTVAYdNTPYlfnC4mbWk";
  try {
    const response = await axios.post(
      `${url}/api/hr/recruitment/updateNews`,
      {
        title, posApply, cityId, address, cateId, salaryId, number, timeStart, timeEnd,
        jobDetail, wokingForm, probationaryTime, moneyTip, jobDes, interest,
        recruitmentId, jobExp, degree, gender, jobRequire, memberFollow, hrName, recruitmentNewsId
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      
    );
    return response;
  } catch (err:any) {
    console.log(err.message);
  }
}
