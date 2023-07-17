import axios from "axios";

interface ApiResponse {
    data:{}
    error:string
}
const url = process.env.NEXT_PUBLIC_BASE_URL
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTM5NiwiZW1haWwiOiJ0cmFuZ2NodW9pNEBnbWFpbC5jb20iLCJwaG9uZVRLIjoiIiwidXNlck5hbWUiOiJDw7RuZyB0eSBD4buVIHBo4bqnbiBUaGFuaCB0b8OhbiBIxrBuZyBIw6AgMiIsImFsaWFzIjoibXRuLWNvbXBhbnkiLCJwaG9uZSI6IjAzNjI4MTM3OTgiLCJlbWFpbENvbnRhY3QiOm51bGwsImF2YXRhclVzZXIiOiI2MzgxNDY0MzkwMTgwNjAwMDBfMTM5Ni5qcGciLCJ0eXBlIjoxLCJwYXNzd29yZCI6ImJjMGE5MDkwMzU1Nzg4ZGNiZTI2Yjg3MGRjZGEyM2VkIiwiY2l0eSI6MSwiZGlzdHJpY3QiOjczLCJhZGRyZXNzIjoiTsahIDUwIEzDtCA2IEvEkFQgxJDhu4tuaCBDw7RuZyIsIm90cCI6IjU3MDgyMCIsImF1dGhlbnRpYyI6MSwiaXNPbmxpbmUiOjAsImZyb21XZWIiOiJ0aW12aWVjMzY1IiwiZnJvbURldmljZSI6NCwiY3JlYXRlZEF0IjoxNjYzODM2NDA1LCJ1cGRhdGVkQXQiOjE2ODg1MjYyNDEsImxhc3RBY3RpdmVkQXQiOiIyMDIzLTA3LTExVDAxOjI4OjA0LjM1NFoiLCJ0aW1lX2xvZ2luIjoxNjczMDgwNTk5LCJyb2xlIjowLCJsYXRpdHVkZSI6IjIwLjk4NjgyODciLCJsb25ndGl0dWRlIjoiMTA1LjgzMTIzMTQiLCJpZFFMQyI6MTY2NCwiaWRUaW1WaWVjMzY1IjoyMzI0MTYsImlkUmFvTmhhbmgzNjUiOjAsImNoYXQzNjVfc2VjcmV0Ijoic204VG8zUlRNeCIsInNoYXJlUGVybWlzc2lvbklkIjpbXSwiaW5Gb3JQZXJzb24iOm51bGwsImluRm9yQ29tcGFueSI6eyJzY2FuIjowLCJ1c2Nfa2QiOjEwLCJ1c2Nfa2RfZmlyc3QiOjAsImRlc2NyaXB0aW9uIjoiY8O0bmcgdHkgY2h1ecOqbiBz4bqjbiB4deG6pXQgY2jGsMahbmcgdHLDrG5oIHRydXnhu4FuIGjDrG5oXG4iLCJjb21fc2l6ZSI6MCwidGltdmllYzM2NSI6eyJ1c2NfbmFtZSI6Ik10biBDb21wYW55IiwidXNjX25hbWVfYWRkIjoiTsahIDUwIEzDtCA2IEvEkFQgxJDhu4tuaCBDw7RuZyIsInVzY19uYW1lX3Bob25lIjoiMDM1NjAyMTYwNiIsInVzY19uYW1lX2VtYWlsIjoidHJhbmdjaHVvaTRAZ21haWwuY29tIiwidXNjX3VwZGF0ZV9uZXciOjE2NzA0Njc0NzYsInVzY19jYW5vbmljYWwiOiIiLCJ1c2NfbWQ1IjoiIiwidXNjX3JlZGlyZWN0IjoiIiwidXNjX3R5cGUiOjEsInVzY19zaXplIjowLCJ1c2Nfd2Vic2l0ZSI6IiIsInVzY192aWV3X2NvdW50IjowLCJ1c2NfYWN0aXZlIjowLCJ1c2Nfc2hvdyI6MSwidXNjX21haWwiOjAsInVzY19zdG9wX21haWwiOjAsInVzY191dGwiOjAsInVzY19zc2wiOjAsInVzY19tc3QiOiIiLCJ1c2Nfc2VjdXJpdHkiOiIiLCJ1c2NfaXAiOiIxMTguNzAuMTI2LjEzOCIsInVzY19sb2MiOjAsInVzY19tYWlsX2FwcCI6MCwidXNjX3ZpZGVvIjoiIiwidXNjX3ZpZGVvX3R5cGUiOjEsInVzY192aWRlb19hY3RpdmUiOjAsInVzY19ibG9ja19hY2NvdW50IjowLCJ1c2Nfc3RvcF9ub3RpIjowLCJvdHBfdGltZV9leGlzdCI6MCwidXNlX3Rlc3QiOjAsInVzY19iYWRnZSI6MCwidXNjX21hcCI6IiIsInVzY19kZ2MiOiIiLCJ1c2NfZGd0diI6IiIsInVzY19kZ190aW1lIjowLCJ1c2Nfc2t5cGUiOiIiLCJ1c2NfdmlkZW9fY29tIjoiIiwidXNjX2x2IjoiIn0sImNkcyI6eyJjb21fcGFyZW50X2lkIjpudWxsLCJ0eXBlX3RpbWVrZWVwaW5nIjoiMSwyLDMsNCw1LDgsOSIsImlkX3dheV90aW1la2VlcGluZyI6IjEiLCJjb21fcm9sZV9pZCI6MCwiY29tX3FyX2xvZ28iOm51bGwsImVuYWJsZV9zY2FuX3FyIjowLCJjb21fdmlwIjowLCJjb21fZXBfdmlwIjo1LCJjb21fdmlwX3RpbWUiOjAsImVwX2NybSI6MCwiZXBfc3R0IjoxfSwiX2lkIjoiNjRhY2UyYTExNzhkMGNjZWJiZTZhMTg0In0sImluZm9yUk4zNjUiOm51bGwsImNvbmZpZ0NoYXQiOnsiSGlzdG9yeUFjY2VzcyI6W3siSWREZXZpY2UiOiJhZTM4MjVmYjUyYjE0MzUxIiwiSXBBZGRyZXNzIjoiOjpmZmZmOjExOC43MC4xMjYuMTM4IiwiTmFtZURldmljZSI6IkxpdmUgNCAtIEFuZHJvaWQiLCJUaW1lIjoiMjAyMi0xMC0yOVQwMzowMzozNy4xNzdaIiwiQWNjZXNzUGVybWlzaW9uIjp0cnVlLCJfaWQiOiI2MzVjOTgwOWFmYmQ1NDc4Mjk3MmJmMjkifSx7IklkRGV2aWNlIjoiZTUzNTExNmEyZWVhYzYxMiIsIklwQWRkcmVzcyI6Ijo6ZmZmZjoyNy42Ny44Ny4xMzEiLCJOYW1lRGV2aWNlIjoidnNtYXJ0IDogTGl2ZSA0IC0gQW5kcm9pZCIsIlRpbWUiOiIyMDIzLTA1LTE1VDA5OjI1OjE0LjM1MFoiLCJBY2Nlc3NQZXJtaXNpb24iOnRydWUsIl9pZCI6IjYzNmNjMjdkZTgyZmJhMjRiMmI3M2RlZiJ9LHsiSWREZXZpY2UiOiJjZGE1Mzg4YzhiOWIxYjM1IiwiSXBBZGRyZXNzIjoiOjpmZmZmOjE0LjIzMi4yMDguMjQxIiwiTmFtZURldmljZSI6InZzbWFydCA6IExpdmUgNCAtIEFuZHJvaWQiLCJUaW1lIjoiMjAyMi0xMS0yNVQwODo1MjowOS4xNTRaIiwiQWNjZXNzUGVybWlzaW9uIjp0cnVlLCJfaWQiOiI2Mzc3NDY1NDZlOWVmYzY0M2ZlZTg1OGMifSx7IklkRGV2aWNlIjoiMjdlNjUwZjVhNGFkMWY1YyIsIklwQWRkcmVzcyI6Ijo6ZmZmZjoxMTguNzAuMTI2LjEzOCIsIk5hbWVEZXZpY2UiOiJMZW5vdm8gOiBMZW5vdm8gVEItWDYwNlggLSBBbmRyb2lkIiwiVGltZSI6IjIwMjItMTEtMTlUMDQ6MTM6NTAuNDc4WiIsIkFjY2Vzc1Blcm1pc2lvbiI6dHJ1ZSwiX2lkIjoiNjM3ODU3ZjVkY2FhNjBmMmY1ZDg4ZTFkIn0seyJJZERldmljZSI6IjZlZTZhMDZkMmUxZjYyNzUiLCJJcEFkZHJlc3MiOiI6OmZmZmY6MTE4LjcwLjEyNi4yMzEiLCJOYW1lRGV2aWNlIjoidnNtYXJ0IDogTGl2ZSA0IC0gQW5kcm9pZCIsIlRpbWUiOiIyMDIyLTEyLTI2VDAxOjM5OjAwLjMwNloiLCJBY2Nlc3NQZXJtaXNpb24iOnRydWUsIl9pZCI6IjYzOTBiYTMwYWVjZjcxOGYyMmQ0YTk2NyJ9LHsiSWREZXZpY2UiOiJERUQyRTYyNi02OUU2LTRCODgtOUQ0MC02OUFEMDJEMEQxMEMiLCJJcEFkZHJlc3MiOiI6OmZmZmY6MTQuMjMyLjIwOC4yNDEiLCJOYW1lRGV2aWNlIjoiaVBob25lIDogaVBob25lIGPhu6dhIEtoYW5oIC0gSW9zIiwiVGltZSI6IjIwMjMtMDEtMTJUMTA6MjE6NTYuNjc2WiIsIkFjY2Vzc1Blcm1pc2lvbiI6dHJ1ZSwiX2lkIjoiNjM5NDMwM2VlZTg1MjgwNTVhOTg0ZTM5In0seyJJZERldmljZSI6IjRiZDM1YjUxMDA2NDYzODkiLCJJcEFkZHJlc3MiOiI6OmZmZmY6MjEwLjI0NS43NS41MSIsIk5hbWVEZXZpY2UiOiJ2c21hcnQgOiBMaXZlIDQgLSBBbmRyb2lkIiwiVGltZSI6IjIwMjMtMDMtMTFUMDQ6MTA6MzguNDAwWiIsIkFjY2Vzc1Blcm1pc2lvbiI6dHJ1ZSwiX2lkIjoiNjQwYjA1MTdjY2MxNzY1MWRhNWU5OWJkIn0seyJJZERldmljZSI6IkNENzY3NDY0LTFDRDItNDA5Qy04NTU2LUMwREYwM0NEOTIwMCIsIklwQWRkcmVzcyI6Ijo6ZmZmZjoyMTAuMjQ1Ljc1LjUxIiwiTmFtZURldmljZSI6ImlQaG9uZSA6IGlQaG9uZSBj4bunYSBLaGFuaCAtIElvcyIsIlRpbWUiOiIyMDIzLTA1LTEwVDEwOjE3OjU3LjIxMVoiLCJBY2Nlc3NQZXJtaXNpb24iOmZhbHNlLCJfaWQiOiI2NDViNWQ3OTM1N2U1M2Q5YjVhZDY2ZWIifSx7IklkRGV2aWNlIjoiMjk5MmQ5Zjk4MGVmNDA3NSIsIklwQWRkcmVzcyI6Ijo6ZmZmZjoyMTAuMjQ1Ljc1LjUxIiwiTmFtZURldmljZSI6InJlYWxtZSA6IFJNWDIyMDUgLSBBbmRyb2lkIiwiVGltZSI6IjIwMjMtMDUtMTFUMDI6NTE6MDMuOTU5WiIsIkFjY2Vzc1Blcm1pc2lvbiI6ZmFsc2UsIl9pZCI6IjY0NWM1ODE3OGUzNWZmZWZlZTQ5YTY4NiJ9XSwicmVtb3ZlU3VnZ2VzIjpbXSwidXNlck5hbWVOb1ZuIjoiQ29uZyB0eSBDbyBwaGFuIFRoYW5oIHRvYW4gSHVuZyBIYSAyIiwiZG91YmxlVmVyaWZ5IjowLCJzdGF0dXMiOiIiLCJub3RpZmljYXRpb25BY2NlcHRPZmZlciI6MSwibm90aWZpY2F0aW9uQWxsb2NhdGlvblJlY2FsbCI6MSwibm90aWZpY2F0aW9uQ2hhbmdlU2FsYXJ5IjoxLCJub3RpZmljYXRpb25Db21tZW50RnJvbVJhb05oYW5oIjoxLCJub3RpZmljYXRpb25Db21tZW50RnJvbVRpbVZpZWMiOjEsIm5vdGlmaWNhdGlvbkRlY2lsaW5lT2ZmZXIiOjEsIm5vdGlmaWNhdGlvbk1pc3NNZXNzYWdlIjoxLCJub3RpZmljYXRpb25OVERFeHBpcmVkUGluIjoxLCJub3RpZmljYXRpb25OVERFeHBpcmVkUmVjcnVpdCI6MSwibm90aWZpY2F0aW9uTlREUG9pbnQiOjEsIm5vdGlmaWNhdGlvblNlbmRDYW5kaWRhdGUiOjEsIm5vdGlmaWNhdGlvblRhZyI6MSwiYWN0aXZlIjowLCJhY2NlcHRNZXNzU3RyYW5nZXIiOjB9LCJzY2FuIjowfSwiaWF0IjoxNjg5NTg2MDI0LCJleHAiOjE2ODk2NzI0MjR9.WR2gphNivkgKjqB6rmEy9rEti9HRVld613P3j6pFCfg'

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

export const PolicyList = async (page:number,pageSize:number): Promise<ApiResponse>=>{
    try {
        const response = await axios.get(`${url}api/hr/administration/listEmpoyePolicy?page=${page}&pageSize=${pageSize}`,{
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
        throw new Error('Failed to update group ')
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
        throw new Error('Failed to update group ')
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

