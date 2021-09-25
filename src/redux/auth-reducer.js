import * as axios from "axios";
import {authAPI} from "../api/api";
import {FORM_ERROR} from "final-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export default authReducer

export const setAuthUserData = (userId, email, login, isAuth) => {
    return {type: SET_USER_DATA, payload: {userId, email, login, isAuth}}
}

export const getAuthUser = () => (dispatch) => {
    return authAPI.auth()
        .then(response => {
        if (response.data.resultCode === 0) {
            let {id,login, email} = response.data.data
            dispatch(setAuthUserData(id, login, email,  true))
        }
    })
}

export const login = (email, password, rememberMe) => {
    return async  (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe)
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
            if (response.data.resultCode === 0) {
                dispatch(getAuthUser())
            }
            else {
                  return {[FORM_ERROR]: message }
            }
        }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
    }
}
