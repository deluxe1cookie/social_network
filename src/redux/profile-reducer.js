import {profileAPI} from '../api/api';
import {toggleIsFetching} from './common-reducer';

const ADD_POST = 'social_network/profile/ADD_POST-POST';
const SET_PROFILE_DATA = 'social_network/profile/SET_PROFILE_DATA';
const SET_STATUS = 'social_network/profile/SET_STATUS';
const DELETE_POST = 'social_network/profile/DELETE_POST';

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

        default:
            return state;
    }
};

export const addPost = (newPostBody) => ({type: ADD_POST, newPostBody});
const setProfileData = (profileData) => ({type: SET_PROFILE_DATA, profileData});
const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});

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

export default profileReducer;