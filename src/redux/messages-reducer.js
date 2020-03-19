const SEND_MESSAGE = 'social_network/messages/SEND-MESSAGE';

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
    ]
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            state.messages.push({id: 6, text: body, yours: true});
            return Object.assign({}, state);
        default:
            return state;
    }
};

export const sendMessage = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default messagesReducer;