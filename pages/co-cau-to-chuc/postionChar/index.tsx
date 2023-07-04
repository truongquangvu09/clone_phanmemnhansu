import React, { useState, useEffect } from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import styled from 'styled-components';
import styles from '../organisationalStructureDiagram/tree/tree.module.css'
import EditPositionCharModal from './editPositonCharModal';
import DetailsPositionCharModal from './detailsPositionCharModal';
import BodyFrameFooter from '@/components/bodyFrame/bodyFrame_footer/bodyFrame_footer';


const StyledNode = styled.div`
`;
const MemberViewBox1 = ({
    text_part,
    position,
    name,
    name1,
    name2,
    name3,
    employee_number,
    mission,
    setOpenModalEdit,
    setOpenModalDetails
}: any) => (
    <div className={`${styles.member_view_box} ${styles.member_view_box_top_3}`} style={{ width: 330 }}>
        <div className={`${styles.member_detail}`}>
            <div className={`${styles.member_details_header}`}>
                <span style={{ color: '#474747', fontWeight: 600 }}>{text_part}</span>
                <button className={`${styles.hide_div_parent}`} style={{ fontWeight: 500, background: 'unset', fontFamily: 'Roboto', fontSize: 16 }} data-id="1">(Ẩn)</button>
                <button className={`${styles.edit_dep}`} onClick={() => setOpenModalEdit()}>
                    <img src="https://phanmemnhansu.timviec365.vn/assets/images/icon-new/vn_icon-edit.svg" />
                </button>
            </div>
            <div className={`${styles.member_details_body}`}>
                <p>{position ? position : 'Họ và tên'}: {employee_number ? employee_number : name}</p>
                {name1 && <p>Họ và tên: {name1}</p>}
                {name2 && <p>Họ và tên: {name2}</p>}
                {name3 && <p>Họ và tên: {name3}</p>}
                <p>Nhiệm vụ: {mission} <button className={`${styles.see_more}`} onClick={() => setOpenModalDetails()}>( Xem thêm )</button> </p>
            </div>
        </div>
    </div>

);

