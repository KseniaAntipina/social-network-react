const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, post: 'how are you', likeCount: 10},
        {id: 2, post: 'nice day', likeCount: 5},
        {id: 3, post: 'yo yo yo', likeCount: 1},
    ],
    newPostText: 'Введите сообщение...',
    profile: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 4, post: state.newPostText, likeCount: 1,}],
                newPostText: ''
            }
        case UPDATE_NEW_POST:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;

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

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
}