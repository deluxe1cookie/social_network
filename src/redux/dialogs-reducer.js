const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Kolya'},
        {id: 3, name: 'Igor'},
        {id: 4, name: 'Olya'},
        {id: 5, name: 'Masha'},
        {id: 6, name: 'Angelika'}
    ],
    messages: [
        {id: 1, text: 'Hi!', yours: true},
        {id: 2, text: 'Hello', yours: false},
        {id: 3, text: 'How are you?', yours: true},
        {id: 4, text: 'I\'m fine thanks. What about you?', yours: false},
        {id: 5, text: 'BAD :(', yours: true},
        {id: 6, text: 'Why so?', yours: false}
    ],
    newMessageBody: ''
};

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return Object.assign({}, state);
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, text: body, yours: true});
            return Object.assign({}, state);
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
});
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
});

export default dialogsReducer;