const defaultValue = { label: 'Default Option', value: 'default' };
const PostionCharTree = () => {

    const [openModalEdit, setOpenModalEdit] = useState(false)
    const [openModalDetails, setOpenModalDetails] = useState(false)

    const handleModalClose = () => {
        setOpenModalEdit(false);
        setOpenModalDetails(false)
    };

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
    const missions = 'không gì cả'

    return (
        <>
            {typeof document !== 'undefined' && (
                <div>
                    <div className={`${styles.member_list}`}>
                        <div className={`${styles.recruitment2}`}>
                            <div className={`${styles.recruitment2_3}`}>
                            </div>
                        </div>
                        <div className={`${styles.genealogy_body} ${styles.genealogy_scroll}`}>
                            <div className={`${styles.genealogy_tree}`}>
                                <Tree
                                    lineWidth={'2px'}
                                    lineColor={'#cccccc'}
                                    lineBorderRadius={'10px'}
                                    label={<StyledNode><div className={`${styles.member_view_box} ${styles.member_view_box_top}  ${styles.member_view_box_2_top} `} style={{ width: 300, height: 100 }}>
                                        <div className={`${styles.member_detail}`}>
                                            <div className={`${styles.member_view_box_2_top_header}`}>
                                                <p className={`${styles.text_center}`}>SƠ ĐỒ CHỨC VỤ</p>
                                            </div>
                                        </div>
                                    </div></StyledNode>}
                                >
                                    <TreeNode label={<StyledNode><MemberViewBox1
                                        text_part='Chủ tích hội đồng quản trị'
                                        name='Chưa cập nhật'
                                        mission='Chưa cập nhật'
                                        setOpenModalEdit={() => setOpenModalEdit(true)}
                                        setOpenModalDetails={() => setOpenModalDetails(true)}
                                    /></StyledNode>}>
                                        <TreeNode label={<StyledNode><MemberViewBox1
                                            text_part='Phó chủ tích hội đồng quản trị'
                                            name='Chưa cập nhật'
                                            mission='Chưa cập nhật'
                                            setOpenModalEdit={() => setOpenModalEdit(true)}
                                            setOpenModalDetails={() => setOpenModalDetails(true)}
                                        /></StyledNode>}>
                                            <TreeNode label={<StyledNode><MemberViewBox1
                                                text_part='Tv hội đồng quản trị'
                                                position='Trưởng phòng'
                                                name='Chưa cập nhật'
                                                mission='Chưa cập nhật'
                                                setOpenModalEdit={() => setOpenModalEdit(true)}
                                                setOpenModalDetails={() => setOpenModalDetails(true)}
                                            /></StyledNode>}>
                                                <TreeNode label={<StyledNode><MemberViewBox1
                                                    text_part='Tổng giám đốc'
                                                    name='Chưa cập nhật'
                                                    mission='Chưa cập nhật'
                                                    setOpenModalEdit={() => setOpenModalEdit(true)}
                                                    setOpenModalDetails={() => setOpenModalDetails(true)}
                                                /></StyledNode>}>
                                                    <TreeNode label={<StyledNode><MemberViewBox1
                                                        text_part='Phó tổng giám đốc'
                                                        name='Chưa cập nhật'
                                                        mission='Chưa cập nhật'
                                                        setOpenModalEdit={() => setOpenModalEdit(true)}
                                                        setOpenModalDetails={() => setOpenModalDetails(true)}
                                                    /></StyledNode>}>
                                                        <TreeNode label={<StyledNode><MemberViewBox1
                                                            text_part='Giám đốc'
                                                            name='Chưa cập nhật'
                                                            mission='Chưa cập nhật'
                                                            setOpenModalEdit={() => setOpenModalEdit(true)}
                                                            setOpenModalDetails={() => setOpenModalDetails(true)}
                                                        /></StyledNode>}>
                                                            <TreeNode label={<StyledNode><MemberViewBox1
                                                                text_part='Phó giám đốc'
                                                                name='Chưa cập nhật'
                                                                mission='Chưa cập nhật'
                                                                setOpenModalEdit={() => setOpenModalEdit(true)}
                                                                setOpenModalDetails={() => setOpenModalDetails(true)}
                                                            /></StyledNode>}>
                                                                <TreeNode label={<StyledNode><MemberViewBox1
                                                                    text_part='Trưởng phòng'
                                                                    name='I AM HULK'
                                                                    name1='Trần Văn Hưng'
                                                                    name2='Uy Phùng Hiểu (Ken)'
                                                                    name3='Vũ Hà My'
                                                                    mission='Chưa cập nhật'
                                                                    setOpenModalEdit={() => setOpenModalEdit(true)}
                                                                    setOpenModalDetails={() => setOpenModalDetails(true)}
                                                                /></StyledNode>}>
                                                                    <TreeNode label={<StyledNode><MemberViewBox1
                                                                        text_part='Phó trưởng phòng'
                                                                        name='Chưa cập nhật'
                                                                        mission='Chưa cập nhật'
                                                                        setOpenModalEdit={() => setOpenModalEdit(true)}
                                                                        setOpenModalDetails={() => setOpenModalDetails(true)}
                                                                    /></StyledNode>}>
                                                                        <TreeNode label={<StyledNode><MemberViewBox1
                                                                            text_part='Tổ trưởng'
                                                                            name='Lê Nhật Minh'
                                                                            mission='Chưa cập nhật'
                                                                            setOpenModalEdit={() => setOpenModalEdit(true)}
                                                                            setOpenModalDetails={() => setOpenModalDetails(true)}
                                                                        /></StyledNode>}>
                                                                            <TreeNode label={<StyledNode><MemberViewBox1
                                                                                text_part='Phó tổ trưởng'
                                                                                name='Bùi Văn Bến'
                                                                                mission='Chưa cập nhật'
                                                                                setOpenModalEdit={() => setOpenModalEdit(true)}
                                                                                setOpenModalDetails={() => setOpenModalDetails(true)}
                                                                            /></StyledNode>}>
                                                                                <TreeNode label={<StyledNode><MemberViewBox1
                                                                                    text_part='Trưởng nhóm'
                                                                                    name='Lê Hồng Anh'
                                                                                    mission='Chưa cập nhật'
                                                                                    setOpenModalEdit={() => setOpenModalEdit(true)}
                                                                                    setOpenModalDetails={() => setOpenModalDetails(true)}
                                                                                /></StyledNode>}>
                                                                                    <TreeNode label={<StyledNode><MemberViewBox1
                                                                                        text_part='Nhân viên chính thức'
                                                                                        position='Tổng số nhân viên'
                                                                                        employee_number='10'
                                                                                        mission='Chưa cập nhật'
                                                                                        setOpenModalEdit={() => setOpenModalEdit(true)}
                                                                                        setOpenModalDetails={() => setOpenModalDetails(true)}
                                                                                    /></StyledNode>}>
                                                                                    </TreeNode>
                                                                                    <TreeNode label={<StyledNode><MemberViewBox1
                                                                                        text_part='Nhân viên thử việc'
                                                                                        position='Tổng số nhân viên'
                                                                                        employee_number='10'
                                                                                        mission='Chưa cập nhật'
                                                                                        setOpenModalEdit={() => setOpenModalEdit(true)}
                                                                                        setOpenModalDetails={() => setOpenModalDetails(true)}
                                                                                    /></StyledNode>}>
                                                                                    </TreeNode>
                                                                                    <TreeNode label={<StyledNode><MemberViewBox1
                                                                                        text_part='Nhân viên Part time'
                                                                                        position='Tổng số nhân viên'
                                                                                        employee_number='10'
                                                                                        mission='Chưa cập nhật'
                                                                                        setOpenModalEdit={() => setOpenModalEdit(true)}
                                                                                        setOpenModalDetails={() => setOpenModalDetails(true)}
                                                                                    /></StyledNode>}>
                                                                                    </TreeNode>
                                                                                    <TreeNode label={<StyledNode><MemberViewBox1
                                                                                        text_part='Nhân viên thực tập'
                                                                                        position='Tổng số nhân viên'
                                                                                        employee_number='10'
                                                                                        mission='Chưa cập nhật'
                                                                                        setOpenModalEdit={() => setOpenModalEdit(true)}
                                                                                        setOpenModalDetails={() => setOpenModalDetails(true)}
                                                                                    /></StyledNode>}>
                                                                                    </TreeNode>
                                                                                </TreeNode>
                                                                            </TreeNode>
                                                                        </TreeNode>
                                                                    </TreeNode>
                                                                </TreeNode>
                                                            </TreeNode>
                                                        </TreeNode>
                                                    </TreeNode>
                                                </TreeNode>
                                            </TreeNode>
                                        </TreeNode>
                                    </TreeNode>
                                </Tree>
                            </div>
                        </div>
                    </div>
                    {openModalEdit && <EditPositionCharModal
                        mission={missions} onCancel={handleModalClose} ></EditPositionCharModal>}
                    {openModalDetails && <DetailsPositionCharModal
                        mission={missions} onCancel={handleModalClose} ></DetailsPositionCharModal>}
                    <BodyFrameFooter src="https://www.youtube.com/embed/_XzFBHXvNb8" />
                </div>
            )}

        </>
    )
}
export default PostionCharTree