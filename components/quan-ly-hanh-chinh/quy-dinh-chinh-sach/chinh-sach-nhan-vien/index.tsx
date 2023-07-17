import React, { useState, useEffect } from 'react';
import styles from './chinh-sach-nhan-vien.module.css'
import BodyFrameFooter from '@/components/bodyFrame/bodyFrame_footer/bodyFrame_footer';
import AddEmployeePolicyModal from './addEmployeePolicyModal';
import AddEmployeePolicyModal2 from './addEmployeePolicyModal/addEmployeePolicyModal2';
import MyPagination from '@/components/pagination/Pagination';
import { format } from 'date-fns';
import { PolicyList } from '@/pages/api/quy_dinh_chinh_sach';
import { PolicyByGroupList } from '@/pages/api/quy_dinh_chinh_sach';

export default function EmployeePolicy() {
    const [click, setClick] = useState(false)
    const [openModal, setOpenModal] = useState(0)
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState<any>(null)
    const [dataChild, setDataChild] = useState<any>(!null)
    const [dataChildList, setDataChildList] = useState<any>([]);
    const [selectedItems, setSelectedItems] = useState<number[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await PolicyList(currentPage, 5)
                setData(response.data)
            } catch (error) {
                throw error
            }
        }
        fetchData()
    }, [currentPage])
    console.log(data?.data);


    const setIdParent = async (itemId: number) => {
        const dataChildIndex = dataChildList.findIndex((item: any) => item.id === itemId);
        if (dataChildIndex !== -1) {
            setDataChild(dataChildList[dataChildIndex].data);
        } else {
            try {
                const response = await PolicyByGroupList(itemId);
                const dataResponse = response?.data?.data
                console.log({ dataResponse });

                const updatedDataChildList = [...dataChildList, { id: itemId, data: dataResponse }];
                setDataChildList(updatedDataChildList);
                setDataChild(response.data);
            } catch (error) {
                console.log(error);
            }
        }
    };


    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    const handleClick = () => {
        setClick(prevState => !prevState)
    }
    const handleCloseModal = () => {
        setOpenModal(0)
    }

    const handleSeemore = async (itemId: number) => {
        setSelectedItems((prevItems) => {
            if (prevItems.includes(itemId)) {
                return prevItems.filter((id) => id !== itemId);
            } else {
                return [...prevItems, itemId];
            }
        });
        setIdParent(itemId);
    };


    return (
        <>
            <>
                <div className={`${styles.wrapper}`}>
                    <div className={`${styles.tab_pane} ${styles.fade} `}>
                        <div className={`${styles.recruitment2}`}>
                            <div className={`${styles.recruitment2_3}`}>
                                <button className={`${styles.adds}`} onClick={handleClick}>
                                    <picture>
                                        <img style={{ verticalAlign: 'middle' }} src={`	/add.png`} alt="" />
                                        Thêm mới
                                    </picture>
                                </button>
                                {click === true && (<div className={`${styles.settings} ${styles.lefftset}`} >
                                    <li onClick={() => setOpenModal(1)}>Thêm nhóm chính sách</li>
                                    <hr style={{ marginTop: 0, marginBottom: 0 }} />
                                    <li onClick={() => setOpenModal(2)}>Thêm chính sách</li>
                                </div>)}
                                {openModal === 1 && <AddEmployeePolicyModal onCancel={handleCloseModal}></AddEmployeePolicyModal>}
                                {openModal === 2 && <AddEmployeePolicyModal2 onCancel={handleCloseModal}></AddEmployeePolicyModal2>}
                            </div>
                            <div className={`${styles.recruitment2_2}`}>
                                <form action="" className={`${styles.t_form_search}`}>
                                    <div className={`${styles.t_div_search}`}>
                                        <input style={{ verticalAlign: 'top' }} type="text" className={`${styles.keyword_qd}`} placeholder='Tìm kiếm' />
                                        <a href="">
                                            <picture>
                                                <img src={`/t-icon-search.png`} alt="" />
                                            </picture>
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className={`${styles.member_list} ${styles.regulation_item}`}>
                            {data != null ? (
                                data?.data?.map((item: any, index: any) => (
                                    <div className={`${styles.quydinh_item} `} key={index}>
                                        <div className={`${styles.quydinh_item1}`}>
                                            <div className={`${styles.quydinh_item2}`} onClick={() => handleSeemore(item?.id)}>
                                                <a>NQĐ - {item.name}</a>
                                                <img className={`${styles.icondown}`} src="/down.png" />
                                            </div>
                                            <a style={{ color: '#337ab7' }}  >Chi tiết/</a>
                                            <a style={{ color: '#337ab7' }} >Sửa</a>
                                            <span>/</span>
                                            <a style={{ color: '#337ab7' }} >Xóa</a>
                                        </div>
                                        <div className={`${styles.table_none}`} style={{ display: selectedItems.includes(item?.id) ? 'block' : 'none' }}>
                                            <table className={`${styles.tablelist}  ${styles.tablelist1}`}>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">STT</th>
                                                        <th scope="col">Quy định</th>
                                                        <th scope="col">Ngày tạo</th>
                                                        <th scope="col">Người tạo</th>
                                                        <th scope="col">Đối tượng áp dụng</th>
                                                        <th scope="col"></th>
                                                    </tr>
                                                </thead>
                                                <tbody className={`${styles.fillter}`}>
                                                    {dataChildList?.map((dataChild: any) =>
                                                        dataChild?.id === item.id ? (
                                                            dataChild?.data?.map((childItem: any, childIndex: any) => (
                                                                <tr key={childIndex}>
                                                                    <td>{childIndex + 1}</td>
                                                                    <td>
                                                                        <a href="" style={{ color: '#337ab7' }}>
                                                                            {childItem.name} (Xem chi tiết)
                                                                        </a>
                                                                    </td>
                                                                    <td>{format(new Date(childItem.createdAt), 'dd/MM/yyyy')}</td>
                                                                    <td>{childItem.createdBy}</td>
                                                                    <td>{childItem.applyFor}</td>
                                                                    <td>
                                                                        <a>
                                                                            <img src="/trash.png" />
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        ) : null
                                                    )}

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )
                                )
                            )
                                : (
                                    <p className={`${styles.text_content}`}>Dữ liệu trống</p>
                                )}
                        </div>
                        <div className={`${styles.pagination}`} style={{ display: 'block' }}>
                            <MyPagination
                                current={currentPage}
                                total={data?.tongSoBanGhi}
                                pageSize={10}
                                onChange={handlePageChange}
                            />
                        </div>
                        <BodyFrameFooter src='https://www.youtube.com/embed/sJfqas5wxEk'></BodyFrameFooter>
                    </div>
                </div>
            </>
        </>
    )
}