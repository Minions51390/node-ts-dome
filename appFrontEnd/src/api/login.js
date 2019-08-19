import request from '@/utils/request'

export function login(username, password) {
    return request({
        url: '/auth/login',
        method: 'post',
        data: {
            email:username,
            password:password
        }
    })
}

export function logout() {
    return request({
        url: '/auth/logout',
        method: 'post'
    })
}

export function signUp(email, password,name) {
    return request({
        url: '/auth/signup',
        method: 'post',
        data: {
            email,password,name
        }
    })
}
export function getInfo(uid) {
    return request({
        url: '/v1/user/info',
        method: 'get',
        params: { id:uid }
    })
}


