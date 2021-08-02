const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

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
        }
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 4,
                post: this._state.profilePage.newPostText,
                likeCount: 1,
            };

            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }

}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPost = (newText) => {
    return {
        type: UPDATE_NEW_POST, newText
    }
}

export default store








