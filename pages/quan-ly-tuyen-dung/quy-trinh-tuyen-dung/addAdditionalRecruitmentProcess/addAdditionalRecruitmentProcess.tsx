import React, { useEffect, useState } from "react";
import styles from "../addRecruitmentProcess/addRecruitmentProcess.module.css";
import MyEditor from "../components/Editor";

export interface AddAdditionalRecruitmentProcess {}

export default function RecruitmentProcess({ children }: any) {
  return (
    <>
      <div className={`${styles.list_process}`} style={{marginTop: '5px'}}>
        <div className={`${styles.form_groups}`}>
        
          <label>
            Tên giai đoạn
            <span className={`${styles.red}`}> *</span>
          </label>
          <div className={`${styles.inputright}`}>
            <input
              type="text"
              className={`${styles.inputquytrinh}`}
              placeholder="Nhập tên giai đoạn"
            ></input>
            <picture style={{ display: "none" }}>
              <img
                src = {`${'/danger.png'}`}
                alt="Lỗi"
              ></img>
            </picture>
            <div
              className={`${styles.errors}`}
              style={{ display: "none" }}
            ></div>
          </div>
        </div>

        <div className={`${styles.form_groups}`}>
          <label>
            Bộ phận đảm nhận
            <span className={`${styles.red}`}> *</span>
          </label>
          <div className={`${styles.inputright}`}>
            <input
              type="text"
              className={`${styles.inputquytrinh}`}
              placeholder="Nhập tên giai đoạn"
            ></input>
            <picture style={{ display: "none" }}>
              <img
                src = {`${'/danger.png'}`}
                alt="Lỗi"
              ></img>
            </picture>
            <div
              className={`${styles.errors}`}
              style={{ display: "none" }}
            ></div>
          </div>
        </div>

        <div className={`${styles.form_groups}`}>
          <label>
            Mục tiêu
            <span className={`${styles.red}`}> *</span>
          </label>
          <div className={`${styles.inputright}`}>
            <input
              type="text"
              className={`${styles.inputquytrinh}`}
              placeholder="Nhập tên giai đoạn"
            ></input>
            <picture style={{ display: "none" }}>
              <img
               src = {`${'/danger.png'}`}
                alt="Lỗi"
              ></img>
            </picture>
            <div
              className={`${styles.errors}`}
              style={{ display: "none" }}
            ></div>
          </div>
        </div>

        <div className={`${styles.form_groups}`}>
          <label>
            Thời gian định lượng
            <span className={`${styles.red}`}></span>
          </label>
          <div className={`${styles.inputright}`}>
            <input
              type="text"
              className={`${styles.inputquytrinh}`}
              placeholder="Nhập tên giai đoạn"
            ></input>
          </div>
        </div>

        <div className={`${styles.form_groups}`}>
          <label>
            Mô tả công việc
            <span className={`${styles.red}`}></span>
          </label>
          <div className={`${styles.input_full}`}>
            <Input_textarea />
          </div>
        </div>
      </div>
    </>
  );

  function Input_textarea() {
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [data, setData] = useState("");

    useEffect(() => {
      setEditorLoaded(true);
    }, []);
    return (
      <div className={styles.ckeditor}>
        <MyEditor
          name="Editor"
          onChange={(data: React.SetStateAction<string>) => {
            setData(data);
          }}
          editorLoaded={editorLoaded}
          value={undefined}
        />

        {/* {JSON.stringify(data)} */}
      </div>
    );
  }
}
