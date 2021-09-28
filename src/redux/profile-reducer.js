import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    posts: [
        {id: 1, post: 'how are you', likeCount: 10},
        {id: 2, post: 'nice day', likeCount: 5},
        {id: 3, post: 'yo yo yo', likeCount: 1},
    ],
    newPostText: 'Введите сообщение...',
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 4, post: action.newPostText, likeCount: 1,}],
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.id)
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
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;

    }
}

export default profileReducer

export const addPostAC = (newPostText) => {
    return {
        type: ADD_POST, newPostText
    }
}

export const deletePostAC = (id) => {
    return {
        type: DELETE_POST, id
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS, status
    }
}

export const getProfile = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(response.data))
    }
}

export const getStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data))
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}