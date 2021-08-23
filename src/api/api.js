import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "6424dc6d-8bde-4394-8237-e0e76a8e61d1"
    }
})

export const usersApi = {
    getUsers(currentPage = 1,pageSize = 10 ) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true,
        }).then(response => response.data)
    }
}

// export const getUsers = (currentPage = 1,pageSize = 10 ) => {
//    return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
//         withCredentials: true,
//     }).then(response => response.data)
// }

