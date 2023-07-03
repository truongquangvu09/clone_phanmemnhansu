/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import styles from "./RecruitmentReport.module.css";
import FirstBlock from "../component/firstBlock/FirstBlock";
import SecondBlock from "../component/secondBlock/SecondBlock";
import MyPagination from "@/components/pagination/Pagination";
import ThirdBlock from "../component/thirdBlock/ThirdBlock";
import FourthBlock from "../component/fourthBlock/FourthBlock"
import BodyFrameFooter from "@/components/bodyFrame/bodyFrame_footer/bodyFrame_footer";

interface ItemCard {
  id: number;
  color: string;
  num: number;
  title: string;
}

interface ItemCardSecond {
  id: number;
  matin: string;
  tongungvien: number;
  phongvan: number;
  nhanviec: number;
  huy: number;
}

interface ItemCardThird {
  id: number;
  stt: number;
  tennv: string;
  sotinungtuyen: number;
  sohoso: number;
}

interface ItemCardFourth {
    id: number;
    stt: number;
    tennvgt: string;
    souvgt: number;
}
export default function RecruitmentReport() {
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (page: any) => {
        setCurrentPage(page);
      };

  const data: ItemCard[] = [
    {
      id: 1,
      title: "Tổng số tin tuyển dụng",
      num: 6,
      color: "#4C5BD4",
    },
    {
      id: 2,
      title: "Tổng số hồ sơ nhận được",
      num: 6,
      color: "#4CD4B4",
    },
    {
      id: 3,
      title: "Tổng số ứng viên cần tuyển",
      num: 6,
      color: "#D44C4C",
    },
    {
      id: 4,
      title: "Số ứng viên đến phỏng vấn",
      num: 6,
      color: "#4C5BD4",
    },
    {
      id: 5,
      title: "Số ứng viên qua phỏng vấn",
      num: 6,
      color: "#4CD4B4",
    },
    {
      id: 6,
      title: "Số ứng viên hủy",
      num: 6,
      color: "#D44C4C",
    },
  ];

  const dataSecond: ItemCardSecond[] = [
    {
      id: 1,
      matin: "TTD194",
      tongungvien: 32,
      phongvan: 22,
      nhanviec: 12,
      huy: 12,
    },
    {
      id: 2,
      matin: "TTD194",
      tongungvien: 32,
      phongvan: 22,
      nhanviec: 12,
      huy: 12,
    },
    {
      id: 3,
      matin: "TTD194",
      tongungvien: 32,
      phongvan: 22,
      nhanviec: 12,
      huy: 12,
    },
  ];

  const dataThird: ItemCardThird[] = [
    {
      id: 1,
      stt: 12,
      tennv: "Nguyen Van A",
      sotinungtuyen: 32,
      sohoso: 12,
    },
    {
      id: 2,
      stt: 12,
      tennv: "Nguyen Van A",
      sotinungtuyen: 32,
      sohoso: 12,
    },
    {
      id: 3,
      stt: 12,
      tennv: "Nguyen Van A",
      sotinungtuyen: 32,
      sohoso: 12,
    },
    {
      id: 4,
      stt: 12,
      tennv: "Nguyen Van A",
      sotinungtuyen: 32,
      sohoso: 12,
    },
  ];

  const dataFourth: ItemCardFourth[] = [
    {
        id:1,
        stt:145,
        tennvgt: 'Trần Văn Hưng',
        souvgt:1
    },{
        id:2,
        stt:145,
        tennvgt: 'Trần Văn Hưng',
        souvgt:1
    },{
        id:3,
        stt:145,
        tennvgt: 'Trần Văn Hưng',
        souvgt:1
    },{
        id:4,
        stt:145,
        tennvgt: 'Trần Văn Hưng',
        souvgt:1
    },
  ]

  return (
    <>
      <div className={`${styles.row}`} style={{ marginTop: "45px" }}>
        <FirstBlock listcard={data}></FirstBlock>
      </div>

      <div className={`${styles.div_bc}`} style={{ margin: "0" }}>
        <div className={`${styles.div_bc_header}`}>
          <p>Báo cáo chi tiết theo tin tuyển dụng</p>
        </div>

        <div className={`${styles.div_bc_body}`}>
          <table className={`${styles.table}`} style={{ width: "100%" }}>
            <thead>
              <tr style={{ color: "#4C5BD4" }}>
                <th>Mã tin tuyển dụng</th>
                <th>Tổng số ứng viên</th>
                <th>Số ứng viên đến phỏng vấn</th>
                <th>Số ứng viên nhận việc</th>
                <th>Số ứng viên hủy</th>
              </tr>
            </thead>
            <tbody className={`${styles.t_body_dom}`}>
              <SecondBlock listcardSecond={dataSecond}></SecondBlock>
            </tbody>
          </table>
          <div className={`${styles.pagination}`}>
            <MyPagination
              current={currentPage}
              total={50}
              pageSize={10}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>

      <div className={`${styles.div_bc}`} style={{ marginTop: "84px" }}>
        <div className={`${styles.div_bc_header}`}>
          <p>Báo cáo thống kê theo nhân viên tuyển dụng</p>
        </div>

        <div className={`${styles.div_bc_body}`}>
          <table className={`${styles.table}`} style={{ width: "100%" }}>
            <thead>
              <tr style={{ color: "#4C5BD4" }}>
                <th>STT</th>
                <th>Tên nhân viên</th>
                <th>Số tin tuyển dụng đang theo dõi</th>
                <th>Số hồ sơ nhận được</th>
              </tr>
            </thead>
            <tbody className={`${styles.t_body_dom}`}>
              <ThirdBlock listcardThird={dataThird}></ThirdBlock>
            </tbody>
          </table>
          <div className={`${styles.pagination}`}>
            <MyPagination
              current={currentPage}
              total={50}
              pageSize={10}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>

      <div className={`${styles.div_bc}`} style={{ marginTop: "84px" }}>
        <div className={`${styles.div_bc_header}`}>
          <p>Báo cáo chi tiết theo nhân viên giới thiệu ứng viên và tiền thưởng trực tiếp</p>
        </div>

        <div className={`${styles.div_bc_body}`}>
          <table className={`${styles.table}`} style={{ width: "100%" }}>
            <thead>
              <tr style={{ color: "#4C5BD4" }}>
                <th>STT</th>
                <th>Tên nhân viên giới thiệu</th>
                <th>Số ứng viên giới thiệu</th>
                
              </tr>
            </thead>
            <tbody className={`${styles.t_body_dom}`}>
              <FourthBlock listcardFourth = {dataFourth}></FourthBlock>
            </tbody>
          </table>
          <div className={`${styles.pagination}`}>
            <MyPagination
              current={currentPage}
              total={50}
              pageSize={10}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>
      <BodyFrameFooter src='https://www.youtube.com/embed/ByFmUJ-4prs'></BodyFrameFooter>
    </>
  );
}
