import React, { useState } from "react";
// import styles from "@/components/quan-ly-tuyen-dung/thuc-hien-tuyen-dung/Recruitment/recruitment.module.css";
import styles from "./ListRecruitment.module.css"
import { useRouter } from "next/router";
import EditPerformRecruitment from "@/components/quan-ly-tuyen-dung/thuc-hien-tuyen-dung/EditPerformRecruitment/EditPerformRecruitment";
export interface ListRecruitment { }

export default function ListRecruitment({ data }: any) {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [visible, setVisible] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);


  const handleCloseModalAdd = () => {
    setAnimateModal(false);
    setTimeout(() => {
      setOpenModalEdit(false);
    }, 300);
  };
  const handleOpenModalEdit = () => {
    setOpenModalEdit(true);
    setAnimateModal(true);
  };

  const handleClick = (id: any) => {
    router.push(
      "/quan-ly-tuyen-dung/thuc-hien-tuyen-dung/danh-sach-tuyen-dung/[idRecruitment]",
      `/quan-ly-tuyen-dung/thuc-hien-tuyen-dung/danh-sach-tuyen-dung/${id}`
    );
  };

  return (
    <div>
      <div className={`${styles.new_r_t}`}>
        <div className={`${styles.new_r_t_left}`}>
          <div className={`${styles.new_r_t_header} ${styles.row}`}>
            <div className={`${styles.new_r_t_header_content} `}>
              <h3 className={`${styles.new_r_t_left_h3}`}>
                <button
                  style={{ border: "none", backgroundColor: "transparent", padding: 0 }}
                >
                  <p
                    style={{ cursor: "default" }}
                    className={`${styles.new_r_t_left_link}`}
                    onClick={() => handleClick(data?.id)}
                  >
                    {data?.tieude}
                  </p>
                </button>
              </h3>
            </div>

            <div className={``}>
              <p className={`${styles.t_ita}`}>Tạo bởi: {data?.company}</p>
            </div>

            <div className={`${styles.t_new_type}`}>
              <p className={`${styles.new_r_t_left_tin}`}>Tin quá hạn tuyển</p>
            </div>

            <div
              className={`${styles.new_r_top_right}`}
              onMouseEnter={() => setVisible(true)}
              onMouseLeave={() => setVisible(false)}
            >
              <div className={`${styles.pull_right} ${styles.hover_t}`}>
                <picture className={`${styles.pull_right_img}`}>
                  <img src={`/3cham.png`} alt=""></img>
                </picture>
                {visible && (
                  <div className={`${styles.settings}`}>
                    <button
                      style={{ border: "none", backgroundColor: "transparent", padding: '0' }}
                    >
                      <li
                        style={{ paddingRight: '102px' }}
                        className={`${styles.detail_new}`}
                        onClick={() => handleClick(data?.id)}
                      >
                        Chi tiết
                      </li>
                    </button>

                    <button
                      style={{ paddingRight: '55px' }}
                      className={`${styles.edit_new}`}
                      onClick={handleOpenModalEdit}
                    >
                      Chỉnh sửa tin
                    </button>
                    <hr style={{ marginTop: "0", marginBottom: "0" }}></hr>
                    <li>Gỡ tin tuyển dụng</li>
                    <li>Thiết lập làm tin mẫu</li>
                  </div>
                )}
              </div>
            </div>
          </div>
          {openModalEdit && (
            <EditPerformRecruitment animation={animateModal}
              handleCloseModalAdd={handleCloseModalAdd}
            ></EditPerformRecruitment>
          )}
          <div className={`${styles.new_r_t_body}`}>
            <ul className={`${styles.new_r_t_body_content}`}>
              <li>
                <span className={`${styles.text}`}>
                  {data?.loaihinhlamviec}. {data?.luong}
                </span>
              </li>
              <li>
                <picture className={`${styles.icon}`}>
                  <img src={`/calendar.png`} alt=""></img>
                </picture>
                <span className={`${styles.text}`}>{data?.date}</span>
              </li>
              <li>
                <picture className={`${styles.icon}`}>
                  <img src={`/house.png`} alt=""></img>
                </picture>
                <span className={`${styles.text}`}>{data?.diachi} </span>
              </li>
            </ul>

            <ul className={`${styles.new_r_t_body_content}`}>
              <li>
                <span className={`${styles.text}`}>
                  Cần tuyển: {data?.soluong}
                </span>
              </li>

              <li>
                <span className={`${styles.text}`}>
                  Người phụ trách: {data?.nguoiphutrach}
                </span>
              </li>
              <li>
                <span className={`${styles.text}`}>
                  Mã quy trình tuyển dụng áp dụng: {data?.matuyendung}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
