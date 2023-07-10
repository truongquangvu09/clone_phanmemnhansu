import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import TableData from "./table/table";
import { Collapse } from "antd";
const { Panel } = Collapse;

export default function DeletedDataComPonent() {
  return (
    <>
      <div className={`${styles.l_body}`}>
        <div className={`${styles.t_delete_head}`}>
          <div className={`${styles.header_left}`}>
            <p>DỮ LIỆU ĐÃ XÓA GẦN ĐÂY</p>
          </div>

          <div className={`${styles.between}`}>
            <div className={`${styles.between_time}`}>
              <picture>
                <img src={`${"/icon-time.svg"}`} alt=""></img>
              </picture>
            </div>
            <div className={`${styles.between_delete}`}>
              <picture>
                <img src={`${"/icon-trash.svg"}`} alt=""></img>
              </picture>
            </div>
          </div>

          <div className={`${styles.right}`}>
            <form style={{ width: "70%" }}>
              <div className={`${styles.t_div_search}`}>
                <input
                  type="search"
                  placeholder="Tìm kiếm"
                  name="search"
                  spellCheck={false}
                ></input>
                <picture>
                  <img src={`${"/t-icon-search.png"}`} alt=""></img>
                </picture>
              </div>
            </form>
          </div>
        </div>
       <TableData></TableData>
      </div>
    </>
  );
}
