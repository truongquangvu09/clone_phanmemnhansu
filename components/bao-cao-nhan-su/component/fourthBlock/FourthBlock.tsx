interface ItemCardFourth {
    id: number;
    stt: number;
    tennvgt: string;
    souvgt: number;
}
  
  interface ListCardFourth{
    listcardFourth?: ItemCardFourth[];
  }
  import React from "react";
  import styles from "./FourthBlock.module.css";
  
  const FourthBlock: React.FC<ListCardFourth> = ({ listcardFourth }) => {
    const ListData = listcardFourth?.map((item, index) => {
      return (
        <>
          <tr key={item.id} className={`${styles.tr}`}>
            <td>{item.stt}</td>
            <td>{item.tennvgt}</td>
            <td>{item.souvgt}</td>
            
          </tr>
        </>
      );
    });
    return <>{ListData}</>;
  };
  
  export default FourthBlock;
  