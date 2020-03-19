import profileReducer, {addPost, deletePost, initialState} from './profile-reducer';

it('length of posts must be 5', () => {
    let action = addPost('asdasdasd');

    let newState = profileReducer(initialState, action);

    expect(newState.posts.length).toBe(4);
});

it('length of posts must be decrement after deleting post', () => {
    let action = deletePost(1);

    let newState = profileReducer(initialState, action);

    expect(newState.posts.length).toBe(2);
});

