import React from 'react'
import styles from './leaderBiography.module.css'
import BodyFrameFooter from '@/components/bodyFrame/bodyFrame_footer/bodyFrame_footer'

export default function LeaderBiography() {

    const Employee = [
        {
            img: 'https://chamcong.24hpay.vn/upload/employee/ep284670/app_Artboard 3900.png',
            name: 'nguyen van a',
            chucvu: 'PGD',
            phongban: 'Biên tập',
            to: 'chưa cập nhật',
            nhom: 'chưa cập nhật'
        },
        {
            img: 'https://chamcong.24hpay.vn/upload/employee/ep284670/app_Artboard 3900.png',
            name: 'nguyen van a',
            chucvu: 'PGD',
            phongban: 'Biên tập',
            to: 'chưa cập nhật',
            nhom: 'chưa cập nhật'
        },
        {
            img: 'https://chamcong.24hpay.vn/upload/employee/ep284670/app_Artboard 3900.png',
            name: 'nguyen van a',
            chucvu: 'PGD',
            phongban: 'Biên tập',
            to: 'chưa cập nhật',
            nhom: 'chưa cập nhật'
        },
        {
            img: 'https://chamcong.24hpay.vn/upload/employee/ep284670/app_Artboard 3900.png',
            name: 'nguyen van a',
            chucvu: 'PGD',
            phongban: 'Biên tập',
            to: 'chưa cập nhật',
            nhom: 'chưa cập nhật'
        }
    ]
    return (
        <>
            <div className={`${styles.wrapper}`}>
                <div className={`${styles.content}`}>
                    <div className={`${styles.content_header}`}>
                        <div className={`${styles.header_search}`}>
                            <div className={`${styles.row_search_1}`}>
                                <div className={`${styles.row_search_2}`}>
                                    <input type="text" id="search_list" className={`${styles.ui_autocomplete_input}`} placeholder="Tìm kiếm theo họ tên lãnh đạo" />
                                    <a href="" className={`${styles.search_3}`}>
                                        <img style={{ verticalAlign: 'middle' }} src="https://phanmemnhansu.timviec365.vn/assets/images/search-gray.svg" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.content_body}`}>
                        <div className={`${styles.member_list} ${styles.member_list_salary}`}>
                            <div className={`${styles.table_content}`}>
                                <table className={`${styles.table} ${styles.table_list}`} >
                                    <thead>
                                        <tr>
                                            <th>Ảnh</th>
                                            <th>Họ và tên</th>
                                            <th>Chức vụ</th>
                                            <th>Phòng ban</th>
                                            <th>Tổ</th>
                                            <th>Nhóm</th>
                                        </tr>
                                    </thead>
                                    <tbody className={`${styles.filter_body}`}>
                                        {Employee?.map((item, index) => (
                                            <tr key={index}>
                                                <td><img className={`${styles.img_table}`} src={item.img} alt="" /></td>
                                                <td>{item.name}</td>
                                                <td>{item.chucvu}</td>
                                                <td>{item.phongban}</td>
                                                <td>{item.to}</td>
                                                <td>{item.nhom}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.content_footer}`}>
                    <BodyFrameFooter src="https://www.youtube.com/embed/fp99RxHd_zM" />
                </div>
            </div >
        </>
    )
}