import React, { useState } from 'react';
import PunishmentTable from '../component/Component';



export interface DisciplineList{}
export default function DisciplineList ({children}: any){
    const data = [
        {
            stt: '1',
            soquyetdinh: '123qvb',
            noidungkhenthuong:'test khen thưởng thành tích 1',
            tendoituongnhan: 'Phan Mạnh Hùng (Phòng sáng tạo) , Vũ Hà My (Biên Tập)',
            thoidiem: '22/08/2002',
            hinhthuckhenthuong: 'Tiền mặt',
            danhhieu:'Quibusdam aut conseq',
            capkhen: 'Sunt labore est mini'
        },
        {
            stt: "2",
            soquyetdinh: 'Buckminster Randolph',
            noidungkhenthuong:'kenovyxoho@mailinator.com',
            tendoituongnhan: 'Phan Mạnh Hùng (Phòng sáng tạo) , Trang Anh (Chưa cập nhật) , Test Kiên (Chưa cập nhật) , I AM HULK (ĐỀ ÁN) , Phùng Sơn (KỸ THUẬT) , Lê Mạnh Linh (KỸ THUẬT) , trần văn hải (KỸ THUẬT) , trần văn an (KỸ THUẬT) , Trần Văn Đức (Biên Tập) , Uy Phùng Hiểu (Ken)',
            thoidiem: '22/08/2002',
            hinhthuckhenthuong: 'Tiền mặt',
            danhhieu:'Quibusdam aut conseq',
            capkhen: 'Sunt labore est mini'
        },{
            stt: "3",
            soquyetdinh: '123qvb',
            noidungkhenthuong:'test khen thưởng thành tích 1',
            tendoituongnhan: 'Phạm Xuân Nguyên Khôi (KỸ THUẬT) , Phùng Ngọc Anh (KỸ THUẬT) , Bùi Văn Bến (phòng Đào tạo) , Lưu Khải An (KỸ THUẬT)',
            thoidiem: '22/08/2002',
            hinhthuckhenthuong: 'Tiền mặt',
            danhhieu:'Quibusdam aut conseq',
            capkhen: 'Sunt labore est mini'
        },{
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
            <PunishmentTable model = 'list' display = 'none' data = {data} violators = 'Cá nhân / phòng ban vi phạm'></PunishmentTable>
        </>
    )
}