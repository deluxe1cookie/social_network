import {authAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

const SET_AUTH_USER_DATA = 'social_network/auth/SET_AUTH_USER_DATA';

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

const setAuthUserData = (userId, login, email, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    payload: {userId, login, email, isAuth}
});

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.setAuthUserData();

    if (response.data.resultCode === 0) {
        const {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, login, email, true));
    }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        let errorMessage = (response.data.messages.length > 0) ? response.data.messages[0] : '';
        dispatch(stopSubmit('login', {_error: errorMessage}));
    }
};

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export default authReducer;