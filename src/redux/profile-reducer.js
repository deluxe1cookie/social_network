import {profileAPI} from '../api/api';
import {toggleIsFetching} from './common-reducer';

const ADD_POST = 'social_network/profile/ADD_POST-POST';
const SET_PROFILE_DATA = 'social_network/profile/SET_PROFILE_DATA';
const SET_STATUS = 'social_network/profile/SET_STATUS';
const DELETE_POST = 'social_network/profile/DELETE_POST';
const UPLOAD_PHOTO_SUCCESS = 'social_network/profile/UPLOAD_PHOTO_SUCCESS';

export const initialState = {
    profileData: null,
    status: '',
    posts: [{id: 1, text: 'my first post! hello there!!!!!!!', likesCount: 10},
        {id: 2, text: 'my second post! hello there!!!!!!!', likesCount: 4},
        {id: 3, text: 'my third (3) post! hello there!!!!!!!', likesCount: 25}],
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length,
                text: action.newPostBody,
                likesCount: 0
            };

            let stateCopy = {
                ...state,
                posts: [...state.posts, newPost]
            };

            return {...stateCopy};
        }
        case SET_PROFILE_DATA: {
            return {
                ...state,
                profileData: action.profileData
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case DELETE_POST:
            return {
                ...state, posts: state.posts.filter(p => p.id !== action.postId)
            };
        case UPLOAD_PHOTO_SUCCESS:
            return {
                ...state, profileData: {...state.profileData, photos: action.photos}
            };
        default:
            return state;
    }
};

export const addPost = (newPostBody) => ({type: ADD_POST, newPostBody});
export const deletePost = (postId) => ({type: DELETE_POST, postId});

const setProfileData = (profileData) => ({type: SET_PROFILE_DATA, profileData});
const setStatus = (status) => ({type: SET_STATUS, status});
const uploadPhotoSuccess = (photos) => ({type: UPLOAD_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let response = await profileAPI.getProfile(userId);
    dispatch(toggleIsFetching(false));
    dispatch(setProfileData(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export const uploadPhoto = (file) => async (dispatch) => {
    let response = await profileAPI.uploadPhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(uploadPhotoSuccess(response.data.data.photos));
    }
};

export default profileReducer;