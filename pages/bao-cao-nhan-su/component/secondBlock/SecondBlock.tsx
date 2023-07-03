interface ItemCardSecond {
  id: number;
  matin: string;
  tongungvien: number;
  phongvan: number;
  nhanviec: number;
  huy: number;
}

interface ListCardSecond {
  listcardSecond?: ItemCardSecond[];
}
import React from "react";
import styles from "./SecondBlock.module.css";

const SecondBlock: React.FC<ListCardSecond> = ({ listcardSecond }) => {
  const ListData = listcardSecond?.map((item, index) => {
    return (
      <>
        <tr key={item.id} className={`${styles.tr}`}>
          <td>{item.matin}</td>
          <td>{item.tongungvien}</td>
          <td>{item.phongvan}</td>
          <td>{item.nhanviec}</td>
          <td>{item.huy}</td>
        </tr>
      </>
    );
  });
  return <>{ListData}</>;
};

export default SecondBlock;
