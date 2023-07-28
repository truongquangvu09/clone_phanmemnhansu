/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import styles from "./PerformRecruitment.module.css";
import Link from "next/link";
import BodyFrameFooter from "@/components/bodyFrame/bodyFrame_footer/bodyFrame_footer";
import {
  GetDataListNewActive,
  GetListSchedule,
  GetTotalCandi,
} from "@/pages/api/quan-ly-tuyen-dung/PerformRecruitment";
import MyPagination from "@/components/pagination/Pagination";

export interface PerformRecruitment {}

export default function PerformRecruitment({ children }: any) {
  const [selectedButton, setSelectedButton] = useState("homnay");
  const [messIsOpen, setMessIsOpen] = useState<any>();
  const [totalCandi, setTotalCandi] = useState<any>();
  const [listSchedule, setListSchedule] = useState<any>();
  const [currentPageListNewActive, setCurrentPageListNewActive] = useState(1);
  const [currentPageListSchedule, setCurrentPageLisSchedule] = useState(1);

  

  useEffect(() => {
    const getDataRecruitmentOverview = async () => {
      try {
        const responseListNewActive = await GetDataListNewActive(
          currentPageListNewActive,
          3
        );
        setMessIsOpen(responseListNewActive?.data.data);
      } catch (err) {
        console.log("error", err);
      }
    };
    getDataRecruitmentOverview();
  }, [currentPageListNewActive]);

  useEffect(() => {
    const GetDataTotalCandi = async () => {
      const responseTotalCandi = await GetTotalCandi();
      setTotalCandi(responseTotalCandi?.data.data);
    };
    GetDataTotalCandi();
  }, []);

  useEffect(() => {
    const GetDataListSchedule = async () => {
      const responseListSchedule = await GetListSchedule(
        currentPageListSchedule,
        3
      );
      setListSchedule(responseListSchedule?.data.data);
    };
    GetDataListSchedule();
  }, [currentPageListSchedule]);

  const currentTime = Date.now();

  const handleClickColor = (buttonId: any) => {
    setSelectedButton(buttonId);
  };

  const handlePageListNewActive = (page: any) => {
    setCurrentPageListNewActive(page);
  };

  const handlePageLisSchedule = (page: any) => {
    setCurrentPageLisSchedule(page);
  };

  const salary = {
    1: "Thỏa thuận",
    2: "1 - 3 triệu",
    3: "3 - 5 triệu",
    4: "5 - 7 triệu",
    5: "7 - 10 triệu",
    6: "10 - 15 triệu",
    7: "10 - 15 triệu",
    8: "15 - 20 triệu",
    9: "20 - 30 triệu",
    10: "Trên 30 triệu",
    11: "Trên 50 triệu",
    12: "Trên 100 triệu",
  };

  return (
    <>
      <div className={`${styles.tab_content}`}>
        <div
          id="tongquan"
          className={`${styles.fade} ${styles.in} ${styles.active}`}
        >
          <>
            <div
              className={`${styles.tindangmo}`}
              id="tindangmo_left"
              style={{ minHeight: "500px" }}
            >
              {/* title */}
              <div className={`${styles.tin_title}`}>
                <h5>Tin đang mở</h5>
              </div>
              <hr></hr>
              {/* body map ở đây */}
              {messIsOpen?.recruitmentNew.length === 0 ? (
                <p className={`${styles.data_empty}`}>Không có dữ liệu</p>
              ) : ( 
                messIsOpen?.recruitmentNew.map((item, index) =>{
                  const timeEnd = new Date(item.timeEnd).getTime();
                  if (currentTime > timeEnd) {
                    return null;
                  }
                  return (
                    <div
                    key={item.id}
                    className={`${styles.tin_all} ${styles.tin_all_t_left}`}
                  >
                    <div className={`${styles.tin_item}`}>
                      <div className={`${styles.tin_item1}`}>
                        <span>{item.number}</span>
                        <p>ứng viên</p>
                      </div>

                      <div className={`${styles.tin_item2}`}>
                        <h4>
                          <Link
                            href={{
                              pathname: "",
                              query: "",
                            }}
                          >
                            <span>{item.title}</span>
                          </Link>
                        </h4>
                        <div className={`${styles.tin_item3}`}>
                          <li>
                            <picture>
                              <img
                                className={`${styles.tin_item33_img}`}
                                src={`/calendar.png`}
                              ></img>
                              <span>
                                {new Date(item.timeStart).toLocaleDateString()}{" "}
                                - {new Date(item.timeEnd).toLocaleDateString()}
                              </span>
                            </picture>
                          </li>

                          <li>
                            <span>{item.address}</span>
                            <span>.</span>
                            <span>{salary[item.salaryId]}</span>
                          </li>
                        </div>
                        <hr></hr>
                      </div>

                      {/* Hồ sơ */}
                      <div className={`${styles.tin_item4}`}>
                        <li>
                          <span className={`${styles.blue} ${styles.text}`}>
                            {item.sohoso}
                          </span>
                          <p>Hồ sơ</p>
                        </li>
                        <li>
                          <span className={`${styles.yellow} ${styles.text}`}>
                            {item.henphongvan}
                          </span>
                          <p>Phỏng vấn</p>
                        </li>
                        <li>
                          <span className={`${styles.red} ${styles.text}`}>
                            {item.truotphongvan}
                          </span>
                          <p>Bị loại</p>
                        </li>
                        <li>
                          <span className={`${styles.green} ${styles.text}`}>
                            {item.quaphongvan}
                          </span>
                          <p>Thử việc</p>
                        </li>
                      </div>
                    </div>
                    <hr></hr>
                  </div>
                  )
                })
              )}
              {/* end ở đây */}
              {messIsOpen?.recruitmentNew.length > 3 && (
                <div className={`${styles.pagination}`}>
                  <MyPagination
                    current={currentPageListNewActive}
                    total={messIsOpen?.countAllActiveNew}
                    pageSize={3}
                    onChange={(page) => handlePageListNewActive(page)}
                  />
                </div>
              )}
            </div>

            <div className={`${styles.tindangmo}`}>
              <div className={`${styles.tin_title}`}>
                <h5>Tổng số ứng viên</h5>
              </div>
              <hr></hr>
              <div className={`${styles.h_today}`}>
                <li
                  className={`${
                    selectedButton === "homnay" ? styles.active_homnay : ""
                  }`}
                  onClick={() => handleClickColor("homnay")}
                >
                  <span className={`${styles.green} ${styles.candidate_today}`}>
                    {totalCandi?.totalCandidateDay}
                  </span>
                  <p>Hôm nay</p>
                </li>
                <li
                  className={`${
                    selectedButton === "tuannay" ? styles.active_tuannay : ""
                  }`}
                  onClick={() => handleClickColor("tuannay")}
                >
                  <span className={`${styles.blue} ${styles.candidate_week}`}>
                    {totalCandi?.totalCandidateMonth}
                  </span>
                  <p>Tuần này</p>
                </li>
                <li
                  className={`${
                    selectedButton === "thangnay" ? styles.active_thangnay : ""
                  }`}
                  onClick={() => handleClickColor("thangnay")}
                >
                  <span
                    className={`${styles.yellow} ${styles.candidate_month}`}
                  >
                    {totalCandi?.totalCandidateWeek}
                  </span>
                  <p>Tháng này</p>
                </li>
              </div>
            </div>

            <div className={`${styles.tindangmo}`} style={{ marginTop: "3%" }}>
              <div className={`${styles.tin_title}`}>
                <h5>Đến phỏng vấn</h5>
              </div>
              <div className={`${styles.dom_schedule}`}>
                {listSchedule?.listSchedule.length === 0 ? (
                  <p className={`${styles.data_empty}`}>Không có dữ liệu</p>
                ) : (
                  listSchedule?.listSchedule.map((item, index) => {
                    const processTimeSendCv = item.timeSendCv;
                    const dateObj = new Date(processTimeSendCv);
                    const hour = dateObj.getHours();
                    const day = dateObj.getDay() + 1;
                    const date = dateObj.getDate();
                    const month = dateObj.getMonth() + 1;
                    return (
                      <div key={item.id}>
                        <div className={`${styles.h_phongvan}`}>
                          <hr />
                          <div className={`${styles.h_pv_item}`}>
                            <div className={`${styles.h_pvitem_1}`}>
                              <li className={`${styles.yellow2}`}>{hour}</li>
                              <li>Thứ {day}</li>
                              <li>
                                {date}/{month}
                              </li>
                            </div>
                            <div className={`${styles.h_pvitem_2}`}>
                              <h4>{item.name}</h4>
                              <p>
                                {item.RecruitmentNews.title}
                                <span> . </span>
                                {salary[item.RecruitmentNews.salaryId]}
                              </p>
                              <p className={`${styles.green}`}>
                                01 người phỏng vấn
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
                {listSchedule?.listSchedule.length > 3 && (
                  <div className={`${styles.pagination}`}>
                    <MyPagination
                      current={currentPageListSchedule}
                      total={listSchedule?.totalSchedule}
                      pageSize={3}
                      onChange={(page) => handlePageLisSchedule(page)}
                    />
                  </div>
                )}
              </div>
            </div>
          </>
        </div>
        <BodyFrameFooter src="https://www.youtube.com/embed/v8FmUlUI1bs"></BodyFrameFooter>
      </div>
    </>
  );
}
