import React, { useState } from "react";
import styles from "./listRecruitment.module.css";
import Link from "next/link";
import DeleteRecruitmentProcess from "../deleteRecruitmentProcess/DeleteRecruitmentProcess";
export interface ListRecruitment {}

export default function ListRecruitment({ children }: any) {
  const [active, setActive] = useState(0);

  const handleModalDelete = () => {
    setActive(3);
  };
  const closeModal = () => {
    setActive(0)
  };
  const listRecruitment = [
    {
      _id: 1,
      title: "(QTTD195) Tuyển thực tập sinh IT",
      date: "17/06/2023",
      company: "Công ty cổ phần thanh toán Hưng Hà",
      relative: "Thực tập sinh IT",
      detail: "",
      href: "/recruitment_stage/:_id",
    },
    {
      _id: 2,
      title: "(QTTD195) Tuyển thực tập sinh IT2",
      date: "17/06/2023",
      company: "Công ty cổ phần thanh toán Hưng Hà2",
      relative: "Thực tập sinh IT2",
      detail: "",
      href: "/recruitment_stage/:_id",
    },
    {
      _id: 3,
      title: "(QTTD195) Tuyển thực tập sinh IT3",
      date: "17/06/2023",
      company: "Công ty cổ phần thanh toán Hưng Hà3",
      relative: "Thực tập sinh IT3",
      detail: "",
      href: "/recruitment_stage/:_id",
    },
  ];
  return (
    <>
      <div className={`${styles.all_quytrinh}`} id="filter">
        {listRecruitment.map((item) => {
          return (
            <div key={item._id}>
              <div className={`${styles.quytrinh_item}`}>
                <div className={`${styles.quytrinh_item1}`}>
                  <div className={`${styles.quytrinh_item11}`}>
                    <Link
                      className={`${styles.quytrinh_item11_link}`}
                      href={{
                        pathname: "/",
                        query: {},
                      }}
                    >
                      {item.title}
                    </Link>
                  </div>
                  <div className={`${styles.quytrinh_item12}`}>
                    <span className={`${styles.qtrspan1}`}>{item.date}</span>
                    <span>Tạo bởi công ty: {item.company}.</span>
                    <span>Đối tượng áp dụng: {item.relative}</span>
                  </div>
                </div>

                <div className={`${styles.quytrinh_item2}`}>
                  <Link
                    href={{
                      pathname: "/",
                      query: {},
                    }}
                  >
                    <picture>
                      <img
                        src="https://phanmemnhansu.timviec365.vn/assets/images/icon-new/t-icon-quy-trinh.svg"
                        alt=""
                      ></img>
                    </picture>
                    <span className={`${styles.span_a}`}>Chi tiết</span>
                  </Link>

                  <button className={`${styles.button_option}`}>
                    <picture>
                      <img
                        src="https://phanmemnhansu.timviec365.vn/assets/images/icon-new/icon-edit.svg"
                        alt=""
                      ></img>
                    </picture>
                    <span className={`${styles.span_a}`}>Sửa</span>
                  </button>
                  {/* xóa */}
                  <button
                    className={`${styles.button_option}`}
                    onClick={() => handleModalDelete()}
                  >
                    <picture>
                      <img
                        src="https://phanmemnhansu.timviec365.vn/assets/images/icon-new/icon-remove.svg"
                        alt=""
                      ></img>
                    </picture>
                    <span className={`${styles.span_a}`}>Xóa</span>
                  </button>
                </div>
              </div>
              <hr className={`${styles.shr}`}></hr>
            </div>
          );
        })}
      </div>
      {active === 3 && <DeleteRecruitmentProcess onClose={closeModal}/>}
    </>
  );
}
