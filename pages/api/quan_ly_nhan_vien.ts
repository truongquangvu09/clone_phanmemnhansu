import axios from "axios";

interface ApiResponse {
    data: {}
    error: string
}
const url = process.env.NEXT_PUBLIC_BASE_URL2
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM5NiwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUUxDIjoxNjY0LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6InRyYW5nY2h1b2k0QGdtYWlsLmNvbSIsInBob25lVEsiOiIiLCJjcmVhdGVkQXQiOjE2NjM4MzY0MDUsInR5cGUiOjEsImNvbV9pZCI6MTY2NCwidXNlck5hbWUiOiJDw7RuZyB0eSBD4buVIHBo4bqnbiBUaGFuaCB0b8OhbiBIxrBuZyBIw6AgMiJ9LCJpYXQiOjE2OTAzMDYyOTQsImV4cCI6MTY5MDM5MjY5NH0.Y_qU09_01Cu1EOMveRkxeW_4XWrV0Dx11PQcLGRzRJM'

/* -------------------------------------- LIST ----------------------------------------------*/

export const EmployeeList = async (formData: FormData): Promise<ApiResponse> => {
    try {
        const response = await axios.post<ApiResponse>(`${url}api/qlc/managerUser/list`,
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

/* -------------------------------------- UPDATE ----------------------------------------------*/

export const EmployeeUpdate = async (formData: FormData): Promise<ApiResponse> => {
    try {
        const response = await axios.post<ApiResponse>(`${url}api/qlc/managerUser/edit`,
            formData,
            {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        throw new Error('Failed to update Employee');
    }
};