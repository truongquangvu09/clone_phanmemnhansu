/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import styles from "./detailRecruitmentProcess.module.css";
import { useRouter } from "next/router";
import AddRecruitmentStage from "../addRecruitmentProcess/them-quy-trinh";
export interface listRecruitmentProcess {}

export default function listRecruitmentProcess({ children }: any) {
  const router =  useRouter()
  const [visible, setVisible] = useState(false);
  const [openModal, setOpenModal] = useState(0)

  
  const handleBack = () => {
      router.back()
  }
  const closeModal = () => {
    setOpenModal(0)
  }

  const data = [
    {
      id: 1,
      magiaidoan: 'QTTD199',
      title: "Cillum numquam adipi",
      thanhvien: "Numquam pariatur Au",
      muctieu: " Laboriosam eum natu",
      thoigian: "30 ngày",
      mota: "Công việc trong ngành lập trình web đòi hỏi sự sáng tạo, kỹ năng kỹ thuật mạnh mẽ và khả.Một ngày làm việc của một lập trình viên web thường bắt đầu bằng việc tìm hiểu yêu cầu của dự án. Họ tham gia cuộc họp với khách hàng hoặc nhóm nội bộ để hiểu rõ yêu cầu chức năng, giao diện người dùng và các yêu cầu kỹ thuật khác. Sau đó, lập trình viên web sẽ bắt đầu quá trình phân tích, thiết kế và triển khai hệ thống. Trong quá trình phát triển, lập trình viên web sử dụng các ngôn ngữ lập trình như HTML, CSS và JavaScript để tạo nên giao diện người dùng và tương tác trên trang web. Họ cũng có thể sử dụng các framework như AngularJS, ReactJS hoặc Node.js để phát triển ứng dụng web phức tạp hơn.",
    },
    {
      id: 2,
      magiaidoan: 'QTTD1919',
      title: "Cillum numquam adipi",
      thanhvien: "Numquam pariatur Au",
      muctieu: " Laboriosam eum natu",
      thoigian: "30 ngày",
      mota: "Công việc trong ngành lập trình web đòi hỏi sự sáng tạo, kỹ năng kỹ thuật mạnh mẽ và khả năng làm việc nhóm hiệu quả. Những lập trình viên web giúp xây dựng và phát triển các ứng dụng web, trang web và hệ thống quản lý nội dung cho các khách hàng và doanh nghiệp. Một ngày làm việc của một lập trình viên web thường bắt đầu bằng việc tìm hiểu yêu cầu của dự án. Họ tham gia cuộc họp với khách hàng hoặc nhóm nội bộ để hiểu rõ yêu cầu chức năng, giao diện người dùng và các yêu cầu kỹ thuật khác. Sau đó, lập trình viên web sẽ bắt đầu quá trình phân tích, thiết kế và triển khai hệ thống.",
    },
    {
      id: 3,
      magiaidoan: 'QTTD19',
      title: "Cillum numquam adipi",
      thanhvien: "Numquam pariatur Au",
      muctieu: " Laboriosam eum natu",
      thoigian: "30 ngày",
      mota: "Công việc trong ngành lập trình web đòi hỏi sự sáng tạo, kỹ năng kỹ thuật mạnh mẽ và khả năng làm việc nhóm hiệu quả. Những lập trình viên web giúp xây dựng và phát triển các ứng dụng web, trang web và hệ thống quản lý nội dung cho các khách hàng và doanh nghiệp. Một ngày làm việc của một lập trình viên web thường bắt đầu bằng việc tìm hiểu yêu cầu của dự án. Họ tham gia cuộc họp với khách hàng hoặc nhóm nội bộ để hiểu rõ yêu cầu chức năng, giao diện người dùng và các yêu cầu kỹ thuật khác. Sau đó, lập trình viên web sẽ bắt đầu quá trình phân tích, thiết kế và triển khai hệ thống.",
    },
  ];
  return (
    <>
      <div className={`${styles.l_body}`}>
        <div className={`${styles.add_quytrinh}`}>
          <div className={`${styles.back_quytrinh}`}>
            <span onClick={handleBack}>
              <picture>
                <img
                  src="https://phanmemnhansu.timviec365.vn/assets/images/l_images/left_arrow.png"
                  alt="Back"
                ></img>
              </picture>
              Danh sách quy trình tuyển dụng
            </span>
          </div>
          <div className={`${styles.add_quytrinh1}`}>
            <button className={`${styles.adds}`}
            onClick={() => setOpenModal(1)}
            >
              <picture>
                <img
                  src="https://phanmemnhansu.timviec365.vn//assets/images/l_images/add.png"
                  alt=""
                ></img>
              </picture>
              Thêm giai đoạn tuyển dụng
            </button>
          </div>
        </div>

        {openModal === 1 && <AddRecruitmentStage closeModal={closeModal}></AddRecruitmentStage>}

        <div className={`${styles.giaidoans}`}>
          {data?.map((item) => (
            <div key={item.id}>
              <div className={`${styles.title_giaidoans}`}>
                <h5>({item.magiaidoan}) {item.title}</h5>
              </div>
              <div className={`${styles.all_giaidoans}`}>
                <div className={`${styles.giaidoans_item}`}>
                  <div className={`${styles.giaidoans_item_1}`}>
                    <div className={`${styles.circle_blue}`}>{item.id}</div>
                    <div className={`${styles.giaidoans_item_2}`}>
                      <div className={`${styles.row} ${styles.r_t_top}`}>
                        <div className={`${styles.row_top_right}`}>
                          <p>Cillum numquam adipi</p>
                        </div>
                        <div
                          className={`${styles.setting}`}
                          onMouseEnter={() => setVisible(true)}
                          onMouseLeave={() => setVisible(false)}
                        >
                          {visible && (
                            <div className={`${styles.settings_hover}`}>
                              <li>Chỉnh sửa </li>
                              <hr
                                style={{ marginTop: "0", marginBottom: "0" }}
                              ></hr>
                              <li>Xóa </li>
                            </div>
                          )}
                          <picture>
                            <img
                              src="https://phanmemnhansu.timviec365.vn/assets/images/l_images/3cham.png"
                              alt="setting"
                            ></img>
                          </picture>
                        </div>
                      </div>
                      <ul>
                        <li>
                          <picture>
                            <img
                              src="https://phanmemnhansu.timviec365.vn/assets/images/l_images/right_blue.png"
                              alt=""
                            ></img>
                          </picture>
                          Thành viên thực hiện: {item.thanhvien}
                          <span> {"Numquam pariatur Au"} </span>
                        </li>

                        <li>
                          <picture>
                            <img
                              src="https://phanmemnhansu.timviec365.vn/assets/images/l_images/right_blue.png"
                              alt=""
                            ></img>
                          </picture>
                          Mục tiêu: {item.muctieu}
                          <span> </span>
                        </li>

                        <li>
                          <picture>
                            <img
                              src="https://phanmemnhansu.timviec365.vn/assets/images/l_images/right_blue.png"
                              alt=""
                            ></img>
                          </picture>
                          Thời gian định lượng: {item.thoigian}
                          <span> {"Laboriosam eum natu"} </span>
                        </li>

                        <li>
                          <picture>
                            <img
                              src="https://phanmemnhansu.timviec365.vn/assets/images/l_images/right_blue.png"
                              alt=""
                            ></img>
                          </picture>
                          Mô tả công việc: 
                          <span className={`${styles.view_detail_desc}`}>
                            (Xem chi tiết)
                          </span>
                          <div className={`${styles.motacv}`} style={{maxHeight: "200px"}}>
                            <p>{item.mota}</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <hr></hr>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
