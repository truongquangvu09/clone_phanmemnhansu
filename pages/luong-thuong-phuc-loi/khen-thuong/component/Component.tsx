/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "./Component.module.css";
import ModalAddReward from "../personalReward/modalAddPersonalCompliments/ModalAddReward";
import ModalEditPersonalCompliments from "../personalReward/modalEditPersonalCompliments/ModalEditPersonalCompliments";
import ModalEditCommendationTeam from "../commendationTeam/modalEditCommendationTeam/ModalEditCommendationTeam";
import ModalEditAchievementList from "../achievementList/modalEditAchievementList/ModalEditAchievementList";


import BodyFrameFooter from "@/components/bodyFrame/bodyFrame_footer/bodyFrame_footer";
import ModalAddTeamCompliments from "../commendationTeam/modalAddTeamCompliments/modalAddTeamCompliments";
import MyPagination from "@/components/pagination/Pagination";

function RewardTable({ display, data, model }: any) {
  const [currentPage, setCurrentPage] = useState(1);
  const [visible, setVisible] = useState(true);
  const [typeModal, setTypeModal] = useState(model);
  const [open, setOpen] = useState(false);
  const [modalEditType, setModalEditType] = useState('')

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const handleCloseModal = () => {
    setTypeModal(model);
    setOpen(false);
  };
  
 useEffect(()=> {
  const modalEditTypes = () => {
    if (typeModal === 'canhan'){
      setModalEditType('canhan')
    }
    if (typeModal === 'tapthe'){
      setModalEditType('tapthe')
    }
    if (typeModal === 'list'){
      setModalEditType('list')
    }
  }
  modalEditTypes()
 },[modalEditType])

  return (
    <>
      <div className={`${styles.tuyendung2}`} style={{ display: "block" }}>
        <div className={`${styles.tuyendung2_3}`}>
          <button
            onClick={() => setOpen(true)}
            className={`${styles.adds}`}
            style={{ display: display }}
          >
            <picture>
              <img
                src={`/add.png`}
                alt="+"
              ></img>
            </picture>
            Thêm mới
          </button>
        </div>
        {typeModal === "canhan" && open && (
          <ModalAddReward onClose={handleCloseModal}></ModalAddReward>
        )}
        {typeModal === "tapthe" && open && (
          <ModalAddTeamCompliments
            onClose={handleCloseModal}
          ></ModalAddTeamCompliments>
        )}
        {typeModal === "chitiet" && modalEditType === 'canhan' && (
          <ModalEditPersonalCompliments onClose={handleCloseModal}></ModalEditPersonalCompliments>
        )}
        {typeModal === "chitiet" && modalEditType === 'tapthe' && (
          <ModalEditCommendationTeam onClose={handleCloseModal}></ModalEditCommendationTeam>
        )}

        {typeModal === "chitiet" && modalEditType === 'list' && (
          <ModalEditAchievementList onClose={handleCloseModal}></ModalEditAchievementList>
        )}

        <div className={`${styles.tuyendung2_2}`}>
          <form className={`${styles.t_form_search}`}>
            <div className={`${styles.t_div_search}`}>
              <input
                type="search"
                placeholder="Tìm kiếm"
                name="search"
                spellCheck="false"
                autoComplete="off"
                className={`${styles.search_text}`}
              ></input>
              <button className={`${styles.search_button}`}>
                <picture>
                  <img
                    src={`/icon-search.png`}
                    alt="search"
                  ></img>
                </picture>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={`${styles.tab_content}`}>
        <div
          className={`${styles.member_list}`}
          style={{ overflowY: "scroll" }}
        >
          <table className={`${styles.table} ${styles.tablelist}`}>
            <thead>
              <tr>
                <th className={`${styles.firstth}`}>STT</th>
                <th>Số quyết định</th>
                <th>Nội dung khen thưởng</th>
                <th>Tên đối tượng nhận thưởng</th>
                <th>Thời điểm</th>
                <th>Hình thức khen thưởng</th>
                <th>Danh hiệu</th>
                <th>Cấp khen</th>
                <th className={`${styles.lastth}`}></th>
              </tr>
            </thead>
            <tbody className={`${styles.filter}`}>
              {data?.map((item: any) => (
                <tr key={item.stt} style={{ height: "37px" }}>
                  <td>{item.stt}</td>
                  <td>{item.soquyetdinh}</td>
                  <td>{item.noidungkhenthuong}</td>
                  <td>{item.tendoituongnhan}</td>
                  <td>{item.thoidiem}</td>
                  <td>{item.hinhthuckhenthuong}</td>
                  <td>{item.danhhieu}</td>
                  <td>{item.capkhen}</td>
                  <td
                    className={`${styles.r_t_top_right}`}
                    style={{
                      position: "relative",
                      width: "110px",
                      opacity: "1",
                    }}
                    onMouseEnter={() => setVisible(true)}
                    onMouseLeave={() => setVisible(false)}
                  >
                    <img
                      src={`/3cham.png`}
                      alt="Tùy chỉnh"
                      style={{ paddingTop: "6px" }}
                    />

                    {visible && (
                      <div
                        className={styles.settings}
                        onClick={() => setTypeModal("chitiet")}
                      >
                        <li>Chỉnh sửa</li>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
      <BodyFrameFooter src="https://www.youtube.com/embed/qICTgD7Dt9w"></BodyFrameFooter>
    </>
  );
}

export default RewardTable;
