/* eslint-disable react/jsx-key */
import React from "react";
import styles from '../styles/styles.module.css'

export default function DataQTTD({}) {
    const data = [
        {
            id: "QTTĐ195",
           
            name: 'Tuyển thực tập sinh IT',
            time: '10:13:39 26/06/2023',

        },{
            id: "QTTĐ193",
           
            name: 'Tuyển thực tập sinh IT',
            time: '10:13:39 26/06/2023',

        },{
            id: "QTTĐ196",
          
            name: 'Tuyển thực tập sinh IT',
            time: '10:13:39 26/06/2023',

        },{
            id: "QTTĐ197",
         
            name: 'Tuyển thực tập sinh IT',
            time: '10:13:39 26/06/2023',

        }
    ]
    return (
        <div className={` ${styles.l_tr_show}`}>
        <tbody style={{width:'100%'}}>
          {data?.map((item) => (
            <div key={item.id} className={`${styles.show}`}>
                <th className={`${styles.show_id}`}>{item.id}</th>
                <td className={`${styles.nameQTTD}`} style={{display:'flex'}}>
                    <picture >
                        <img src={`${'/icon_folder.svg'}`} alt=""></img>
                    </picture>
                    <p>{item.name}</p>
                </td>
                <td className={`${styles.date}`}>{item.time}</td>
                <td  className={`${styles.show_checkbox}`}>
                    <input type="checkbox"  className = {`${styles.checkbox}`} ></input>
                </td>
            </div>
          ))}
        </tbody>
      </div>
    );
}