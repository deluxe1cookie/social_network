import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '2e403f5c-5d3b-4ee4-a662-100f73be85da'
    }
});

export const usersAPI = {
    getUsers(page = 1, pageSize = 5) {
        return instance.get(`users?page=${page}&count=${pageSize}`);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`);
    }
};

export const authAPI = {
    setAuthUserData() {
        return instance.get('auth/me');
    },
    login(email, password, rememberMe) {
        return instance.post('auth/login', {email, password, rememberMe});
    },
    logout() {
        return instance.delete('auth/login');
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status});
    }
};