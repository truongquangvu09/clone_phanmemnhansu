import axios from "axios";
import { EmployeeList } from "@/pages/api/listNhanVien";
import { OrganizationalStructureData, PostionCharData } from "@/pages/api/co_cau_to_chuc";
import { SpecifiedGroupList } from "@/pages/api/quy_dinh_chinh_sach";
import { DepartmentList } from "@/pages/api/listPhongBan";


export async function FetchDataEmployee() {
    const comid: any = 1664
    try {
        const formData = new FormData();
        formData.append('com_id', comid)
        const response = await EmployeeList(formData)
        return response?.data;
    } catch (error) {
        console.error('Error fetching data Employee:', error);
        return null;
    }
}

export async function FetchDataOrganizationalStructure() {
    try {
        const response = await OrganizationalStructureData()
        return response?.data;
    } catch (error) {
        console.error('Error fetching data Employee:', error);
        return null;
    }
}

export async function FetchDataDep() {
    try {
        const comid: any = 1664
        const formData = new FormData();
        formData.append('com_id', comid)
        const response = await DepartmentList(formData)
        return response?.data;
    } catch (error) {
        console.error('Error fetching data dep:', error);
        return null;
    }
}

export async function FetchDataPosition() {
    try {
        const response = await PostionCharData()
        return response?.data;
    } catch (error) {
        console.error('Error fetching data Employee:', error);
        return null;
    }
}

export async function FetchDataSpecifiedGroup() {
    try {
        const response = await SpecifiedGroupList(100, 1, "")
        return response?.data;
    } catch (error) {
        console.error('Error fetching data Employee:', error);
        return null;
    }
}
