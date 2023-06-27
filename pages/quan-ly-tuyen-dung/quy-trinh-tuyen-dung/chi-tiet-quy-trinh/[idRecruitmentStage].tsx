/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import styles from "./detailRecruitmentStage.module.css";
import { useRouter } from "next/router";
import AddRecruitmentStage from "./addRecruitmentStage/them-quy-trinh";
import ListRecruitmentStage from "./listRecruitmentStage/listRecruitmentStage";
import RecruitmentStageSetting from "./RecruitmentStageSetting/RecruitmentStageSetting";
export interface listRecruitmentProcess {}

export default function listRecruitmentProcess({ children }: any) {
  const router =  useRouter()

  

  const [isModalOpen, setIsModalOpen] = useState(0);

  const handleBack = () => {
      router.back()
  }

  const handleCloseModal = () => {
    setIsModalOpen(0);
  };

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
            onClick={() => setIsModalOpen(1)}
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
          {isModalOpen === 1 && <AddRecruitmentStage onCloseModal={handleCloseModal}></AddRecruitmentStage>}
      
        <div className={`${styles.giaidoans}`}>
          {data?.map((item) => (
            <>
              <ListRecruitmentStage item = {item}></ListRecruitmentStage>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
