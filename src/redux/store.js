import React from "react";
import profileReducer from "./profile-reducer.js";
import sidebarReducer from "./sidebar-reducer.js";
import {dialogsReducer} from "./dialogs-reducer.js";

const store = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [{id: 1, text: 'my first post! hello there!!!!!!!', likesCount: 10},
                {id: 2, text: 'my second post! hello there!!!!!!!', likesCount: 4},
                {id: 3, text: 'my third (3) post! hello there!!!!!!!', likesCount: 25}]
        },
        messagesPage: {
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
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('asdasdas');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);

        this._callSubscriber(this._state);
    }
};

export default store;
window.store = store;

