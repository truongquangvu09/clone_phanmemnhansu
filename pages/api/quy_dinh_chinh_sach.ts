import axios from "axios";

interface ApiResponse {
    data:{}
    error:string
}
const url = process.env.NEXT_PUBLIC_BASE_URL
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM5NiwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUUxDIjoxNjY0LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6InRyYW5nY2h1b2k0QGdtYWlsLmNvbSIsInBob25lVEsiOiIiLCJjcmVhdGVkQXQiOjE2NjM4MzY0MDUsInR5cGUiOjEsImNvbV9pZCI6MTY2NCwidXNlck5hbWUiOiJDw7RuZyB0eSBD4buVIHBo4bqnbiBUaGFuaCB0b8OhbiBIxrBuZyBIw6AgMiJ9LCJpYXQiOjE2OTAzMDYyOTQsImV4cCI6MTY5MDM5MjY5NH0.Y_qU09_01Cu1EOMveRkxeW_4XWrV0Dx11PQcLGRzRJM'

/* -------------------------------------- LIST ----------------------------------------------*/
export const SpecifiedGroupList = async (pageSize:number,page:number,keyWords:any):Promise<ApiResponse> => {
    try {
        const response = await axios.get(`${url}api/hr/administration/listProvision?pageSize=${pageSize}&page=${page}&keyWords=${keyWords}`,{
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to get data')
    }
}

export const RulesByGroupList = async(id:number) =>{
    try {
        const response = await axios.get(`${url}api/hr/administration/listPolicy?id=${id}`,{
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to get data')
    }

}

export const PolicyList = async (page:number,pageSize:number,keyWords:any): Promise<ApiResponse>=>{
    try {
        const response = await axios.get(`${url}api/hr/administration/listEmpoyePolicy?page=${page}&pageSize=${pageSize}&keyWords=${keyWords}`,{
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to get data')
    }
}

export const PolicyByGroupList = async (id:number)=>{
    try {
        const response  = await axios.get(`${url}api/hr/administration/listEmployeePolicySpecific?id=${id}`,{
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to get data')
    }
}


/* -------------------------------------- ADD ----------------------------------------------*/
export const AddSpecifiedGroup = async (formData:FormData): Promise<ApiResponse>=>{
    try {
        const response = await axios.post(`${url}api/hr/administration/addProvision`,formData,{
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to add provision ')
    }

}

export const AddRulesByGroupList = async (formData:FormData): Promise<ApiResponse>=>{
    try {
        const response = await axios.post(`${url}api/hr/administration/addPolicy`,formData,{
            headers:{
                authorization: `Bearer ${token}`,
            }
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to add policy ')
    }

}

export const AddPolicy = async (formData: FormData): Promise<ApiResponse>=>{
    try {
        const response = await axios.post(`${url}api/hr/administration/addEmployeePolicy`,formData,{
            headers:{
                authorization: `Bearer ${token}`,
            }
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to add policy ')
    }
} 

export const AddPolicyByGroup = async (formData:FormData): Promise<ApiResponse>=>{
    try {
        const response = await axios.post(`${url}api/hr/administration/addEmpoyePolicySpecific`,formData,{
            headers:{
                authorization: `Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to add policy by group ')
    }
}



/* -------------------------------------- DETAIL ----------------------------------------------*/

export const GroupDetails = async (id:number) =>{
    try {
        const response = await axios.get(`${url}api/hr/administration/detailProvision?id=${id}`,{
            headers:{
                authorization: `Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to get details for group ')
    }
}

export const RegulationsDetails = async (id:number) =>{
    try {
        const response = await axios.get(`${url}api/hr/administration/detailPolicy?id=${id}`,{
            headers:{
                authorization: `Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to get details for regulation ')
    }
}

    export const PolicyGroupDetail = async (id:number) =>{
        try {
            const response = await axios.get(`${url}api/hr/administration/getDetailPolicy?id=${id}`,{
                headers:{
                    authorization: `Bearer ${token}`
                }
            })
            return response.data
        } catch (error) {
            throw new Error(`Failed to get details for Policy Group `)
        }
    }

    export const PolicyDetails = async (id:number) =>{
        try {
            const response = await axios.get(`${url}api/hr/administration/detailEmployeePolicySpecific?id=${id}`,{
                headers:{
                    authorization: `Bearer ${token}`
                }
            })
            return response.data
        } catch (error) {
            throw new Error('Failed to get details for Policy ')
        }
    }

   
/* -------------------------------------- UPDATE ----------------------------------------------*/

export const GroupUpdate = async (fomrData: FormData): Promise<ApiResponse> => {
    try {
        const response = await axios.put(`${url}api/hr/administration/updateProvision`,fomrData,{
            headers:{
                authorization: `Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to update group regulation ')
    }
}

export const UpdateRegulation = async (fomrData: FormData): Promise<ApiResponse> => {
    try {
        const response = await axios.post(`${url}api/hr/administration/updatePolicy`,fomrData,{
            headers:{
                authorization: `Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to update regulation ')
    }
}

export const GroupPolicyUpdate = async (fomrData: FormData): Promise<ApiResponse> => {
    try {
        const response = await axios.put(`${url}api/hr/administration/updateEmployeePolicy`,fomrData,{
            headers:{
                authorization: `Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to update group policy ')
    }
}

export const UpdatePolicy = async (fomrData: FormData): Promise<ApiResponse> => {
    try {
        const response = await axios.post(`${url}api/hr/administration/updateEmployeePolicySpecific`,fomrData,{
            headers:{
                authorization: `Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to update policy ')
    }
}

/* -------------------------------------- DELETE ----------------------------------------------*/

export const GroupDelete = async (formData:FormData) =>{
    try {
        const response = await axios.delete(`${url}api/hr/administration/deleteProvision`,{
            headers:{
                authorization: `Bearer ${token}`
            },
            data: formData,
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to delete  group ')
    }
}

export const DeleteRegulations = async (formData:FormData) =>{
    try {
        const response = await axios.delete(`${url}api/hr/administration/deletePolicy`,{
            headers:{
                authorization: `Bearer ${token}`
            },
            data: formData, 
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to delete regulations ')
    }
}

export const GroupPolicyDelete = async (formData:FormData) =>{
    try {
        const response = await axios.delete(`${url}api/hr/administration/deleteEmployeePolicy`,{
            headers:{
                authorization: `Bearer ${token}`
            },
            data: formData,
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to delete  group ')
    }
}

export const DeletePolicy = async (formData:FormData) =>{
    try {
        const response = await axios.delete(`${url}api/hr/administration/deleteEmployeePolicySpecific`,{
            headers:{
                authorization: `Bearer ${token}`
            },
            data: formData, 
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to delete Policy ')
    }
}

