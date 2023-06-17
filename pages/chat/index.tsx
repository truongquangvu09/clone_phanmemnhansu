import React from 'react';
import styles from  './chat.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export interface PostPageAProps {

}

export default function Index (props : PostPageAProps){
    return (
        <>
        <div>
            <p className={styles.h5} style={{marginLeft: "4%"}}>Cuộc trò chuyện gần đây</p>
            <p className={styles.classify} style={{marginLeft: "70%", marginTop: "22px"}}>Phân loại</p>
            <div>
                <div>
                    <img src={'pa.png'} className={styles.avatar}></img>
                </div>
                <div className={styles.chatBoxClick}>
                    <p className={styles.friendName}>Mipanzuzu</p>
                    <p>Xin chào đây là tin union</p>
                </div>
            </div>
            <div className={styles.chatRow}>
                <div>
                    <img src={'qt.png'} className={styles.avatar}></img>
                </div>
                <div className={styles.chatBoxClick}>
                    <p className={styles.friendName}>Mipanzuzu</p>
                    <p>Xin chào đây là tin union</p>
                </div>
            </div>
            <div className={styles.chatRow}>
                <div>
                    <img src={'qt.png'} className={styles.avatar}></img>
                </div>
                <div className={styles.chatBoxClick}>
                    <p className={styles.friendName}>Mipanzuzu</p>
                    <p>Xin chào đây là tin union</p>
                </div>
            </div>
            <div className={styles.chatRow}>
                <div>
                    <img src={'qt.png'} className={styles.avatar}></img>
                </div>
                <div className={styles.chatBoxClick}>
                    <p className={styles.friendName}>Mipanzuzu</p>
                    <p>Xin chào đây là tin union</p>
                </div>
            </div>
            <div className={styles.chatRow}>
                <div>
                    <img src={'qt.png'} className={styles.avatar}></img>
                </div>
                <div className={styles.chatBoxClick}>
                    <p className={styles.friendName}>Mipanzuzu</p>
                    <p className={styles.shortChat}>Xin chào đây là tin union</p>
                </div>
            </div>
        </div>
        </>
    )
}