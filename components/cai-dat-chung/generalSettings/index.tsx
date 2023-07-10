import React, { useEffect, useState } from "react";
import styles from "./GeneralSettings.module.css";
import { Space } from "antd";
import BodyFrameFooter from "@/components/bodyFrame/bodyFrame_footer/bodyFrame_footer";
import CustomCollapse from "@/components/collapse/CustomCollapse";
import PublicInformation from "./publicinformation";
import Edit from "./edit";
import NotificationSetting from "./notification/Notification";
import Remind from "./remind/Remind";
import Decentralization from "./decentralization";


const handleButtonClick = (e) => {
  e.preventDefault();
};



export default function GeneralSettings() {

  const componentObj = {
    city: <PublicInformation />,
    edit: <Edit onClickButton={handleButtonClick} />,
    notification: <NotificationSetting />,
    remind: <Remind />
  };


  const [page, setPage] = useState(1)
  const [currentComponents, setCurrentComponents] = useState<string[]>([]);

  console.log(currentComponents)

  const handleClick = (typeCollapse: string) => {
    setCurrentComponents((prev) => {
      const hasCity = prev.includes('city');
      const hasEdit = prev.includes('edit');
  
      if (typeCollapse === 'city' && hasCity) {
        // Xóa city và thêm edit
        return prev.filter((component) => component !== 'city').concat('edit');
      } else if (typeCollapse === 'edit' && hasEdit) {
        // Xóa edit và thêm city
        return prev.filter((component) => component !== 'edit').concat('city');
      } else {
        // Giữ nguyên các giá trị khác
        return prev.filter((component) => component !== 'city' && component !== 'edit').concat(typeCollapse);
      }
    });
  };
  
  return (
    <>
      <div className={`${styles.tab_content}`}>
        <div className={`${styles.l_content_setting}`}>

        {page === 1 && (
          <>
           <Space direction="vertical" style={{ width: "100%" }}>
            <div className={`${styles.content}`}>
              <CustomCollapse
                label={
                  <>
                    <div
                      className={`${styles.content_1_left}`}
                       onClick={() => handleClick('city')}
                    >
                      <p style={{ lineHeight: "36px" }}>THÔNG TIN CÔNG TY</p>
                      <picture
                        style={{ marginTop: "-3px", lineHeight: "36px" }}
                      >
                        <img src={`${"/icon_down.svg"}`} alt=""></img>
                      </picture>
                    </div>
                    <div
                      className={`${styles.content_1_right}`}
                      onClick={() => handleClick('edit')}
                    >
                      <button>Chỉnh sửa</button>
                    </div>
                  </>
                }
              >
              {currentComponents.filter((component) => component === 'city') ? componentObj.city : componentObj.edit}
              </CustomCollapse>
            </div>
          </Space>

          <div className={`${styles.box}`} style={{ height: "60px" }}>
            <div className={`${styles.content2}`}
            onClick={() => setPage(2)}
            >
              <div className={`${styles.content_1_left}`}>
                <p style={{ lineHeight: "36px" }}>Phân quyền người dùng</p>
                <picture style={{ lineHeight: "56px" }}>
                  <img src={`${"/icon_right.svg"}`} alt=""></img>
                </picture>
              </div>
            </div>
          </div>

           <Space
            direction="vertical"
            style={{ width: "100%", marginTop: "15px" }}
            onClick={() => handleClick('notification')}
          >
            <div className={`${styles.content}`}>
              <CustomCollapse
                label={
                  <>
                    <div className={`${styles.content_3_left}`}>
                      <p style={{ lineHeight: "36px" }}>THÔNG BÁO</p>
                      <picture
                        style={{ marginTop: "-3px", lineHeight: "36px" }}
                      >
                        <img src={`${"/icon_down.svg"}`} alt=""></img>
                      </picture>
                    </div>
                  </>
                }
              >
              {currentComponents.includes('notification')  && componentObj.notification}

              </CustomCollapse>
            </div>
          </Space>

          <Space
            direction="vertical"
            style={{ width: "100%", marginTop: "15px" }}
            onClick={() => handleClick('remind')}
          >
            <div className={`${styles.content}`}>
              <CustomCollapse
                label={
                  <>
                    <div className={`${styles.content_4_left}`}>
                      <p style={{ lineHeight: "36px" }}>NHẮC NHỞ</p>
                      <picture
                        style={{ marginTop: "-3px", lineHeight: "36px" }}
                      >
                        <img src={`${"/icon_down.svg"}`} alt=""></img>
                      </picture>
                    </div>
                  </>
                }
              >
                {currentComponents.includes('remind')  && componentObj.remind}
              </CustomCollapse>
            </div>
          </Space>

          <div className={`${styles.box}`} style={{ height: "60px" }}>
            <div className={`${styles.content2}`}>
              <div className={`${styles.content_1_left}`}>
                <p style={{ lineHeight: "36px" }}>NGÔN NGỮ</p>
                <div
                  className={`${styles.button_language}`}
                  onClick={() => setCurrent(4)}
                >
                  <button>Tiếng Việt(VI)</button>
                </div>
              </div>
            </div>
          </div> 

          <div className={`${styles.box}`} style={{ height: "60px" }}>
            <div className={`${styles.content2}`}>
              <div className={`${styles.content_1_left}`}>
                <p style={{ lineHeight: "36px" }}>GIAO DIỆN</p>
                <div className={`${styles.flex}`}>
                  <div className={`${styles.l_backgroung}`}></div>
                  <div className={`${styles.l_border_left}`}></div>
                  <div
                    className={`${styles.content_1_right}`}
                  >
                    <button style={{ padding: "9px 28px" }}>Mặc định</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </>
        )}

        {page === 2 && (
          <>
              <div className={`${styles.l_quyennguoidung}`} style={{cursor:'default'}}>
                <div style={{display: 'flex'}}
                onClick={() => setPage(1)}
                >
                    <picture>
                        <img src={`${'/icon_cancel.svg'}`} alt=""></img>
                    </picture>
                    <div>
                    Phân quyền người dùng
                    </div>
                </div>
            </div>
            <Decentralization></Decentralization>
          </>
        )}
      
        </div>
      </div>
      <BodyFrameFooter src="https://www.youtube.com/embed/tsMJjyUxJFs"></BodyFrameFooter>
    </>
  );
}
