import {profileAPI} from "../api/api";
import {FORM_ERROR} from "final-form";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


let initialState = {
    posts: [
        {id: 1, post: 'to to dooo', likeCount: 10, date: '11.09.2021'},
        {id: 2, post: 'nice day', likeCount: 5, date: '14.07.2021'},
        {id: 3, post: 'first post', likeCount: 1, date: '24.05.2021'},
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
                posts: [{id: state.posts.length + 1, post: action.newPostText, likeCount: 0, date: action.date}, ...state.posts],
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
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state;

    }
}

export default profileReducer

export const addPostAC = (newPostText, date) => {
    return {
        type: ADD_POST, newPostText, date
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

export const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCESS, photos
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
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";

        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
        else {
            return  Promise.reject({message})
        }

        // вывести ошибку задиспачить
        //console.log(response.data.messages)

    }
}

export const savePhoto = (file) => {
    return async (dispatch) => {
        let response = await profileAPI.savePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos))
        }
    }
}

export const saveProfile = (profileData) => async (dispatch) => {

    const response = await profileAPI.saveProfile(profileData);
    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";

    if (response.data.resultCode === 0) {
        dispatch(setUserProfile(profileData))

    } else {
        return Promise.reject({[FORM_ERROR]: message})
    }
}