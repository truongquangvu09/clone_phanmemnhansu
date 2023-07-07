/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import styles from "./ListTrainingProcess.module.css";
import { useRouter } from "next/router";
import AddTrainingProcess from "../addTrainingProcess/AddTrainingProcess";
import DeleteTrainingProcess from "../deleteTrainingProcess/DeleteTrainingProcess";
import BodyFrameFooter from "@/components/bodyFrame/bodyFrame_footer/bodyFrame_footer";
import MyPagination from "@/components/pagination/Pagination";

export default function ListTrainingProcess({ children }: any) {
  const [openModal, setOpenModal] = useState(0);
  const [animateModal, setAnimateModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };
  const handleOpenModal = (type: any) => {
    setOpenModal(type);
    setAnimateModal(true);
  };

  const handleCloseModal = () => {
    setAnimateModal(false);
    setTimeout(() => {
      setOpenModal(0);
    }, 300);
  };
  const handleButtonClick = (id: number) => {
    router.push(
      "/dao-tao-phat-trien/quy-trinh-dao-tao/chi-tiet-quy-trinh/[idTrainingProcess]",
      `/dao-tao-phat-trien/quy-trinh-dao-tao/chi-tiet-quy-trinh/${id}`
    );
  };

  const data = [
    {
      id: 1,
      title: "(QTTD112) Dexter Watkins",
      mota: "Quản lý",
    },
    {
      id: 2,
      title: "(QTTD112) Dexter Watkins",
      mota: "Quản lý",
    },
    {
      id: 3,
      title: "(QTTD112) Dexter Watkins",
      mota: "Quản lý",
    },
    {
      id: 4,
      title: "(QTTD112) Dexter Watkins",
      mota: "Quản lý",
    },
  ];
  return (
    <>
      <div className={`${styles.tab_content}`}>
        <div
          className={`${styles.margintop5} ${styles.tab_pane} ${styles.fade} ${styles.in}  ${styles.active}`}
        >
          <div className={`${styles.list_quytrinh}`}>
            <div className={`${styles.add_quytrinh}`}>
              <div className={`${styles.add_quytrinh1}`}>
                <button
                  className={`${styles.adds}`}
                  onClick={() => handleOpenModal(1)}
                >
                  <picture>
                    <img src={`/add.png`} alt="+" />
                  </picture>
                  <p>Thêm mới</p>
                </button>
              </div>
              {openModal === 1 && (
                <AddTrainingProcess
                  animation={animateModal}
                  closeModal={handleCloseModal}
                ></AddTrainingProcess>
              )}
              {openModal === 2 && (
                <DeleteTrainingProcess
                  animation={animateModal}
                  closeModal={handleCloseModal}
                ></DeleteTrainingProcess>
              )}
              <div className={`${styles.search_quytrinh}`}>
                <form className={`${styles.t_form_search}`} method="POST">
                  <div className={`${styles.t_div_search}`}>
                    <input
                      type="search"
                      placeholder="Tìm kiếm"
                      spellCheck={false}
                      name="search"
                    ></input>
                    <button className={`${styles.button_search}`}>
                      <picture>
                        <img
                          src={`/icon-search.png`}
                          alt="search"
                          // onClick={() => handleSearch()}
                        ></img>
                      </picture>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className={`${styles.all_quytrinh}`}>
              {data?.map((item) => (
                <>
                  <div key={item.id} className={`${styles.quytrinh_item}`}>
                    <div className={`${styles.quytrinh_item1}`}>
                      <div
                        onClick={() => handleButtonClick(item.id)}
                        className={`${styles.quytrinh_item11}`}
                        style={{ cursor: "pointer" }}
                      >
                        <li>{item.title}</li>
                      </div>
                      <div className={`${styles.quytrinh_item12}`}>
                        <li>{item.mota}</li>
                      </div>
                    </div>

                    <div className={`${styles.quytrinh_item2}`}>
                      <button onClick={() => handleOpenModal(2)}>
                        <picture>
                          <img src={`/trash.png`} alt="Xóa"></img>
                        </picture>
                      </button>
                    </div>
                  </div>
                  <hr className={`${styles.shr}`}></hr>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className={`${styles.pagination}`}>
          <MyPagination
            current={currentPage}
            total={50}
            pageSize={10}
            onChange={handlePageChange}
          />
        </div>
        <BodyFrameFooter src="https://www.youtube.com/embed/U0c_dQb-6z0"></BodyFrameFooter>
      </div>
    </>
  );
}
