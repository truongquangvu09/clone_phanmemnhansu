import React, { useState, useEffect } from "react";
import styles from "./DetailTrainingProcess.module.css";
import { useRouter } from "next/router";
import ListDetailTrainingProcess from "@/components/dao-tao-phat-trien/quy-trinh-dao-tao/chi-tiet-quy-trinh/listDetailTrainingProcess/ListDetailTrainingProcess";
import AddDetailTrainingProcess from "@/components/dao-tao-phat-trien/quy-trinh-dao-tao/chi-tiet-quy-trinh/addDetailTrainingProcess/AddDetailTrainingProcess";
import BodyFrameFooter from "@/components/bodyFrame/bodyFrame_footer/bodyFrame_footer";
import { DataDetailProcess } from "@/pages/api/dao-tao-phat-trien/TrainingProcess";

export default function DetailTrainingProcess({ dataDetail }: any) {

  const [active, setActive] = useState(1);
  const [openModal, setOpenModal] = useState(0);
  const [animateModal, setAnimateModal] = useState(false);
  const [newData, setNewData] = useState<any>();
  const router = useRouter();

  const trainingProcessName = dataDetail?.processTrain.name;
  const trainingProcessId = dataDetail?.processTrain.id;
  const [trainingProcess, setTrainingProcess] = useState<any>();

  useEffect(() => {
      const filteredStages = dataDetail?.listStage?.filter((stage) => stage.isDelete === 0);
      setTrainingProcess(filteredStages);
  },[dataDetail])
  
  const handleOpenModal = (type: any) => {
    setOpenModal(type);
    setAnimateModal(true);
  };

  const handleCloseModal = () => {
    setAnimateModal(false);
    setTimeout(() => {
      setOpenModal(0);
    }, 300);
  };

  const handleUpdateData = (newData) => {
    setNewData(newData)
  }
  const listTab = [
    {
      key: 1,
      header: "QUY TRÌNH ĐÀO TẠO",
    },
  ];

  useEffect(() => {
    const fetchDataDetailProcess = async () => {
      try {
        const response = await DataDetailProcess(trainingProcessId);
        setTrainingProcess(response?.data.data.listStage?.filter((stage) => stage.isDelete === 0));
      } catch (error) {

      }
    };
    fetchDataDetailProcess();
  }, [newData]);
  return (
    <>
      <div className={`${styles.ct_quytrinh}`}>
        <div className={`${styles.l_body}`}>
          <ul className={`${styles.nav} ${styles.nav_tabs}`}>
            {listTab.map((item) => (
              <div key={item.key}>
                <li className={`${styles.li_tabs}`}>
                  <span
                    className={`${
                      active === item?.key ? styles.active : styles.hover
                    } `}
                    onClick={() => setActive(item.key)}
                  >
                    {item.header}
                  </span>
                </li>
              </div>
            ))}
          </ul>

          <div className={`${styles.add_quytrinh}`}>
            <div className={`${styles.back_quytrinh}`}>
              <button style={{ display: "flex" }} onClick={() => router.back()}>
                <picture>
                  <img src={`/left_arrow.png`} alt=""></img>
                </picture>
                <p>Danh sách quy trình đào tạo</p>
              </button>
            </div>

            <div className={`${styles.add_quytrinh1}`}>
              <button
                style={{ display: "flex" }}
                onClick={() => handleOpenModal(1)}
              >
                <picture>
                  <img src={`/add.png`} alt=""></img>
                </picture>
                <p>Thêm giai đoạn đào tạo</p>
              </button>
            </div>
          </div>
          {openModal === 1 && (
            <AddDetailTrainingProcess
              animation={animateModal}
              closeModal={handleCloseModal}
              id={trainingProcessId}
              setData={setNewData}
            ></AddDetailTrainingProcess>
          )}

          <div className={`${styles.giaidoans}`}>
            <div className={`${styles.title_giaidoans}`}>
              <h4>
                QTDT{`${trainingProcessId}`} {trainingProcessName}
              </h4>
            </div>

            {trainingProcess?.map((item, index) => (
              <div key={index}>
                <ListDetailTrainingProcess
                  item={item}
                  index={index}
                  setData={handleUpdateData}
                ></ListDetailTrainingProcess>
              </div>
            ))}
          </div>
        </div>
        <BodyFrameFooter src="https://www.youtube.com/embed/U0c_dQb-6z0"></BodyFrameFooter>
      </div>
    </>
  );
}

export const getServerSideProps = async ({ params }) => {
  const { idTrainingProcess } = params;
 

  try {
    const response = await DataDetailProcess(idTrainingProcess);
    const dataDetail = response?.data.data;
    return {
      props: {
        dataDetail,
      },
    };
  } catch (error) {
    console.error("Error fetching data from API:", error);
    return { props: {} };
  }
};
