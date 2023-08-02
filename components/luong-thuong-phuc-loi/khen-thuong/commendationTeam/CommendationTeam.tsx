import React, { useEffect, useState } from "react";
import RewardTable from "../component/Component";
import styles from "../component/Component.module.css";
import { GetDataAchievement } from "@/pages/api/luong-thuong-phuc-loi/reward";
import { SignIn } from "@/pages/api/Home/HomeService";
import MyPagination from "@/components/pagination/Pagination";
import BodyFrameFooter from "@/components/bodyFrame/bodyFrame_footer/bodyFrame_footer";
import ModalAddTeamCompliments from "./modalAddTeamCompliments/modalAddTeamCompliments";

export interface CommendationTeam {}
export default function CommendationTeam({ children }: any) {
  const [data, setData] = useState<any>();
  const [currentPage, setCurrentPage] = useState<any>(1);
  const [keyWords, setKeyWords] = useState<any>('')
  const newData = data?.data.slice(0, -1);
  const myPagination = data?.data[data.data.length - 1];


  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const handleSearch = (key) => {
    setKeyWords(key)
  }
  useEffect(() => {
    const GetDataPersonalReward = async () => {
      const response = await GetDataAchievement(currentPage, 10, 2, keyWords);
      setData(response?.data.data);
    };
    GetDataPersonalReward();
  }, [currentPage, keyWords]);

  return (
    <>
      <RewardTable
        model="tapthe"
        display="block"
        data={newData}
        modal={<ModalAddTeamCompliments></ModalAddTeamCompliments>}
        keyWords = {handleSearch}
      ></RewardTable>
      <div className={`${styles.pagination}`}>
        <MyPagination
          current={currentPage}
          total={myPagination?.tongSoBanGhi}
          pageSize={10}
          onChange={handlePageChange}
        />
      </div>
      <BodyFrameFooter src="https://www.youtube.com/embed/qICTgD7Dt9w"></BodyFrameFooter>
    </>
  );
}
