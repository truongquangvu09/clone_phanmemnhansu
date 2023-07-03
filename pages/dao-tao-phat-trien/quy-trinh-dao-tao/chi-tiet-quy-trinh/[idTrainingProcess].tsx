import React, { useState, useEffect } from "react";
import styles from "./DetailTrainingProcess.module.css";
import { useRouter } from "next/router";
import ListDetailTrainingProcess from "./listDetailTrainingProcess/ListDetailTrainingProcess";
import AddDetailTrainingProcess from "./addDetailTrainingProcess/AddDetailTrainingProcess";
import BodyFrameFooter from "@/components/bodyFrame/bodyFrame_footer/bodyFrame_footer";

export default function DetailTrainingProcess({ children }: any) {
  const [active, setActive] = useState(1);
  const [open, setOpen] = useState(0);
  const router = useRouter();
  const handleCloseModal = () => {
    setOpen(0);
  };

  const listTab = [
    {
      key: 1,
      header: "QUY TRÌNH ĐÀO TẠO",
    },
  ];

  const data = [
    {
      id: 1,
      title: "Cillum numquam adipi",
      doituong: "Numquam pariatur Au",
      noidung:
        "Công việc trong ngành lập trình web đòi hỏi sự sáng tạo, kỹ năng kỹ thuật mạnh mẽ và khả.Một ngày làm việc của một lập trình viên web thường bắt đầu bằng việc tìm hiểu yêu cầu của dự án. Họ tham gia cuộc họp với khách hàng hoặc nhóm nội bộ để hiểu rõ yêu cầu chức năng, giao diện người dùng và các yêu cầu kỹ thuật khác. Sau đó, lập trình viên web sẽ bắt đầu quá trình phân tích, thiết kế và triển khai hệ thống. Trong quá trình phát triển, lập trình viên web sử dụng các ngôn ngữ lập trình như HTML, CSS và JavaScript để tạo nên giao diện người dùng và tương tác trên trang web.",
    },
    {
      id: 2,
      title: "Cillum numquam adipi",
      doituong: "Numquam pariatur Au",
      noidung:
        "Công việc trong ngành lập trình web đòi hỏi sự sáng tạo, kỹ năng kỹ thuật mạnh mẽ và khả.Một ngày làm việc của một lập trình viên web thường bắt đầu bằng việc tìm hiểu yêu cầu của dự án. Họ tham gia cuộc họp với khách hàng hoặc nhóm nội bộ để hiểu rõ yêu cầu chức năng, giao diện người dùng và các yêu cầu kỹ thuật khác. Sau đó, lập trình viên web sẽ bắt đầu quá trình phân tích, thiết kế và triển khai hệ thống. Trong quá trình phát triển, lập trình viên web sử dụng các ngôn ngữ lập trình như HTML, CSS và JavaScript để tạo nên giao diện người dùng và tương tác trên trang web.",
    },
    {
      id: 3,
      title: "Cillum numquam adipi",
      doituong: "Numquam pariatur Au",
      noidung:
        "Công việc trong ngành lập trình web đòi hỏi sự sáng tạo, kỹ năng kỹ thuật mạnh mẽ và khả.Một ngày làm việc của một lập trình viên web thường bắt đầu bằng việc tìm hiểu yêu cầu của dự án. Họ tham gia cuộc họp với khách hàng hoặc nhóm nội bộ để hiểu rõ yêu cầu chức năng, giao diện người dùng và các yêu cầu kỹ thuật khác. Sau đó, lập trình viên web sẽ bắt đầu quá trình phân tích, thiết kế và triển khai hệ thống. Trong quá trình phát triển, lập trình viên web sử dụng các ngôn ngữ lập trình như HTML, CSS và JavaScript để tạo nên giao diện người dùng và tương tác trên trang web.",
    },
    {
      id: 4,
      title: "Cillum numquam adipi",
      doituong: "Numquam pariatur Au",
      noidung:
        "Công việc trong ngành lập trình web đòi hỏi sự sáng tạo, kỹ năng kỹ thuật mạnh mẽ và khả.Một ngày làm việc của một lập trình viên web thường bắt đầu bằng việc tìm hiểu yêu cầu của dự án. Họ tham gia cuộc họp với khách hàng hoặc nhóm nội bộ để hiểu rõ yêu cầu chức năng, giao diện người dùng và các yêu cầu kỹ thuật khác. Sau đó, lập trình viên web sẽ bắt đầu quá trình phân tích, thiết kế và triển khai hệ thống. Trong quá trình phát triển, lập trình viên web sử dụng các ngôn ngữ lập trình như HTML, CSS và JavaScript để tạo nên giao diện người dùng và tương tác trên trang web.",
    },
  ];
  return (
    <>
      <div className={`${styles.ct_quytrinh}`}>
        <div className={`${styles.l_body}`}>
          <ul className={`${styles.nav} ${styles.nav_tabs}`}>
            {listTab.map((item) => (
              <div key={item.key}>
                <li className={`${styles.li_tabs}`}>
                  <span
                    className={`${
                      active === item?.key ? styles.active : styles.hover
                    } `}
                    onClick={() => setActive(item.key)}
                  >
                    {item.header}
                  </span>
                </li>
              </div>
            ))}
          </ul>

          <div className={`${styles.add_quytrinh}`}>
            <div className={`${styles.back_quytrinh}`}>
              <button style={{ display: "flex" }} onClick={() => router.back()}>
                <picture>
                  <img
                    src="https://phanmemnhansu.timviec365.vn/assets/images/l_images/left_arrow.png"
                    alt=""
                  ></img>
                </picture>
                <p>Danh sách quy trình đào tạo</p>
              </button>
            </div>

            <div className={`${styles.add_quytrinh1}`}>
              <button style={{ display: "flex" }} onClick={() => setOpen(1)}>
                <picture>
                  <img
                    src="https://phanmemnhansu.timviec365.vn//assets/images/l_images/add.png"
                    alt=""
                  ></img>
                </picture>
                <p>Thêm giai đoạn đào tạo</p>
              </button>
            </div>
          </div>
          {open === 1 && (
            <AddDetailTrainingProcess
              closeModal={handleCloseModal}
            ></AddDetailTrainingProcess>
          )}
          <div className={`${styles.giaidoans}`}>
            {data?.map((item, index) => (
              <div key={index}>
                <ListDetailTrainingProcess
                  item={item}
                ></ListDetailTrainingProcess>
              </div>
            ))}
          </div>
        </div>
        <BodyFrameFooter src = 'https://www.youtube.com/embed/U0c_dQb-6z0'></BodyFrameFooter>
      </div>
    </>
  );
}
