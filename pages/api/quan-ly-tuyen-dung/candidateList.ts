import axios from 'axios';

interface ApiResponse {
    data: {};
    error: string | null;
}
const url = process.env.NEXT_PUBLIC_BASE_URL
const url1 = process.env.NEXT_PUBLIC_BASE_URL2

const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM3NzQ0OSwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUUxDIjoxNjY0LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6InRyYW5nY2h1b2k0QGdtYWlsLmNvbSIsInBob25lVEsiOiIiLCJjcmVhdGVkQXQiOjE2NjM4MzY0MDUsInR5cGUiOjEsImNvbV9pZCI6MTY2NCwidXNlck5hbWUiOiJNdG4gQ29tcGFueSJ9LCJpYXQiOjE2OTE2Mjk3ODUsImV4cCI6MTY5MTcxNjE4NX0.z5kf45dGeXcOTDqlmcC5fl8PZd6IjhcY-joEORqte94'

/* -------------------------------------- LIST ----------------------------------------------*/

export const CandidateList = async (formData:FormData): Promise<ApiResponse> =>{
    try {
        const response = await axios.post(`${url}api/hr/recruitment/listCandi`,formData,{
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
     throw new Error('Failed to get list of candidates')   
    }
}

export const ProcessList = async (formData:FormData): Promise<ApiResponse> =>{
    try {
        const response = await axios.post(`${url}api/hr/recruitment/getListProcess`,formData,{
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
     throw new Error('Failed to get list of process')   
    }
}

/* -------------------------------------- ADD ----------------------------------------------*/

export const ProcessAdd = async (formData:FormData): Promise<ApiResponse> =>{
    try {
        const response = await axios.post(`${url}api/hr/recruitment/createProcess`,formData,{
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
     throw new Error('Failed to add process')   
    }
}

export const CandidateAdd = async (formData:FormData): Promise<ApiResponse> =>{
    try {
        const response = await axios.post(`${url}api/hr/recruitment/createCandidate`,formData,{
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
     throw new Error('Failed to add candidate')   
    }
}

export const AddGetJob = async (formData:FormData): Promise<ApiResponse> =>{
    try {
        const response = await axios.post(`${url}api/hr/recruitment/addCandidateGetJob`,formData,{
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
     throw new Error('Failed to add candidate get job')   
    }
}

export const AddFailJob = async (formData:FormData): Promise<ApiResponse> =>{
    try {
        const response = await axios.post(`${url}api/hr/recruitment/FailJob`,formData,{
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
     throw new Error('Failed to add candidate Fail job')   
    }
}

export const AddCancelJob = async (formData:FormData): Promise<ApiResponse> =>{
    try {
        const response = await axios.post(`${url}api/hr/recruitment/cancelJob`,formData,{
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
     throw new Error('Failed to add candidate cancel job')   
    }
}

export const AddContactJob = async (formData:FormData): Promise<ApiResponse> =>{
    try {
        const response = await axios.post(`${url}api/hr/recruitment/contactJob`,formData,{
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
     throw new Error('Failed to add candidate contact job')   
    }
}

export const AddInterview = async (formData:FormData): Promise<ApiResponse> =>{
    try {
        const response = await axios.post(`${url}api/hr/recruitment/scheduleInter`,formData,{
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
     throw new Error('Failed to add candidate interview')   
    }
}



/* -------------------------------------- DELETE ----------------------------------------------*/

export const CandidateDelete = async (formData:FormData): Promise<ApiResponse> =>{
    try {
        const response = await axios.post(`${url}api/hr/recruitment/softDeleteCandi`,formData,{
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
     throw new Error('Failed to delete candidate')   
    }
}

export const ProcessDelete = async (formData:FormData): Promise<ApiResponse> =>{
    try {
        const response = await axios.post(`${url}api/hr/recruitment/deleteProcess`,formData,{
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
     throw new Error('Failed to delete process')   
    }
}
/* -------------------------------------- UPDATE ----------------------------------------------*/

export const ProcessUpdate = async (formData:FormData): Promise<ApiResponse> =>{
    try {
        const response = await axios.post(`${url}api/hr/recruitment/updateProcess`,formData,{
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
     throw new Error('Failed to update process')   
    }
}

export const CandidateUpdate = async (formData:FormData): Promise<ApiResponse> =>{
    try {
        const response = await axios.post(`${url}api/hr/recruitment/updateCandidate`,formData,{
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
     throw new Error('Failed to update candidate')   
    }
}

/* -------------------------------------- DETAILS ----------------------------------------------*/

export const GetJobDetails = async (formData:FormData): Promise<ApiResponse> =>{
    try {
        const response = await axios.post(`${url}api/hr/recruitment/detailCandidateGetJob`,formData,{
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
     throw new Error('Failed to get detail get job')   
    }
}

export const FailJobDetails = async (formData:FormData): Promise<ApiResponse> =>{
    try {
        const response = await axios.post(`${url}api/hr/recruitment/detailCandidateFailJob`,formData,{
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
     throw new Error('Failed to get detail fail job')   
    }
}

export const CancelJobDetails = async (formData:FormData): Promise<ApiResponse> =>{
    try {
        const response = await axios.post(`${url}api/hr/recruitment/detailCandidateCancelJob`,formData,{
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
     throw new Error('Failed to get detail cancel job')   
    }
}

export const ContactJobDetails = async (formData:FormData): Promise<ApiResponse> =>{
    try {
        const response = await axios.post(`${url}api/hr/recruitment/detailCandidateContactJob`,formData,{
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
     throw new Error('Failed to get detail cancel job')   
    }
}
