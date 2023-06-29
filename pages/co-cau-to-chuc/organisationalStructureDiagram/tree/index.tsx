import React, { useState, useEffect } from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import styled from 'styled-components';
import styles from './tree.module.css'
import EditRoomModal from './room/editRoomModal';
import DetailsRoomModal from './room/detailRoomModal/detailRoomModal';
const StyledNode = styled.div`
`;
const MemberViewBoxRoom = ({
    text_part,
    describe,
    manager,
    deputy,
    employeeLink,
    checkInLink,
    absenceLink,
    employeeNumber,
    registered,
    noAttendance,
    setOpenModalEdit,
    setOpenModalDetails
}: any) => (
    <div className={`${styles.member_view_box} ${styles.member_view_box_top_3}`}>
        <div className={`${styles.member_detail}`}>
            <div className={`${styles.member_details_header}`}>
                <span style={{ color: '#474747', fontWeight: 600 }}>{text_part}</span>
                <button className={`${styles.edit_dep}`} onClick={() => setOpenModalEdit()}>
                    <img src="https://phanmemnhansu.timviec365.vn/assets/images/icon-new/vn_icon-edit.svg" />
                </button>
            </div>
            <div className={`${styles.member_details_body}`}>
                <p>Mô tả: {describe} <button className={`${styles.see_more}`} onClick={() => { setOpenModalDetails }}>( Chi tiết )</button></p>
                <p>Trưởng phòng: {manager}</p>
                <p>Phó phòng: {deputy}</p>
                <a href={employeeLink} target="_blank" rel="noreferrer" className={`${styles.link_a_2}`}>Số nhân viên: {employeeNumber}</a>
                <a href={checkInLink} target="_blank" rel="noreferrer" className={`${styles.link_a_2}`}>Số nhân viên đã điểm danh: {registered}</a>
                <a href={absenceLink} target="_blank" rel="noreferrer" className={`${styles.link_a_2}`}>Số nhân viên chưa điểm danh: {noAttendance}</a>
            </div>
        </div>
    </div>

);
const MemberViewBoxNest = ({
    text_part,
    describe,
    leader,
    deputy_leader,
    employeeLink,
    checkInLink,
    absenceLink,
    employeeNumber,
    registered,
    noAttendance,
    setOpenModalEdit,
    setOpenModalDetails
}: any) => (
    <div className={`${styles.member_view_box} ${styles.member_view_box_top_3}`}>
        <div className={`${styles.member_detail}`}>
            <div className={`${styles.member_details_header}`}>
                <span style={{ color: '#474747', fontWeight: 600 }}>{text_part}</span>
                <button className={`${styles.edit_dep}`} onClick={() => setOpenModalEdit()}>
                    <img src="https://phanmemnhansu.timviec365.vn/assets/images/icon-new/vn_icon-edit.svg" />
                </button>
            </div>
            <div className={`${styles.member_details_body}`}>
                <p>Mô tả: {describe} <button className={`${styles.see_more}`} onClick={() => setOpenModalDetails}>( Chi tiết )</button></p>
                <p>Tổ trưởng: {leader}</p>
                <p>Phó tổ trưởng: {deputy_leader}</p>
                <a href={employeeLink} target="_blank" rel="noreferrer" className={`${styles.link_a_2}`}>Số nhân viên: {employeeNumber}</a>
                <a href={checkInLink} target="_blank" rel="noreferrer" className={`${styles.link_a_2}`}>Số nhân viên đã điểm danh: {registered}</a>
                <a href={absenceLink} target="_blank" rel="noreferrer" className={`${styles.link_a_2}`}>Số nhân viên chưa điểm danh: {noAttendance}</a>
            </div>
        </div>
    </div>

);

