/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import styles from "./listRecruitmentProcess.module.css";
import Link from "next/link";
import EditRecruitmentProcess from "../editRecruitmentProcess/EditRecruitmentProcess";
import DeleteRecruitmentProcess from "../deleteRecruitmentProcess/DeleteRecruitmentProcess";
import { useRouter } from "next/router";
export interface listRecruitmentProcess {}

export default function listRecruitmentProcess({ children }: any) {
  const router = useRouter()
  const [active, setActive] = useState(0)

  const handleClickDetail = (item: number) => {
    router.push('/quan-ly-tuyen-dung/quy-trinh-tuyen-dung/chi-tiet-quy-trinh/[idRecruitmentStage]',
    `/quan-ly-tuyen-dung/quy-trinh-tuyen-dung/chi-tiet-quy-trinh/${item}`)
  }

  const handleModalEdit = () => {
    setActive(2)
  }

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
      <div className={`${styles.all_quytrinh}`} style={{marginTop:'20px'}}>
        {listRecruitment.map((item) => {
          return (
            <div key={item._id} style={{width:'100%'}}>
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
{/* chi tiết */}
                <div className={`${styles.quytrinh_item2}`}>
                  <div onClick={() => handleClickDetail(item._id)}>
                    <picture>
                      <img
                        src="https://phanmemnhansu.timviec365.vn/assets/images/icon-new/t-icon-quy-trinh.svg"
                        alt=""
                      ></img>
                    </picture>
                    <span className={`${styles.span_a} ${styles.span_a_detail}`} style={{cursor:'default'}}>Chi tiết</span>
                    </div>
{/* edit */}
                  <button className={`${styles.button_option}`}
                   onClick={() => handleModalEdit()}>
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

{active === 2 && <EditRecruitmentProcess onClose={closeModal}/>}
      {active === 3 && <DeleteRecruitmentProcess onClose={closeModal}/>}
      </div> 
    </>
  );
}
