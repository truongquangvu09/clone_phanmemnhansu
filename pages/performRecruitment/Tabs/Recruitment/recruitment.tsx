/* eslint-disable react/jsx-key */

import React, { useState } from "react";
import styles from "./recruitment.module.css";
import Link from "next/link";
import DataRecruitment from "../DataRecruitment/DataRecruitment";
import BodyFrameFooter from "@/components/bodyFrame/bodyFrame_footer/bodyFrame_footer";

export interface Recruitment {}

export default function Recruitment({ children }: any) {

  

  const handleDelete =  () => {
    // 
  }

  const handleEstablish = () => {
    // 
  }

  const data = [
    {
      id: 1,
      tieude: "(TD194)AUT VOLUPTATES EARUM",
      company: "Công ty Cổ phần Thanh toán Hưng Hà 2",
      loaihinhlamviec: "Bán thời gian",
      luong: "10-15",
      date: "19/02/1982 - 06/10/2020",
      diachi: " Voluptas est veniam. Hải Dương (địa chỉ tuyển dụng)",
      soluong: "73",
      nguoiphutrach: "Phan Mạnh Hùng",
      matuyendung: "QTTD0",
    },
    {
      id: 2,
      tieude: "(TD194)AUT VOLUPTATES EARUM",
      company: "Công ty Cổ phần Thanh toán Hưng Hà 2",
      loaihinhlamviec: "Bán thời gian",
      luong: "10-15",
      date: "19/02/1982 - 06/10/2020",
      diachi: " Voluptas est veniam. Hải Dương (địa chỉ tuyển dụng)",
      soluong: "73",
      nguoiphutrach: "Phan Mạnh Hùng",
      matuyendung: "QTTD0",
    },
    {
      id: 3,
      tieude: "(TD194)AUT VOLUPTATES EARUM",
      company: "Công ty Cổ phần Thanh toán Hưng Hà 2",
      loaihinhlamviec: "Bán thời gian",
      luong: "10-15",
      date: "19/02/1982 - 06/10/2020",
      diachi: " Voluptas est veniam. Hải Dương (địa chỉ tuyển dụng)",
      soluong: "73",
      nguoiphutrach: "Phan Mạnh Hùng",
      matuyendung: "QTTD0",
    },
  ];

  const dataSetting = [
    {
      key : 1,
      detail: 'Chi tiết',
      edit: 'Chỉnh sửa',
      delete: 'Gỡ tin tuyển dụng',
      Sample: "Thiết lập làm tin mẫu"
    }
  ]

  return (
    <>
      <div className={`${styles.tintuyendung}`}>
        <div className={`${styles.tuyendung1}`}>
          <button className={`${styles.adds}`}>
            <picture>
              <img
                src="https://phanmemnhansu.timviec365.vn/assets/images/l_images/add.png"
                alt=""
              ></img>
              <p>Thêm tin tuyển dụng</p>
            </picture>
          </button>
        </div>

        <div className={`${styles.tuyendung2}`}>
          <div className={`${styles.tuyendung2_1}`}>
            <li>
              <span>Xem từ ngày</span>
              <input
                type="date"
                className={`${styles.search_from_date}`}
              ></input>
            </li>
            <li>
              <span>Đến ngày</span>
              <input type="date" className={`${styles.search_to_date}`}></input>
            </li>
          </div>

          <div className={`${styles.tuyendung2_2}`}>
            <form className={`${styles.t_form_search}`}>
              <div className={`${styles.t_div_search}`}>
                <input
                  type="search"
                  className={`${styles.search_quytrinh}`}
                  placeholder="Tìm kiếm"
                  name="search"
                  spellCheck={false}
                  autoComplete="off"
                ></input>
                <button className={`${styles.button_search}`}>
                  <picture>
                    <img
                      src="https://phanmemnhansu.timviec365.vn/assets/images/t_images/t-icon-search.png"
                      alt="search"
                    ></img>
                  </picture>
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* body */}
        <div
          className={`${styles.new_r} ${styles.t_new_dom}`}
          style={{ display: "inline-block" }}
        >
          {data.map((item) => (
            <DataRecruitment data = {item}></DataRecruitment>
          ))}
        </div>
      </div>
      <BodyFrameFooter src="https://www.youtube.com/embed/v8FmUlUI1bs"></BodyFrameFooter>
    </>
  );
}
