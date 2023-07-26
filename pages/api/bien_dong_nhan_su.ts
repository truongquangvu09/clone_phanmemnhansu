import axios from 'axios';

interface ApiResponse {
    data: {};
    error: string | null;
}
const url = process.env.NEXT_PUBLIC_BASE_URL
const url1 = process.env.NEXT_PUBLIC_BASE_URL2

const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM5NiwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUUxDIjoxNjY0LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6InRyYW5nY2h1b2k0QGdtYWlsLmNvbSIsInBob25lVEsiOiIiLCJjcmVhdGVkQXQiOjE2NjM4MzY0MDUsInR5cGUiOjEsImNvbV9pZCI6MTY2NCwidXNlck5hbWUiOiJDw7RuZyB0eSBD4buVIHBo4bqnbiBUaGFuaCB0b8OhbiBIxrBuZyBIw6AgMiJ9LCJpYXQiOjE2OTAzMDYyOTQsImV4cCI6MTY5MDM5MjY5NH0.Y_qU09_01Cu1EOMveRkxeW_4XWrV0Dx11PQcLGRzRJM'

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

export const PlanningAppointmentList = async (): Promise<ApiResponse> =>{
    try {
        const response = await axios.post(`${url}api/hr/personalChange/getListAppoint`,{},{
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




/* -------------------------------------- DELETE ----------------------------------------------*/

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