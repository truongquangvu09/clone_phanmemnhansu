import React, { useEffect, useState } from "react";
import styles from "./recruitmentProcess.module.css";
import AddRecruitmentProcess from "@/components/quan-ly-tuyen-dung/quy-trinh-tuyen-dung/addRecruitmentProcess/addRecruitmentProcess";
import ListRecruitmentProcess from "./danh-sach-quy-trinh";
import BodyFrameFooter from "@/components/bodyFrame/bodyFrame_footer/bodyFrame_footer";
import { GetDataRecruitment } from "@/pages/api/quan-ly-tuyen-dung/RecruitmentManagerService";
import PageAuthenticator from "@/components/quyen-truy-cap";
export interface RecruitmentProcess {}

export default function RecruitmentProcess({ children }: any) {
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [key, setKey] = useState<any>("");
  const [dataAdd, setDataAdd] = useState<any>("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dataRecruitment, setDataRecruitment] = useState<any>([]);
  const [authen, setAuthen] = useState<any>()

  useEffect(() => {
    const getNewData = async () => {
      const response = await GetDataRecruitment(currentPage, 5, key);

      if( response?.status === 403) {
        setAuthen(false)
      }
      else if (response?.status === 200) {
        setAuthen(true)
        setDataRecruitment(response?.data.data);
      }
    };
    getNewData();
  }, [dataAdd, currentPage, key]);

  const handleDelete = async () => {
    const itemsPerPage = dataRecruitment.length;
    const updatedPage =
      itemsPerPage > 1 ? currentPage : Math.max(currentPage - 1, 1);
    const newData = await GetDataRecruitment(updatedPage, 5, key);
    if (newData) {
      setDataRecruitment(newData?.data.data);
    }
  };
  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const handleOpenModalAdd = () => {
    setOpenModalAdd(true);
    setAnimateModal(true);
  };

  const handleCloseModalAdd = () => {
    setAnimateModal(false);
    setTimeout(() => {
      setOpenModalAdd(false);
    }, 300);
  };
  const handleSearch = (key) => {
    setKey(key)
  }
  const newRecruitmentProcess = (data: any) => {
    setDataAdd(data);
  };

  return (
    <>
    {authen === false ? <PageAuthenticator/> : (
        <div
        className={`${styles.l_body} ${
          openModalAdd ? styles.scrollableModal : ""
        }`}
      >
        <div className={`${styles.add_quytrinh}`}>
          <div className={`${styles.add_quytrinh1}`}>
            <button
              type="submit"
              className="adds"
              style={{ outline: "none", border: "none", padding: "0" }}
            >
              <picture
                className={`${styles.add_quytrinh2}`}
                onClick={handleOpenModalAdd}
              >
                <img
                  src={`${"/add.png"}`}
                  alt=""
                  style={{ marginRight: "10px", marginTop: "-3px" }}
                ></img>
                <p className={`${styles.add_quytrinh2_title}`}>
                  Thêm quy trình tuyển dụng
                </p>
              </picture>
            </button>
          </div>
          {openModalAdd && (
            <AddRecruitmentProcess
              animation={animateModal}
              handleCloseModalAdd={handleCloseModalAdd}
              addRecruitmentProcess={newRecruitmentProcess}
            ></AddRecruitmentProcess>
          )}
          <div className={`${styles.search_quytrinh}`}>
            <form className={`${styles.t_form_search}`}>
              <div className={`${styles.t_div_search}`}>
                <input
                  type="search"
                  className={`${styles.search_quytrinh}`}
                  placeholder="Tìm kiếm"
                  name="search"
                  spellCheck={false}
                  autoComplete="off"
                  onChange={(e) => handleSearch(e.target.value)}
                ></input>
                <button className={`${styles.button_search}`}>
                  <picture style={{ paddingLeft: "12px" }}>
                    <img src={`${"/icon-search.png"}`} alt="search"></img>
                  </picture>
                </button>
              </div>
            </form>
          </div>
        </div>

        <ListRecruitmentProcess
          dataRecruitment = {dataRecruitment}
          handlePage = {handlePageChange}
          currentPage = {currentPage}
          handleDelete = {handleDelete}
          setDataUpDate = {newRecruitmentProcess}
        ></ListRecruitmentProcess>

        <BodyFrameFooter src="https://www.youtube.com/embed/J7JEoQkqarA"></BodyFrameFooter>
      </div>
    )}
    
    </>
  );
}
