import {usersAPI} from "../api/api";
import {toggleIsFetching} from "./common-reducer";

const ADD_POST = 'ADD_POST-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-UPDATE_NEW_POST_TEXT-POST-TEXT';
const SET_PROFILE_DATA = 'SET_PROFILE_DATA';

let initialState = {
    profileData: null,
    newPostText: '',
    posts: [{id: 1, text: 'my first post! hello there!!!!!!!', likesCount: 10},
        {id: 2, text: 'my second post! hello there!!!!!!!', likesCount: 4},
        {id: 3, text: 'my third (3) post! hello there!!!!!!!', likesCount: 25}]
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length,
                text: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
            return {...stateCopy};
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_PROFILE_DATA: {
            return {
                ...state,
                profileData: action.profileData
            }
        }
        default:
            return state;
    }
};

export const addPostCreator = () => ({type: ADD_POST});
export const updateNewPostTextCreator = (newText) => ({type: UPDATE_NEW_POST_TEXT, newText});
export const setProfileData = (profileData) => ({type: SET_PROFILE_DATA, profileData});

export const getUserProfile = (userId) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getProfile(userId)
        .then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setProfileData(data));
        });
};

export default profileReducer;

