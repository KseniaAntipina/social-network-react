const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
    posts: [
        {id: 1, post: 'how are you', likeCount: 10},
        {id: 2, post: 'nice day', likeCount: 5},
        {id: 3, post: 'yo yo yo', likeCount: 1},
    ],
    newPostText: 'Введите сообщение...'
}

const profileReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                post: state.newPostText,
                likeCount: 1,
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy;
        }
        case UPDATE_NEW_POST: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default: {
            let stateCopy = {...state};
            return stateCopy;
        }
    }
}

export default profileReducer

export const addPostAC = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostAC = (newText) => {
    return {
        type: UPDATE_NEW_POST, newText
    }
}