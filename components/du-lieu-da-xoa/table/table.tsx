import React from 'react'
import styles from './table.module.css'
import { Space } from 'antd';
import CustomCollapse from '@/components/collapse/CustomCollapse';

 
export default function TableData({}) {
   
    
      return (
        <div className={`${styles.tab_content}`}>
        <div className={`${styles.l_content_setting}`}>
            
          <Space direction="vertical" style={{ width: "100%" }}>
            <div className={`${styles.content}`}>
              <CustomCollapse
                label={
                  <>
                    <div
                      className={`${styles.content_1_left}`}
                  
                    >
                      <p style={{ lineHeight: "36px" }}>THÔNG TIN CÔNG TY</p>
                      <picture
                        style={{ marginTop: "-3px", lineHeight: "36px" }}
                      >
                        <img src={`${"/icon_down.svg"}`} alt=""></img>
                      </picture>
                    </div>
                  </>
                }
              >  
              </CustomCollapse>
            </div>
          </Space>

        
        </div>
      </div>
      );
}