const MemberViewBoxGroup = ({
    text_part,
    describe,
    group_captain,
    deputy_group_captain,
    employeeLink,
    checkInLink,
    absenceLink,
    employeeNumber,
    registered,
    noAttendance,
    setOpenModalEdit,
    setOpenModalDetails
}: any) => (
    <div className={`${styles.member_view_box} ${styles.member_view_box_top_3}`}>
        <div className={`${styles.member_detail}`}>
            <div className={`${styles.member_details_header}`}>
                <span style={{ color: '#474747', fontWeight: 600 }}>{text_part}</span>
                <button className={`${styles.edit_dep}`} onClick={() => setOpenModalEdit()}>
                    <img src="https://phanmemnhansu.timviec365.vn/assets/images/icon-new/vn_icon-edit.svg" />
                </button>
            </div>
            <div className={`${styles.member_details_body}`}>
                <p>Mô tả: {describe} <button className={`${styles.see_more}`} onClick={() => setOpenModalDetails}>( Chi tiết )</button></p>
                <p>Trưởng nhóm: {group_captain}</p>
                <p>Phó nhóm: {deputy_group_captain}</p>
                <a href={employeeLink} target="_blank" rel="noreferrer" className={`${styles.link_a_2}`}>Số nhân viên: {employeeNumber}</a>
                <a href={checkInLink} target="_blank" rel="noreferrer" className={`${styles.link_a_2}`}>Số nhân viên đã điểm danh: {registered}</a>
                <a href={absenceLink} target="_blank" rel="noreferrer" className={`${styles.link_a_2}`}>Số nhân viên chưa điểm danh: {noAttendance}</a>
            </div>
        </div>
    </div>

);
const MemberViewBoxCompany = ({
    text_part,
    describe,
    CEO,
    deputy_CEO,
    employeeLink,
    checkInLink,
    absenceLink,
    employeeNumber,
    registered,
    noAttendance
}: any) => (
    <div className={`${styles.member_view_box} ${styles.member_view_box_top_2}`}>
        <div className={`${styles.member_detail}`}>
            <p>{text_part}</p>
            <span className={`${styles.text_ita}`}>({describe})</span>
            <p>Giám đốc: {CEO}</p>
            <p>Phó giám đốc: {deputy_CEO}</p>
            <a href={employeeLink} target="_blank" rel="noreferrer" className={`${styles.link_a_2}`}>Số nhân viên: {employeeNumber}</a>
            <a href={checkInLink} target="_blank" rel="noreferrer" className={`${styles.link_a_2}`}>Số nhân viên đã điểm danh: {registered}</a>
            <a href={absenceLink} target="_blank" rel="noreferrer" className={`${styles.link_a_2}`}>Số nhân viên chưa điểm danh: {noAttendance}</a>
        </div>
    </div>

);
const defaultValue = { label: 'Default Option', value: 'default' };
const StyledTreeExample = () => {

    const [openModalEdit, setOpenModalEdit] = useState(false)
    const [openModalDetails, setOpenModalDetails] = useState(false)
    const handleCloseModal = () => {
        setOpenModalEdit(false);
        setOpenModalDetails(false);
    }

    const options = {
        chonphongban: [
            { value: 'BAN GIÁM ĐỐC', label: 'BAN GIÁM ĐỐC' },
        ],
        truongphong: [
            { value: 'Lê Hồng Anh', label: 'Lê Hồng Anh (KỸ THUẬT - ID:284670)' },
        ],
        photruongphong: [
            { value: 'Lê Hồng Anh', label: 'Lê Hồng Anh (KỸ THUẬT - ID:284670)' },
        ]
    };
    const soluongnhanvien = 13;
    const mota = 'kĩ thuật';

    return (
        <>

            <Tree
                lineWidth={'2px'}
                lineColor={'#cccccc'}
                lineBorderRadius={'10px'}
                label={<StyledNode><div className={`${styles.member_view_box} ${styles.member_view_box_top}`}>
                    <div className={`${styles.member_detail}`}>
                        <p className={`${styles.text_center}`}>Công ty Cổ phần Thanh toán Hưng Hà 2</p>
                        <p>Giám đốc: Chưa cập nhật</p>
                        <p>Phó giám đốc: Vũ Diệu Linh</p>
                        <a href="/danh-sach-nhan-vien-cua-tong-cong-ty-c1664-t1.html" target="_blank" className={`${styles.link_a}`}>Tổng nhân viên: 32</a>
                        <a href="/danh-sach-nhan-vien-cham-cong-tong-cong-ty-c1664-ty1-tk1.html" target="_blank" className={`${styles.link_a}`}>Tổng nhân viên đã điểm danh: 0</a>
                        <a href="/danh-sach-nhan-vien-chua-cham-cong-tong-cong-ty-c1664-ty1-tk2.html" target="_blank" className={`${styles.link_a}`}>Tổng nhân viên chưa điểm danh: 32</a>
                    </div>
                </div></StyledNode>}
            >
                <TreeNode label={<StyledNode><MemberViewBoxRoom
                    text_part='KỸ THUẬT'
                    title="kỹ thuật"
                    manager="Uy Phùng Hiểu (Ken)"
                    deputy="Chưa cập nhật"
                    employeeLink="/danh-sach-nhan-vien-cua-tong-cong-ty-c1664-t1.html"
                    checkInLink="/danh-sach-nhan-vien-cham-cong-tong-cong-ty-c1664-ty1-tk1.html"
                    absenceLink="/danh-sach-nhan-vien-chua-cham-cong-tong-cong-ty-c1664-ty1-tk2.html"
                    employeeNumber='10'
                    registered='15'
                    noAttendance='12'
                    setOpenModalEdit={() => setOpenModalEdit(true)}
                /></StyledNode>}>
                    <TreeNode label={<StyledNode><MemberViewBoxNest text_part='Tổ anh Hiệp'
                        title="kỹ thuật"
                        leader="Uy Phùng Hiểu (Ken)"
                        deputy_leader="Chưa cập nhật"
                        employeeLink="/danh-sach-nhan-vien-cua-tong-cong-ty-c1664-t1.html"
                        checkInLink="/danh-sach-nhan-vien-cham-cong-tong-cong-ty-c1664-ty1-tk1.html"
                        absenceLink="/danh-sach-nhan-vien-chua-cham-cong-tong-cong-ty-c1664-ty1-tk2.html"
                        employeeNumber='10'
                        registered='15'
                        noAttendance='12'
                        setOpenModalEdit={() => setOpenModalEdit(true)} /></StyledNode>} />
                    <TreeNode label={<StyledNode><MemberViewBoxNest text_part='Tổ 1'
                        title="chưa cập nhật"
                        leader="Uy Phùng Hiểu (Ken)"
                        deputy_leader="Chưa cập nhật"
                        employeeLink="/danh-sach-nhan-vien-cua-tong-cong-ty-c1664-t1.html"
                        checkInLink="/danh-sach-nhan-vien-cham-cong-tong-cong-ty-c1664-ty1-tk1.html"
                        absenceLink="/danh-sach-nhan-vien-chua-cham-cong-tong-cong-ty-c1664-ty1-tk2.html"
                        employeeNumber='10'
                        registered='15'
                        noAttendance='12' setOpenModalEdit={() => setOpenModalEdit(true)} />
                    </StyledNode>}>
                        <TreeNode label={<StyledNode><MemberViewBoxGroup text_part='Nhóm A'
                            title="chưa cập nhật"
                            group_captain="Uy Phùng Hiểu (Ken)"
                            deputy_group_captain="Chưa cập nhật"
                            employeeLink="/danh-sach-nhan-vien-cua-tong-cong-ty-c1664-t1.html"
                            checkInLink="/danh-sach-nhan-vien-cham-cong-tong-cong-ty-c1664-ty1-tk1.html"
                            absenceLink="/danh-sach-nhan-vien-chua-cham-cong-tong-cong-ty-c1664-ty1-tk2.html"
                            employeeNumber='10'
                            registered='15'
                            noAttendance='12' setOpenModalEdit={() => setOpenModalEdit(true)} /></StyledNode>} />
                        <TreeNode label={<StyledNode><MemberViewBoxGroup text_part='Nhóm 13'
                            title="chưa cập nhật "
                            group_captain="Uy Phùng Hiểu (Ken)"
                            deputy_group_captain="Chưa cập nhật"
                            employeeLink="/danh-sach-nhan-vien-cua-tong-cong-ty-c1664-t1.html"
                            checkInLink="/danh-sach-nhan-vien-cham-cong-tong-cong-ty-c1664-ty1-tk1.html"
                            absenceLink="/danh-sach-nhan-vien-chua-cham-cong-tong-cong-ty-c1664-ty1-tk2.html"
                            employeeNumber='10'
                            registered='15'
                            noAttendance='12' setOpenModalEdit={() => setOpenModalEdit(true)} /></StyledNode>} />
                        <TreeNode label={<StyledNode><MemberViewBoxGroup text_part='Nhóm 13'
                            title="chưa cập nhật"
                            group_captain="Uy Phùng Hiểu (Ken)"
                            deputy_group_captain="Chưa cập nhật"
                            employeeLink="/danh-sach-nhan-vien-cua-tong-cong-ty-c1664-t1.html"
                            checkInLink="/danh-sach-nhan-vien-cham-cong-tong-cong-ty-c1664-ty1-tk1.html"
                            absenceLink="/danh-sach-nhan-vien-chua-cham-cong-tong-cong-ty-c1664-ty1-tk2.html"
                            employeeNumber='10'
                            registered='15'
                            noAttendance='12' setOpenModalEdit={() => setOpenModalEdit(true)} /></StyledNode>} />
                    </TreeNode>
                </TreeNode>
                <TreeNode label={<StyledNode><MemberViewBoxRoom
                    text_part='PHÒNG NHÂN SỰ'
                    title="kỹ thuật"
                    manager="Uy Phùng Hiểu (Ken)"
                    deputy="Chưa cập nhật"
                    employeeLink="/danh-sach-nhan-vien-cua-tong-cong-ty-c1664-t1.html"
                    checkInLink="/danh-sach-nhan-vien-cham-cong-tong-cong-ty-c1664-ty1-tk1.html"
                    absenceLink="/danh-sach-nhan-vien-chua-cham-cong-tong-cong-ty-c1664-ty1-tk2.html"
                    employeeNumber='10'
                    registered='15'
                    noAttendance='12'
                    setOpenModalEdit={() => setOpenModalEdit(true)}
                /></StyledNode>}>
                </TreeNode>
                <TreeNode label={<StyledNode><MemberViewBoxRoom
                    text_part='PHÒNG TÀI VỤ'
                    title="kỹ thuật"
                    manager="Uy Phùng Hiểu (Ken)"
                    deputy="Chưa cập nhật"
                    employeeLink="/danh-sach-nhan-vien-cua-tong-cong-ty-c1664-t1.html"
                    checkInLink="/danh-sach-nhan-vien-cham-cong-tong-cong-ty-c1664-ty1-tk1.html"
                    absenceLink="/danh-sach-nhan-vien-chua-cham-cong-tong-cong-ty-c1664-ty1-tk2.html"
                    employeeNumber='10'
                    registered='15'
                    noAttendance='12'
                    setOpenModalEdit={() => setOpenModalEdit(true)}
                /></StyledNode>}>
                </TreeNode>
                <TreeNode label={<StyledNode><MemberViewBoxRoom
                    text_part='ĐỀ ÁN'
                    title="kỹ thuật"
                    manager="Uy Phùng Hiểu (Ken)"
                    deputy="Chưa cập nhật"
                    employeeLink="/danh-sach-nhan-vien-cua-tong-cong-ty-c1664-t1.html"
                    checkInLink="/danh-sach-nhan-vien-cham-cong-tong-cong-ty-c1664-ty1-tk1.html"
                    absenceLink="/danh-sach-nhan-vien-chua-cham-cong-tong-cong-ty-c1664-ty1-tk2.html"
                    employeeNumber='10'
                    registered='15'
                    noAttendance='12'
                    setOpenModalEdit={() => setOpenModalEdit(true)}
                /></StyledNode>}>
                </TreeNode>
                <TreeNode label={<StyledNode><MemberViewBoxRoom
                    text_part='PHÒNG SEO'
                    title="kỹ thuật"
                    manager="Uy Phùng Hiểu (Ken)"
                    deputy="Chưa cập nhật"
                    employeeLink="/danh-sach-nhan-vien-cua-tong-cong-ty-c1664-t1.html"
                    checkInLink="/danh-sach-nhan-vien-cham-cong-tong-cong-ty-c1664-ty1-tk1.html"
                    absenceLink="/danh-sach-nhan-vien-chua-cham-cong-tong-cong-ty-c1664-ty1-tk2.html"
                    employeeNumber='10'
                    registered='15'
                    noAttendance='12'
                    setOpenModalEdit={() => setOpenModalEdit(true)}
                /></StyledNode>}>
                </TreeNode>
                <TreeNode label={<StyledNode><MemberViewBoxRoom
                    text_part='PHÒNG ĐÀO TẠO'
                    title="kỹ thuật"
                    manager="Uy Phùng Hiểu (Ken)"
                    deputy="Chưa cập nhật"
                    employeeLink="/danh-sach-nhan-vien-cua-tong-cong-ty-c1664-t1.html"
                    checkInLink="/danh-sach-nhan-vien-cham-cong-tong-cong-ty-c1664-ty1-tk1.html"
                    absenceLink="/danh-sach-nhan-vien-chua-cham-cong-tong-cong-ty-c1664-ty1-tk2.html"
                    employeeNumber='10'
                    registered='15'
                    noAttendance='12'
                    setOpenModalEdit={() => setOpenModalEdit(true)}
                /></StyledNode>}>
                </TreeNode>
                <TreeNode label={<StyledNode><MemberViewBoxRoom
                    text_part='PHÒNG SÁNG TẠO'
                    title="kỹ thuật"
                    manager="Uy Phùng Hiểu (Ken)"
                    deputy="Chưa cập nhật"
                    employeeLink="/danh-sach-nhan-vien-cua-tong-cong-ty-c1664-t1.html"
                    checkInLink="/danh-sach-nhan-vien-cham-cong-tong-cong-ty-c1664-ty1-tk1.html"
                    absenceLink="/danh-sach-nhan-vien-chua-cham-cong-tong-cong-ty-c1664-ty1-tk2.html"
                    employeeNumber='10'
                    registered='15'
                    noAttendance='12'
                    setOpenModalEdit={() => setOpenModalEdit(true)}
                /></StyledNode>}>
                </TreeNode>
                <TreeNode label={<StyledNode><MemberViewBoxRoom
                    text_part='BIÊN TẬP'
                    title="kỹ thuật"
                    manager="Uy Phùng Hiểu (Ken)"
                    deputy="Chưa cập nhật"
                    employeeLink="/danh-sach-nhan-vien-cua-tong-cong-ty-c1664-t1.html"
                    checkInLink="/danh-sach-nhan-vien-cham-cong-tong-cong-ty-c1664-ty1-tk1.html"
                    absenceLink="/danh-sach-nhan-vien-chua-cham-cong-tong-cong-ty-c1664-ty1-tk2.html"
                    employeeNumber='10'
                    registered='15'
                    noAttendance='12'
                    setOpenModalEdit={() => setOpenModalEdit(true)}
                /></StyledNode>}>
                </TreeNode>
                <TreeNode label={<StyledNode><MemberViewBoxRoom
                    text_part='KINH DOANH'
                    title="kỹ thuật"
                    manager="Uy Phùng Hiểu (Ken)"
                    deputy="Chưa cập nhật"
                    employeeLink="/danh-sach-nhan-vien-cua-tong-cong-ty-c1664-t1.html"
                    checkInLink="/danh-sach-nhan-vien-cham-cong-tong-cong-ty-c1664-ty1-tk1.html"
                    absenceLink="/danh-sach-nhan-vien-chua-cham-cong-tong-cong-ty-c1664-ty1-tk2.html"
                    employeeNumber='10'
                    registered='15'
                    noAttendance='12'
                    setOpenModalEdit={() => setOpenModalEdit(true)}
                /></StyledNode>}>
                </TreeNode>
                <TreeNode label={<StyledNode><MemberViewBoxCompany
                    text_part='PT shop'
                    describe="Công ty con"
                    CEO="Uy Phùng Hiểu (Ken)"
                    deputy_CEO="Chưa cập nhật"
                    employeeLink="/danh-sach-nhan-vien-cua-tong-cong-ty-c1664-t1.html"
                    checkInLink="/danh-sach-nhan-vien-cham-cong-tong-cong-ty-c1664-ty1-tk1.html"
                    absenceLink="/danh-sach-nhan-vien-chua-cham-cong-tong-cong-ty-c1664-ty1-tk2.html"
                    employeeNumber='10'
                    registered='15'
                    noAttendance='12'
                    setOpenModalEdit={() => setOpenModalEdit(true)}
                /></StyledNode>}>
                    <TreeNode label={<StyledNode><MemberViewBoxRoom
                        text_part='KỸ THUẬT 2'
                        title="kỹ thuật"
                        manager="Uy Phùng Hiểu (Ken)"
                        deputy="Chưa cập nhật"
                        employeeLink="/danh-sach-nhan-vien-cua-tong-cong-ty-c1664-t1.html"
                        checkInLink="/danh-sach-nhan-vien-cham-cong-tong-cong-ty-c1664-ty1-tk1.html"
                        absenceLink="/danh-sach-nhan-vien-chua-cham-cong-tong-cong-ty-c1664-ty1-tk2.html"
                        employeeNumber='10'
                        registered='15'
                        noAttendance='12'
                        setOpenModalEdit={() => setOpenModalEdit(true)}
                    /></StyledNode>}>
                    </TreeNode>
                    <TreeNode label={<StyledNode><MemberViewBoxRoom
                        text_part='KỸ THUẬT 2'
                        title="kỹ thuật"
                        manager="Uy Phùng Hiểu (Ken)"
                        deputy="Chưa cập nhật"
                        employeeLink="/danh-sach-nhan-vien-cua-tong-cong-ty-c1664-t1.html"
                        checkInLink="/danh-sach-nhan-vien-cham-cong-tong-cong-ty-c1664-ty1-tk1.html"
                        absenceLink="/danh-sach-nhan-vien-chua-cham-cong-tong-cong-ty-c1664-ty1-tk2.html"
                        employeeNumber='10'
                        registered='15'
                        noAttendance='12'
                        setOpenModalEdit={() => setOpenModalEdit(true)}
                    /></StyledNode>}>
                    </TreeNode>
                </TreeNode>
                <TreeNode label={<StyledNode><MemberViewBoxCompany
                    text_part='PT shop'
                    describe="Công ty con"
                    CEO="Uy Phùng Hiểu (Ken)"
                    deputy_CEO="Chưa cập nhật"
                    employeeLink="/danh-sach-nhan-vien-cua-tong-cong-ty-c1664-t1.html"
                    checkInLink="/danh-sach-nhan-vien-cham-cong-tong-cong-ty-c1664-ty1-tk1.html"
                    absenceLink="/danh-sach-nhan-vien-chua-cham-cong-tong-cong-ty-c1664-ty1-tk2.html"
                    employeeNumber='10'
                    registered='15'
                    noAttendance='12'
                    setOpenModalEdit={() => setOpenModalEdit(true)}
                /></StyledNode>}>
                </TreeNode>
                <TreeNode label={<StyledNode><MemberViewBoxCompany
                    text_part='PT shop'
                    describe="Công ty con"
                    CEO="Uy Phùng Hiểu (Ken)"
                    deputy_CEO="Chưa cập nhật"
                    employeeLink="/danh-sach-nhan-vien-cua-tong-cong-ty-c1664-t1.html"
                    checkInLink="/danh-sach-nhan-vien-cham-cong-tong-cong-ty-c1664-ty1-tk1.html"
                    absenceLink="/danh-sach-nhan-vien-chua-cham-cong-tong-cong-ty-c1664-ty1-tk2.html"
                    employeeNumber='10'
                    registered='15'
                    noAttendance='12'
                    setOpenModalEdit={() => setOpenModalEdit(true)}
                /></StyledNode>}>
                </TreeNode>
            </Tree>
            {openModalEdit && <EditRoomModal defaultValue={defaultValue}
                options={options}
                soluongnhanvien={soluongnhanvien}
                mota={mota} onCancel={handleCloseModal}></EditRoomModal>}
            {/* {openModalDetails && <openModalDetails mota={mota} />}s */}
        </>
    )
}

export default StyledTreeExample