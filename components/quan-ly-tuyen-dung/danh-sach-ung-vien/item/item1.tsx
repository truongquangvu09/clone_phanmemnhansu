import React, { useState, useEffect } from "react";
import styles from './item.module.css'
import { Rating } from 'react-simple-star-rating'
import { useDrag } from 'react-dnd';
import { ItemTypes } from "./ItemType";
import DeleteCandidate from "../candidateDeleteModal";
import { useRouter } from "next/router";

export default function ItemCandidate1({ data, listCandidate, setProcess_id, process_id, currentCol, setDragItem, setDropCol, setModalOpen }: any) {
    const [isOpenOption, setOpenOption] = useState(0)
    const [isDelete, setDelete] = useState(0)
    const [animateModal, setAnimateModal] = useState(true);

    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.INTERVIEW,
        item: { data, process_id, currentCol },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if (dropResult && item) {
                setDragItem(item?.data)
                setDropCol(dropResult)
                setModalOpen(true)
                setProcess_id(item.process_id)
            }
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    useEffect(() => {
        if (isDelete === 0) {
            setAnimateModal(true)
        }
    }, [isDelete])


    const handleToggleOption = (itemId: number) => {
        setOpenOption(prevState => prevState === itemId ? 0 : itemId);
    }

    const handleClosemodal = () => {
        setDelete(0)
        setAnimateModal(false)
    }

    const router = useRouter()
    const handleClickDetail = (item: number) => {
        if (typeof item === "number" && !isNaN(item)) {
            router.push(
                `/quan-ly-tuyen-dung/danh-sach-ung-vien/chi-tiet-ung-vien/u${item}`
            );
        }
    };

    return (
        <>
            <div className={`${styles.hs_body} `} ref={drag} style={{
                position: 'relative',
                left: 0,
                top: 0,
                opacity: isDragging ? 0 : 1,

            }}>
                <div className={`${styles.hs_body_card}`} style={{ position: 'relative', left: 0, top: 0 }} >
                    <div className={`${styles.row}`}>
                        <div className={`${styles.hs_body_card_no1}`}>
                            <img className={`${styles.hs_avt}`} src="https://phanmemnhansu.timviec365.vn/assets/images/t_images/logo_com.png" alt="" />
                        </div>
                        <div className={`${styles.hs_body_card_no2}`}>
                            <p>{data?.name}</p>
                            <p>SĐT: <span>{data?.phone}</span></p>
                            <p>{data?.title}</p>
                            <Rating size={27} disableFillHover initialValue={data?.starVote} className={`${styles.star_rating}`} />
                        </div>
                        <div className={`${styles.hs_body_card_no3}`}>
                            <a className={`${styles.hs_dot} ${styles.hs_dot1}`} style={{ cursor: 'pointer' }}>
                                <img onClick={() => handleToggleOption(data?.id)} src="https://phanmemnhansu.timviec365.vn/assets/images/t_images/hs-t-dot.svg" />
                                <div className={`${styles.choose_option} ${styles.choose_option1}`} style={{ display: isOpenOption === data?.id ? 'block' : 'none' }}>
                                    <ul style={{ marginBottom: 0, marginTop: 0 }}>
                                        <li onClick={() => handleClickDetail(data?.id)} >Xem chi tiết</li>
                                        <li onClick={() => setDelete(data?.id)}>Xóa hồ sơ</li>
                                        {isDelete !== 0 && <DeleteCandidate animation={animateModal} onCancel={handleClosemodal} idCandidate={isDelete} />}
                                    </ul>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={`${styles.hs_footer}`}>
                        <p style={{ textAlign: 'center' }}>Nhân viên thực hiện:
                            <span>{data?.hrName}</span>
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}
