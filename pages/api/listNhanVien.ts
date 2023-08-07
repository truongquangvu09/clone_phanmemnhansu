import axios from 'axios';

interface ApiResponse {
    data: {};
    error: string | null;
}
const url = process.env.NEXT_PUBLIC_BASE_URL2
const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTQxNzUzOCwiaWRUaW1WaWVjMzY1IjoyNDU1NTksImlkUUxDIjoxMjE1OTgsImlkUmFvTmhhbmgzNjUiOjIsImVtYWlsIjpudWxsLCJwaG9uZVRLIjoiMDM5NjY0NjA5MCIsImNyZWF0ZWRBdCI6MTY5MDk1OTYyNiwidHlwZSI6MSwiY29tX2lkIjoxMjE1OTgsInVzZXJOYW1lIjoiY29uZyB0eSB2dnZ2diJ9LCJpYXQiOjE2OTEzMzg1NjQsImV4cCI6MTY5MTQyNDk2NH0.kzprE0aFRBeONnVKgYyp8MJuM9zNsA_MVSQ2K8WHGgs'

/* -------------------------------------- LIST ----------------------------------------------*/

export const EmployeeList = async (formData:FormData): Promise<ApiResponse> => {
    try {
        const response = await axios.post<ApiResponse>(`${url}api/qlc/managerUser/listAll`,
        formData,
            {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
};
