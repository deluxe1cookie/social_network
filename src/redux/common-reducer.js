const TOGGLE_IS_FETCHING = 'social_network/common/TOGGLE_IS_FETCHING';

let initialState = {
    isFetching: false
};

const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching};
        }
        default:
            return state;
    }
};

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default commonReducer;