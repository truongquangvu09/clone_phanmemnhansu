import React, { useState } from 'react';
import RewardTable from '../component/Component';
import ModalReward from '../personalReward/modalAddPersonalCompliments/ModalAddReward';

export interface CommendationTeam{}
export default function CommendationTeam ({children}: any){
    
    const data = [
       {
            stt: "4",
            soquyetdinh: '123qvb',
            noidungkhenthuong:'test khen thưởng thành tích 1',
            tendoituongnhan: 'Phan Mạnh Hùng (Phòng sáng tạo) , Vũ Hà My (Biên Tập)',
            thoidiem: '22/08/2002',
            hinhthuckhenthuong: 'Tiền mặt',
            danhhieu:'Quibusdam aut conseq',
            capkhen: 'Sunt labore est mini'
        },{
            stt: "5",
            soquyetdinh: '123qvb',
            noidungkhenthuong:'test khen thưởng thành tích 1',
            tendoituongnhan: 'Phan Mạnh Hùng (Phòng sáng tạo) , Vũ Hà My (Biên Tập)',
            thoidiem: '22/08/2002',
            hinhthuckhenthuong: 'Tiền mặt',
            danhhieu:'Quibusdam aut conseq',
            capkhen: 'Sunt labore est mini'
        },{
            stt: "6",
            soquyetdinh: '123qvb',
            noidungkhenthuong:'test khen thưởng thành tích 1',
            tendoituongnhan: 'Phan Mạnh Hùng (Phòng sáng tạo) , Vũ Hà My (Biên Tập)',
            thoidiem: '22/08/2002',
            hinhthuckhenthuong: 'Tiền mặt',
            danhhieu:'Quibusdam aut conseq',
            capkhen: 'Sunt labore est mini'
        },{
            stt: "7",
            soquyetdinh: '123qvb',
            noidungkhenthuong:'test khen thưởng thành tích 1',
            tendoituongnhan: 'Phan Mạnh Hùng (Phòng sáng tạo) , Vũ Hà My (Biên Tập)',
            thoidiem: '22/08/2002',
            hinhthuckhenthuong: 'Tiền mặt',
            danhhieu:'Quibusdam aut conseq',
            capkhen: 'Sunt labore est mini'
        },{
            stt: "8",
            soquyetdinh: '123qvb',
            noidungkhenthuong:'test khen thưởng thành tích 1',
            tendoituongnhan: 'Phan Mạnh Hùng (Phòng sáng tạo) , Vũ Hà My (Biên Tập)',
            thoidiem: '22/08/2002',
            hinhthuckhenthuong: 'Tiền mặt',
            danhhieu:'Quibusdam aut conseq',
            capkhen: 'Sunt labore est mini'
        },{
            stt: "9",
            soquyetdinh: '123qvb',
            noidungkhenthuong:'test khen thưởng thành tích 1',
            tendoituongnhan: 'Phan Mạnh Hùng (Phòng sáng tạo) , Vũ Hà My (Biên Tập)',
            thoidiem: '22/08/2002',
            hinhthuckhenthuong: 'Tiền mặt',
            danhhieu:'Quibusdam aut conseq',
            capkhen: 'Sunt labore est mini'
        },{
            stt: "10",
            soquyetdinh: '123qvb',
            noidungkhenthuong:'test khen thưởng thành tích 1',
            tendoituongnhan: 'Phan Mạnh Hùng (Phòng sáng tạo) , Vũ Hà My (Biên Tập)',
            thoidiem: '22/08/2002',
            hinhthuckhenthuong: 'Tiền mặt',
            danhhieu:'Quibusdam aut conseq',
            capkhen: 'Sunt labore est mini'
        }
    ]
    return(
        <>
           <RewardTable model='tapthe' display= 'block' data = {data} modal = {<ModalReward></ModalReward>}></RewardTable>
        </>
    )
}