/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import styles from "./ListJobPosition.module.css";
import AddJobPosition from "../addJobPosition/AddJobPosition";
import DeleteJobPosition from "../deleteJobPosition/DeleteJobPosition";
import BodyFrameFooter from "@/components/bodyFrame/bodyFrame_footer/bodyFrame_footer";
import MyPagination from "@/components/pagination/Pagination";

export default function ListJobPosition({ children }: any) {
  const [open, setOpen] = useState(0)
  const [currentPage, setCurrentPage] = useState(1);

  const handleCloseModal = () => {
    setOpen(0)
  }

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };
  const data = [
    {
      id: 1,
      stt: 111,
      vitri: ' trưởng phòng',
      phongban: 'nhân sự',
      motacongviec: 'Quản lý quy trình tuyển dụng: Trưởng phòng nhân sự chịu trách nhiệm xây dựng và thực hiện các quy trình tuyển dụng, bao gồm việc đăng tin tuyển dụng, sàng lọc hồ sơ ứng viên, tiến hành phỏng vấn, thẩm định và lựa chọn nhân viên phù hợp với yêu cầu công việc.',
      yeucaucongviec: 'Quản lý hiệu suất và đánh giá: Trưởng phòng nhân sự thực hiện quy trình đánh giá hiệu suất của nhân viên và phối hợp với các bộ phận liên quan để xác định phương án thưởng và xử lý vấn đề hiệu suất không đạt yêu cầu.',
      lotrinhthangtien: 'Quản lý vấn đề nhân viên: Trưởng phòng nhân sự giải quyết các vấn đề liên quan đến nhân viên, bao g'
    },
    {
      id: 2,
      stt: 211,
      vitri: ' trưởng phòng',
      phongban: 'nhân sự',
      motacongviec: 'Quản lý quy trình tuyển dụng: Trưởng phòngo gồm việc đăng tin tuyển diến hàg phòng nhân sự thực hnh phỏng vấn, thẩm định và lựa chọn nhân viên phù hợp với yêu cầu công việc.',
      yeucaucongviec: 'Quản lý hiệu suất và đánh giá: Trưởniện quy trình đánn thưởng và xử lý vấn đề hiệu suất không đạt yêu cầu.',
      lotrinhthangtien: 'Quản lý vấn đề nhân viên: Trưởng phòn đến nhân viên, bao g'
    },
    {
      id: 3,
      stt: 311,
      vitri: ' trưởng phòng',
      phongban: 'nhân sự',
      motacongviec: 'Quản lý quy trình tuyển dụng: Trưởng phòng nhân sự chịu trách nhiệm xây dựng và thực hiện các quy trình tuyển dụng, bao gồm việc đăng tin tuyển dụng, sàng lọc hồ sơ ứng viên, tiến hành phỏng vấn, thẩm định và lựa chọn nhân viên phù hợp với yêu cầu công việc.',
      yeucaucongviec: 'Quản lý hiệu suất và đánh giá: Trưởng phòng nhân sự thực hiện quy trình đánh giá hiệu suất của nhân viên và phối hợp với các bộ phận liên quan để xác định phương án thưởng và xử lý vấn đề hiệu suất không đạt yêu cầu.',
      lotrinhthangtien: 'Quản lý vấn đề nhân viên: Trưởng phòng nhân sự giải quyết các vấn đề liên quan đến nhân viên, bao g'
    },
    {
      id: 4,
      stt: 411,
      vitri: ' trưởng phòng',
      phongban: 'nhân sự',
      motacongviec: 'Quản lý quy trình tuyển dụng: Trưởng phòng nhân sự chịu trách nhiệm xây dựng và thực hiện các quy trình tuyển dụng, bao gồm việc đăng tin tuyển dụng, sàng lọc hồ sơ ứng viên, tiến hành phỏng vấn, thẩm định và lựa chọn nhân viên phù hợp với yêu cầu công việc.',
      yeucaucongviec: 'Quản lý hiệu suất và đánh giá: Trưởng phòng nhân sự thực hiện quy trình đánh giá hiệu suất của nhân viên và phối hợp với các bộ phận liên quan để xác định phương án thưởng và xử lý vấn đề hiệu suất không đạt yêu cầu.',
      lotrinhthangtien: 'Quản lý vấn đề nhân viên: Trưởng phòng nhân sự giải quyết các vấn đề liên quan đến nhân viên, bao g'
    }

  ];
  return (
    <>
      <div className={`${styles.tuyendung2}`} style={{ display: "block" }}>
        <div className={`${styles.tuyendung2_3}`}>
          <button
            onClick={() => setOpen(1)}
            className={`${styles.adds}`}
          >
            <picture>
              <img
                src="https://phanmemnhansu.timviec365.vn/assets/images/l_images/add.png"
                alt="+"
              ></img>
            </picture>
            Thêm mới
          </button>
        </div>

        {open === 1 && <AddJobPosition closeModal={handleCloseModal}></AddJobPosition>}
        {open === 2 && <DeleteJobPosition closeModal={handleCloseModal}></DeleteJobPosition>}
        <div className={`${styles.tuyendung2_2}`}>
          <form className={`${styles.t_form_search}`}>
            <div className={`${styles.t_div_search}`} style={{ display: 'none' }}>
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
                <th>Vị trí</th>
                <th>Phòng ban</th>
                <th>Mô tả công việc</th>
                <th>Yêu cầu công việc</th>
                <th>Lộ trình thăng tiến</th>
                <th className={`${styles.lastth}`}></th>
              </tr>
            </thead>
            <tbody className={`${styles.filter}`}>
              {data?.map((item: any) => (
                <tr key={item.id} style={{ height: "37px" }}>
                  <td>{item.stt}</td>
                  <td>{item.vitri}</td>
                  <td>{item.phongban}</td>
                  <td>{item.motacongviec}</td>
                  <td>{item.yeucaucongviec}</td>
                  <td>
                    <a href={item.lotrinhthangtien}>{item.lotrinhthangtien}</a>
                  </td>

                  <td
                    onClick={() => setOpen(2)}
                    className={`${styles.r_t_top_right}`}
                    style={{
                      position: "relative",
                      width: "110px",
                      opacity: "1",
                    }}
                  >
                    <img
                      src="	https://phanmemnhansu.timviec365.vn/assets/images/l_images/trash.png"
                      alt="Tùy chỉnh"
                      style={{ paddingTop: "6px" }}
                    />
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
      <BodyFrameFooter src='https://www.youtube.com/embed/6k7iZ3ZrW2s'></BodyFrameFooter>
    </>
  );
}
