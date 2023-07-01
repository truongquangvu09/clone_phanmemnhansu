/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "./Component.module.css";
import MyPagination from "./Pagination";
import BodyFrameFooter from "@/components/bodyFrame/bodyFrame_footer/bodyFrame_footer";

function PunishmentTable({ display, data , violators}: any) {
    const [currentPage, setCurrentPage] = useState(1)
  const [visible, setVisible] = useState(true)

    
  const handlePageChange = (page: any, pageSize: any) => {
    setCurrentPage(page)
  };


  return (
    <>
      <div className={`${styles.tuyendung2}`} style={{ display: "block" }}>
        <div className={`${styles.tuyendung2_3}`}>
          <button className={`${styles.adds}`} style={{ display: display }}>
            <picture>
              <img
                src="https://phanmemnhansu.timviec365.vn/assets/images/l_images/add.png"
                alt="+"
              ></img>
            </picture>
            Thêm mới
          </button>
        </div>

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
                    src="https://phanmemnhansu.timviec365.vn/assets/images/t_images/t-icon-search.png"
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
                <th>Lỗi vi phạm</th>
                <th>Căn cứ quy định</th>
                <th>Số QĐ xử lý</th>
                <th>Thời gian vi phạm</th>
                <th>Người ký QĐ</th>
                <th>Hình thức xử lý sai phạm </th>
                <th>{violators}</th>
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
                    style={{ position: "relative", width: "110px" }}
                    onMouseEnter={() => setVisible(true)}
                    onMouseLeave={() => setVisible(false)} 
                  >
                      <img
                        src="https://phanmemnhansu.timviec365.vn/assets/images/l_images/3cham.png"
                        alt="Tùy chỉnh"
                        style={{ paddingTop: "6px" }}
                      />
                    
                    {visible && (
                      <div className={styles.settings}>
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

export default PunishmentTable;
