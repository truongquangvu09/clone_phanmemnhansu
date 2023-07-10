import React, { useEffect, useState } from "react";
import styles from "./Notification.module.css";

export default function NotificationSetting() {

    const [isFollowNotificationEnabled, setIsFollowNotificationEnabled] = useState(true);
    const [isContentNotificationEnabled, setIsContentNotificationEnabled] = useState(true);
  
    const handleFollowNotificationChange = () => {
      setIsFollowNotificationEnabled(!isFollowNotificationEnabled);
      console.log (isFollowNotificationEnabled, 'isFollowNotificationEnabled')
      // Thực hiện các hành động khi nút switch của thông báo theo dõi thay đổi
    };
  
    const handleContentNotificationChange = () => {
      setIsContentNotificationEnabled(!isContentNotificationEnabled);
      console.log(isContentNotificationEnabled, 'isContentNotificationEnabled')
      // Thực hiện các hành động khi nút switch của thông báo nội dung thay đổi
    };
  return (
    <>
      <div className={`${styles.l_thongtincongty_item}`} style={{marginTop:6}}>
        <div className={`${styles.l_top}`} style={{borderBottom: '1px dotted gray', paddingBottom: 16}}>
            <div className={`${styles.l_top_left}`}>
                <p>
                Nhận thông báo khi có thay đổi ở các nội dung tôi theo dõi
                </p>
            </div>

            <div className={`${styles.l_top_right}`}>
            <label className={`${styles.switch}`}>
                 <input type="checkbox"  checked={!isFollowNotificationEnabled} onChange={handleFollowNotificationChange}/>
                <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
            </div>
        </div>

        <div className={`${styles.l_top}`} style={{marginTop:20}}>
            <div className={`${styles.l_top_left}`}>
                <p>
                Nhận thông báo khi có thay đổi ở các nội dung tôi tạo ra
                </p>
            </div>

            <div className={`${styles.l_top_right}`}>
            <label className={`${styles.switch}`}>
                 <input type="checkbox" checked={!isContentNotificationEnabled} onChange={handleContentNotificationChange} />
                <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
            </div>
        </div>

      </div>
    </>
  );
}
