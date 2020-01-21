import {authAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                userId: action.data.id,
                login: action.data.login,
                email: action.data.email,
                isAuth: true
            }
        }
        default:
            return state;

    }
};

export const setAuthUserData = (data) => ({type: SET_AUTH_USER_DATA, data});
export const getAuthUserData = () => (dispatch) => {
    authAPI.setAuthUserData().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(data.data));
        }
    })
};

export default authReducer;