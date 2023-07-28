/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import styles from "./detailRecruitmentStage.module.css";
import { useRouter } from "next/router";
import AddRecruitmentStage from "@/components/quan-ly-tuyen-dung/quy-trinh-tuyen-dung/chi-tiet-quy-trinh/addRecruitmentStage/them-giai-doan";
import ListRecruitmentStage from "@/components/quan-ly-tuyen-dung/quy-trinh-tuyen-dung/chi-tiet-quy-trinh/listRecruitmentStage/listRecruitmentStage";
import { DataRecruitmentStage } from "@/pages/api/quan-ly-tuyen-dung/RecruitmentManagerService";
export interface listRecruitmentProcess {}

export default function listRecruitmentProcess({}) {
  const router = useRouter();
  const { idRecruitmentStage } = router.query;
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [recruitmentStage, setRecruitmentStage] = useState<any>();  
  const [newData, setNewData] = useState<any>();

  console.log(recruitmentStage)
  useEffect(() => {
    const fetchDataRecruitmentStage = async (idRecruitmentStage: any) => {
      try {
        const response = await DataRecruitmentStage(idRecruitmentStage);
        setRecruitmentStage(response?.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataRecruitmentStage(idRecruitmentStage);
  }, [newData]);

  const handleBack = () => {
    router.back();
  };

  const handleOpenModalAdd = () => {
    setOpenModalAdd(true);
    setAnimateModal(true);
  };

  const handleCloseModalAdd = () => {
    setAnimateModal(false);
    setTimeout(() => {
      setOpenModalAdd(false);
    }, 300);
  };

  return (
    <>
      <div className={`${styles.l_body}`}>
        <div className={`${styles.add_quytrinh}`}>
          <div className={`${styles.back_quytrinh}`}>
            <span onClick={handleBack}>
              <picture>
                <img src={`${"/left_arrow.png"}`} alt="Back"></img>
              </picture>
              Danh sách quy trình tuyển dụng
            </span>
          </div>
          <div className={`${styles.add_quytrinh1}`}>
            <button className={`${styles.adds}`} onClick={handleOpenModalAdd}>
              <picture>
                <img src={`${"/add.png"}`} alt=""></img>
              </picture>
              Thêm giai đoạn tuyển dụng
            </button>
          </div>
        </div>
        {openModalAdd && (
          <AddRecruitmentStage
            recruitmentId={idRecruitmentStage}
            animation={animateModal}
            onCloseModal={handleCloseModalAdd}
            setData= {setNewData}
          ></AddRecruitmentStage>
        )}

        <div className={`${styles.giaidoans}`}>
        <div className={`${styles.title_giaidoans}`}>
        <h4>
          ({`QTTD ${idRecruitmentStage}`}) {recruitmentStage?.data.recruitment}
        </h4>
      </div>
          {recruitmentStage?.data?.listStage?.map((item, index) => (
            <div key={index}>
              <ListRecruitmentStage
                item={item}
                recruitment={recruitmentStage?.data.recruitment}
                index={index}
                onDelete = {setNewData}
                onEdit = {setNewData}
              ></ListRecruitmentStage>
            </div>
          ))}
        </div>
        
      </div>
    </>
  );
}

export const getServerSideProps = async ({ params }) => {
  const { idRecruitmentStage } = params;

  try {
    const response = await DataRecruitmentStage(idRecruitmentStage)
    const dataDetail = response?.data; 
    return {
      props: {
        dataDetail, 
      },
    };
  } catch (error) {
    console.error('Error fetching data from API:', error);
    return { props: {} };
  }
};
