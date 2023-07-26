import axios from 'axios';

interface ApiResponse {
    data: {};
    error: string | null;
}
const url = process.env.NEXT_PUBLIC_BASE_URL

const token1='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM5NiwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUUxDIjoxNjY0LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6InRyYW5nY2h1b2k0QGdtYWlsLmNvbSIsInBob25lVEsiOiIiLCJjcmVhdGVkQXQiOjE2NjM4MzY0MDUsInR5cGUiOjEsImNvbV9pZCI6MTY2NCwidXNlck5hbWUiOiJDw7RuZyB0eSBD4buVIHBo4bqnbiBUaGFuaCB0b8OhbiBIxrBuZyBIw6AgMiJ9LCJpYXQiOjE2OTAzMDYyOTQsImV4cCI6MTY5MDM5MjY5NH0.Y_qU09_01Cu1EOMveRkxeW_4XWrV0Dx11PQcLGRzRJM'

/* -------------------------------------- LIST ----------------------------------------------*/

export const OrganizationalStructureData = async (): Promise<ApiResponse> => {
    try {
        const response = await axios.post<ApiResponse>(`${url}api/hr/organizationalStructure/detailInfoCompany`,
            {},
            {
                headers: {
                    authorization: `Bearer ${token1}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
};

export const PostionCharData = async ():Promise<ApiResponse>=>{
    try {
        const response = await axios.post<ApiResponse>(`${url}api/hr/organizationalStructure/listPosition`,
        {},{
            headers: {
                authorization: `Bearer ${token1}`,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch data');
    }

}

export const SealAndSignatureData = async (formData:FormData):Promise<ApiResponse>=>{
    try {
        const response = await axios.post(`${url}api/hr/organizationalStructure/listEmpUseSignature`,formData,{
            headers: {
                authorization: `Bearer ${token1}`,
            },
        })
        return response.data
    } catch (error) {
        throw new Error("Failed to get list SealAndSignature")
    }
}

export const SignatureList = async (formData:FormData):Promise<ApiResponse>=>{
    try {
        const response = await axios.post(`${url}api/hr/organizationalStructure/listSignatureLeader`,formData,{
            headers: {
                authorization: `Bearer ${token1}`,
            }
        })
        return response.data
    } catch (error) {
        throw new Error("Failed to get list signature")
    }
}

export const LeaderBiographyList = async (formData:FormData):Promise<ApiResponse>=>{
    try {
        const response = await axios.post(`${url}api/hr/organizationalStructure/listInfoLeader`,formData,{
            headers: {
                authorization: `Bearer ${token1}`,
            }
        })
        return response.data
    } catch (error) {
        throw new Error("Failed to get list leaderBiography")
    }
}

/* -------------------------------------- DETAIL ----------------------------------------------*/

export const OrganizationalStructureDetail = async (formData:FormData):Promise<ApiResponse>=>{
    try {
        const response = await axios.post(`${url}api/hr/organizationalStructure/description`,formData,{
            headers: {
                authorization: `Bearer ${token1}`,
            },
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to get detail Organizational Structure ');
    }
}

export const PostionCharDetail = async(formData:FormData): Promise<ApiResponse>=>{
    try {
        const response = await axios.post(`${url}api/hr/organizationalStructure/missionDetail`,formData,{
            headers: {
                authorization: `Bearer ${token1}`,
            },
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to get details from postionChar')
    }
}

export const LeaderBiographyDetail = async(formData:FormData): Promise<ApiResponse>=>{
    try {
        const response = await axios.post(`${url}api/hr/organizationalStructure/leaderDetail`,formData,{
            headers: {
                authorization: `Bearer ${token1}`,
            },
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to get details from postionChar')
    }
}



/* -------------------------------------- UPDATE ----------------------------------------------*/

export const OrganizationalStructureUpdate = async (formData:FormData):Promise<ApiResponse>=>{
    try {
        const response = await axios.post(`${url}api/hr/organizationalStructure/updateDescription`,formData,{
            headers: {
                authorization: `Bearer ${token1}`,
            },
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to update Organizational Structure ');
    }
}

export const PostionCharUpdate = async (formData:FormData):Promise<ApiResponse>=>{
    try {
        const response = await axios.post(`${url}api/hr/organizationalStructure/updateMission`,formData,{
            headers: {
                authorization: `Bearer ${token1}`,
            },
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to update Organizational Structure ');
    }
}


export const LeaderBiograpphyUpdate = async (formData:FormData):Promise<ApiResponse>=>{
    try {
        const response = await axios.post(`${url}api/hr/organizationalStructure/updateLeaderDetail`,formData,{
            headers: {
                authorization: `Bearer ${token1}`,
            },
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to update Leader Biograpphy ');
    }
}

/* -------------------------------------- DELETE ----------------------------------------------*/

export const SealAndSignatureDelete = async(formData: FormData):Promise<ApiResponse>=>{
    try {
        const response = await axios.post(`${url}api/hr/organizationalStructure/deleteEmpUseSignature`,formData,{
            headers:{
                authorization:`Bearer ${token1}`,
            }
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to delete Seal and signature')
    }
}

export const DeleteSignature = async(formData: FormData):Promise<ApiResponse>=>{
    try {
        const response = await axios.post(`${url}api/hr/organizationalStructure/deleteSignature`,formData,{
            headers:{
                authorization:`Bearer ${token1}`,
            }
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to delete signature')
    }
}
/* -------------------------------------- UPLOAD ----------------------------------------------*/

export const UploadSignature = async (formData:FormData):Promise<ApiResponse>=>{
    try {
        const response = await axios.post(`${url}api/hr/organizationalStructure/uploadSignature`,formData,{
            headers: {
                authorization: `Bearer ${token1}`
            }
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to upload signature')
    }
}

/* -------------------------------------- ADD ----------------------------------------------*/

export const AddUserSignature = async (formData:FormData):Promise<ApiResponse>=>{
    try {
        const response = await axios.post(`${url}api/hr/organizationalStructure/updateEmpUseSignature`,formData,{
            headers: {
                authorization: `Bearer ${token1}`
            }
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to add user use signature')
    }
}
