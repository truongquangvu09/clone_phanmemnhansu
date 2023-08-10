import axios from 'axios'
interface ApiResponse {
    data:{}
    error:string
}
const url = process.env.NEXT_PUBLIC_BASE_URL2
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM3NzQ0OSwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUUxDIjoxNjY0LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6InRyYW5nY2h1b2k0QGdtYWlsLmNvbSIsInBob25lVEsiOiIiLCJjcmVhdGVkQXQiOjE2NjM4MzY0MDUsInR5cGUiOjEsImNvbV9pZCI6MTY2NCwidXNlck5hbWUiOiJNdG4gQ29tcGFueSJ9LCJpYXQiOjE2OTE2Mjk3ODUsImV4cCI6MTY5MTcxNjE4NX0.z5kf45dGeXcOTDqlmcC5fl8PZd6IjhcY-joEORqte94'

/* -------------------------------------- LIST ----------------------------------------------*/

export const EmployeeListData = async (): Promise<ApiResponse> =>{
    try {
        const response = await axios.post(`${url}api/qlc/managerUser/list`,{

        },{
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
      throw new Error("Failed to fetch data")  
    } 
    
}