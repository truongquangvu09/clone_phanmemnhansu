import axios from 'axios';

interface ApiResponse {
    data: {};
    error: string | null;
}
const url = process.env.NEXT_PUBLIC_BASE_URL
const url1 = process.env.NEXT_PUBLIC_BASE_URL2

const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM5NiwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUUxDIjoxNjY0LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6InRyYW5nY2h1b2k0QGdtYWlsLmNvbSIsInBob25lVEsiOiIiLCJjcmVhdGVkQXQiOjE2NjM4MzY0MDUsInR5cGUiOjEsImNvbV9pZCI6MTY2NCwidXNlck5hbWUiOiJDw7RuZyB0eSBD4buVIHBo4bqnbiBUaGFuaCB0b8OhbiBIxrBuZyBIw6AgMiJ9LCJpYXQiOjE2OTA1MDYyNjIsImV4cCI6MTY5MDU5MjY2Mn0.8zrz5AoCfrNI_IS6owM7oSqhQgAZ_XnSJr7zS7-45bM'

/* -------------------------------------- LIST ----------------------------------------------*/

export const SalaryVolatilityList = async (): Promise<ApiResponse> =>{
    try {
        const response = await axios.post(`${url}api/hr/personalChange/getListSalary`,{},{
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
     throw new Error('Failed to get list of salary volatility')   
    }
}

export const PlanningAppointmentList = async (formData:FormData): Promise<ApiResponse> =>{
    try {
        const response = await axios.post(`${url}api/hr/personalChange/getListAppoint`,formData,{
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
     throw new Error('Failed to get list of  planning appointment')   
    }
} 

export const WorkingRotaionList = async (formData:FormData): Promise<ApiResponse> =>{
    try {
        const response = await axios.post(`${url}api/hr/personalChange/getListTranferJob`,formData,{
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
     throw new Error('Failed to get list of  working rotation')   
    }
} 

export const PayrollDownList = async (formData:FormData): Promise<ApiResponse> =>{
    try {
        const response = await axios.post(`${url}api/hr/personalChange/getListQuitJob`,formData,{
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
     throw new Error('Failed to get list of  payroll down')   
    }
} 

export const ShiftList = async (formData:FormData): Promise<ApiResponse> =>{
    try {
        const response = await axios.get(`${url1}api/qlc/shift/list`,{
            headers: {
                authorization: `Bearer ${token}`,
            },
            params: formData, 
        })
        return response.data
    } catch (error) {
     throw new Error('Failed to get list of  shift lists')   
    }
} 

export const OutJobList = async (formData:FormData): Promise<ApiResponse> =>{
    try {
        const response = await axios.post(`${url}api/hr/personalChange/getListQuitJobNew`,formData,{
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
     throw new Error('Failed to get list of Out job')   
    }
} 

/* -------------------------------------- ADD ----------------------------------------------*/

export const AddPlanningAppointment = async (formData:FormData): Promise<ApiResponse> =>{
    try {
        const response = await axios.post(`${url}api/hr/personalChange/updateAppoint`,formData,{
            headers:{
                authorization: `Bearer ${token}`,
            }
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to add planning appointment')
    }
}


export const AddWorkingRotation = async (formData:FormData): Promise<ApiResponse> =>{
    try {
        const response = await axios.post(`${url}api/hr/personalChange/updateTranferJob`,formData,{
            headers:{
                authorization: `Bearer ${token}`,
            }
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to add working rotation')
    }
}

export const AddPayrollDown = async (formData:FormData): Promise<ApiResponse> =>{
    try {
        const response = await axios.post(`${url}api/hr/personalChange/updateQuitJob`,formData,{
            headers:{
                authorization: `Bearer ${token}`,
            }
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to add payroll down')
    }
}




export const AddOutJob = async (formData:FormData): Promise<ApiResponse> =>{
    try {
        const response = await axios.post(`${url}api/hr/personalChange/updateQuitJobNew`,formData,{
            headers:{
                authorization: `Bearer ${token}`,
            }
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to add out job')
    }
}

/* -------------------------------------- DELETE ----------------------------------------------*/

export const DeletePlanningAppointment = async (formData:FormData): Promise<ApiResponse> =>{
    try {
        const response = await axios.post(`${url}api/hr/personalChange/deleteAppoint`,formData,{
            headers:{
                authorization: `Bearer ${token}`,
            }
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to delete planning appointment')
    }
}

export const DeleteWorkingRotation = async (formData:FormData): Promise<ApiResponse> =>{
    try {
        const response = await axios.post(`${url}api/hr/personalChange/deleteTranferJob`,formData,{
            headers:{
                authorization: `Bearer ${token}`,
            }
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to delete working rotation')
    }
}

export const DeletePayrollDown = async (formData:FormData): Promise<ApiResponse> =>{
    try {
        const response = await axios.post(`${url}api/hr/personalChange/deleteQuitJob`,formData,{
            headers:{
                authorization: `Bearer ${token}`,
            }
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to delete payroll down')
    }
}

export const DeleteOutJob = async (formData:FormData): Promise<ApiResponse> =>{
    try {
        const response = await axios.post(`${url}api/hr/personalChange/deleteQuitJobNew`,formData,{
            headers:{
                authorization: `Bearer ${token}`,
            }
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to delete payroll down')
    }
}
