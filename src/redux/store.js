import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'how are you', likeCount: 10},
                {id: 2, post: 'nice day', likeCount: 5},
                {id: 3, post: 'yo yo yo', likeCount: 1},
            ],
            newPostText: 'Введите сообщение...'
        },
        messagesPage: {
            messages: [
                {id: 1, message: 'yo'},
                {id: 2, message: 'yo'},
                {id: 3, message: 'yo'},
            ],
            dialogs: [
                {id: 1, name: 'Мама'},
                {id: 2, name: 'Папа'},
                {id: 3, name: 'Саша'},
            ],
            newMessageBody: '',
        },
    },
    _callSubscriber() {
        console.log('state changed')
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);
    }

}


export default store








