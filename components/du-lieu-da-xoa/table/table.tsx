import React from "react";
import styles from "./table.module.css";
import { Space } from "antd";
import CustomCollapse from "@/components/collapse/CustomCollapse";
import DataQTTD from "./quy-trinh-tuyen-dung";
import DataTTD from "./tin-tuyen-dung";
import DataVTCV from "./vi-tri-cong-viec";
import DataQTDT from "./quy-trinh-dao-tao";
import DataQTLV from "./quy-dinh-lam-viec";
import DataCSNV from "./chinh-sach-nhan-vien";

export default function TableData({}) {
  const handleClickCheckBox = (e: any) => {
    e.stopPropagation();
  };
  return (
    <div className={`${styles.l_detail_delete} `}>
      <div className={`${styles.l_detail_delete_content}`}>
        <div className={`${styles.l_tr} ${styles.l_color_tr}`}>
          <div>ID</div>

          <div>Tên</div>

          <div>Thời gian</div>

          <div>Chọn</div>
        </div>

        <Space
          direction="vertical"
          style={{ width: "100%", backgroundColor: "white" }}
        >
          <div className={`${styles.content}`}>
            <CustomCollapse
              label={
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className={`${styles.content}`}>
                    <p>Quy trình tuyển dụng </p>
                    <picture>
                      <img
                        src={`${"/icon_top_blue.svg"}`}
                        alt=""
                        style={{ marginBottom: 4 }}
                      ></img>
                    </picture>
                  </div>

                  <div className={`${styles.content_ckeckbox}`}>
                    <input
                      type="checkbox"
                      onClick={(e) => handleClickCheckBox(e)}
                    ></input>
                    <p>Tất Cả</p>
                  </div>
                </div>
              }
            >
              <DataQTTD></DataQTTD>
            </CustomCollapse>
          </div>
        </Space>

        <Space
          direction="vertical"
          style={{ width: "100%", backgroundColor: "white" }}
        >
          <div className={`${styles.content}`}>
            <CustomCollapse
              label={
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className={`${styles.content}`}>
                    <p>Tin tuyển dụng</p>
                    <picture>
                      <img
                        src={`${"/icon_top_blue.svg"}`}
                        alt=""
                        style={{ marginBottom: 4 }}
                      ></img>
                    </picture>
                  </div>

                  <div className={`${styles.content_ckeckbox}`}>
                    <input
                      type="checkbox"
                      onClick={(e) => handleClickCheckBox(e)}
                    ></input>
                    <p>Tất Cả</p>
                  </div>
                </div>
              }
            >
              <DataTTD></DataTTD>
            </CustomCollapse>
          </div>
        </Space>

        <Space
          direction="vertical"
          style={{ width: "100%", backgroundColor: "white" }}
        >
          <div className={`${styles.content}`}>
            <CustomCollapse
              label={
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className={`${styles.content}`}>
                    <p>Vị trí công việc</p>
                    <picture>
                      <img
                        src={`${"/icon_top_blue.svg"}`}
                        alt=""
                        style={{ marginBottom: 4 }}
                      ></img>
                    </picture>
                  </div>

                  <div className={`${styles.content_ckeckbox}`}>
                    <input
                      type="checkbox"
                      onClick={(e) => handleClickCheckBox(e)}
                    ></input>
                    <p>Tất Cả</p>
                  </div>
                </div>
              }
            >
              <DataVTCV></DataVTCV>
            </CustomCollapse>
          </div>
        </Space>

        <Space
          direction="vertical"
          style={{ width: "100%", backgroundColor: "white" }}
        >
          <div className={`${styles.content}`}>
            <CustomCollapse
              label={
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className={`${styles.content}`}>
                    <p>Quy trình đào tạo</p>
                    <picture>
                      <img
                        src={`${"/icon_top_blue.svg"}`}
                        alt=""
                        style={{ marginBottom: 4 }}
                      ></img>
                    </picture>
                  </div>

                  <div className={`${styles.content_ckeckbox}`}>
                    <input
                      type="checkbox"
                      onClick={(e) => handleClickCheckBox(e)}
                    ></input>
                    <p>Tất Cả</p>
                  </div>
                </div>
              }
            >
              <DataQTDT></DataQTDT>
            </CustomCollapse>
          </div>
        </Space>

        <Space
          direction="vertical"
          style={{ width: "100%", backgroundColor: "white" }}
        >
          <div className={`${styles.content}`}>
            <CustomCollapse
              label={
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className={`${styles.content}`}>
                    <p>Quy định làm việc</p>
                    <picture>
                      <img
                        src={`${"/icon_top_blue.svg"}`}
                        alt=""
                        style={{ marginBottom: 4 }}
                      ></img>
                    </picture>
                  </div>

                  <div className={`${styles.content_ckeckbox}`}>
                    <input
                      type="checkbox"
                      onClick={(e) => handleClickCheckBox(e)}
                    ></input>
                    <p>Tất Cả</p>
                  </div>
                </div>
              }
            >
              <DataQTLV></DataQTLV>
            </CustomCollapse>
          </div>
        </Space>

        <Space
          direction="vertical"
          style={{ width: "100%", backgroundColor: "white" }}
        >
          <div className={`${styles.content}`}>
            <CustomCollapse
              label={
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className={`${styles.content}`}>
                    <p>Chính sách nhân viên</p>
                    <picture>
                      <img
                        src={`${"/icon_top_blue.svg"}`}
                        alt=""
                        style={{ marginBottom: 4 }}
                      ></img>
                    </picture>
                  </div>

                  <div className={`${styles.content_ckeckbox}`}>
                    <input
                      type="checkbox"
                      onClick={(e) => handleClickCheckBox(e)}
                    ></input>
                    <p>Tất Cả</p>
                  </div>
                </div>
              }
            >
              <DataCSNV></DataCSNV>
            </CustomCollapse>
          </div>
        </Space>
      </div>
    </div>
  );
}
