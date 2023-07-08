interface ItemCardThird {
    id: number;
    stt: number;
    tennv: string;
    sotinungtuyen: number;
    sohoso: number
  }
  
  interface ListCardThird{
    listcardThird?: ItemCardThird[];
  }
  import React from "react";
  import styles from "./ThirdBlock.module.css";
  
  const ThirdBlock: React.FC<ListCardThird> = ({ listcardThird }) => {
    const ListData = listcardThird?.map((item, index) => {
      return (
        <>
          <tr key={item.id} className={`${styles.tr}`}>
            <td>{item.stt}</td>
            <td>{item.tennv}</td>
            <td>{item.sotinungtuyen}</td>
            <td>{item.sohoso}</td>
          </tr>
        </>
      );
    });
    return <>{ListData}</>;
  };
  
  export default ThirdBlock;
  