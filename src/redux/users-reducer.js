import {toggleIsFetching} from './common-reducer';
import {usersAPI} from '../api/api';

const FOLLOW_SUCCESS = 'social_network/users/FOLLOW_SUCCESS';
const UNFOLLOW_SUCCESS = 'social_network/users/UNFOLLOW_SUCCESS';
const SET_USERS = 'social_network/users/SET_USERS';
const SET_CURRENT_PAGE = 'social_network/users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'social_network/users/SET_TOTAL_USERS_COUNT';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'social_network/users/TOGGLE_FOLLOWING_IN_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_SUCCESS:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            };
        case UNFOLLOW_SUCCESS:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {...state, users: [...action.users]};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.pageNumber};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount};
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
};

export const followSuccess = (userID) => ({type: FOLLOW_SUCCESS, userID});
export const unfollowSuccess = (userID) => ({type: UNFOLLOW_SUCCESS, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleFollowingInProgress = (isFetching, userId) => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    isFetching, userId
});

export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let response = await usersAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false));

    dispatch(setUsers(response.data.items));
    dispatch(setTotalUsersCount(response.data.totalCount));
    dispatch(setCurrentPage(page));
};

export const follow = (userId) => async (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));
    let response = await usersAPI.follow(userId);
    if (response.data.resultCode === 0) {
        dispatch(followSuccess(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId));
};

export const unfollow = (userId) => async (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));
    let response = await usersAPI.unfollow(userId);
    if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId));
};

export default usersReducer;

