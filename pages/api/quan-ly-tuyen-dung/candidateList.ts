import axios from 'axios';

interface ApiResponse {
    data: {};
    error: string | null;
}
const url = process.env.NEXT_PUBLIC_BASE_URL
const url1 = process.env.NEXT_PUBLIC_BASE_URL2

const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTQxNzUzOCwiaWRUaW1WaWVjMzY1IjoyNDU1NTksImlkUUxDIjoxMjE1OTgsImlkUmFvTmhhbmgzNjUiOjIsImVtYWlsIjpudWxsLCJwaG9uZVRLIjoiMDM5NjY0NjA5MCIsImNyZWF0ZWRBdCI6MTY5MDk1OTYyNiwidHlwZSI6MSwiY29tX2lkIjoxMjE1OTgsInVzZXJOYW1lIjoiY29uZyB0eSB2dnZ2diJ9LCJpYXQiOjE2OTEzMzg1NjQsImV4cCI6MTY5MTQyNDk2NH0.kzprE0aFRBeONnVKgYyp8MJuM9zNsA_MVSQ2K8WHGgs'

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
