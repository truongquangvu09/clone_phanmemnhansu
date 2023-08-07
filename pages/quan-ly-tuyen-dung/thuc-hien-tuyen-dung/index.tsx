import React, { useEffect, useState } from "react";
import styles from "./headerForm.module.css";
import PerformRecruitment from "@/components/quan-ly-tuyen-dung/thuc-hien-tuyen-dung/PerformRecruitment/PerformRecruitment";
import Recruitment from "@/components/quan-ly-tuyen-dung/thuc-hien-tuyen-dung/Recruitment/recruitment";
import { GetTotalCandi } from "@/pages/api/quan-ly-tuyen-dung/PerformRecruitment";
import PageAuthenticator from "@/components/quyen-truy-cap";
import LoadingSpinner from "@/components/loading";

export default function HeaderForm({ children }: any) {
  const [totalCandi, setTotalCandi] = useState<any>();
  const [authentication, setAuthentication] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try{
      const GetDataTotalCandi = async () => {
        const responseTotalCandi = await GetTotalCandi();
        if (responseTotalCandi?.status === 403) {
          setAuthentication(true);
          setIsLoading(false);
        } else if(responseTotalCandi?.status === 200) {
          setAuthentication(false);
          setIsLoading(false);
          setTotalCandi(responseTotalCandi?.data.data);
        }
      };
      GetDataTotalCandi();
    }catch(error: any) {

    }

  }, []);

  const [active, setActive] = useState(1);
  const listTab = [
    {
      key: 1,
      header: "TỔNG QUAN",
      component: (
        <PerformRecruitment totalCandi={totalCandi}></PerformRecruitment>
      ),
    },
    {
      key: 2,
      header: "TIN TUYỂN DỤNG",
      component: <Recruitment></Recruitment>,
    },
  ];
  return (
    <>
      { isLoading ? (
        <LoadingSpinner />
      ) : authentication ? (
        <PageAuthenticator />
      ) : (
          
          <div className={`${styles.l_body}`}>
          <ul className={`${styles.nav} ${styles.nav_tabs}`} style={{marginBottom: 50}}>
            {listTab.map((item) => (
              <div key={item.key} className={`${styles.mr_5}`} >
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
          {listTab?.find((item) => item.key === active)?.component}
        </div>
      )}
      
    </>
  );
}
