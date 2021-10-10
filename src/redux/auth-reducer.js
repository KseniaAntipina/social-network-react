import {authAPI, securityAPI} from "../api/api";
import {FORM_ERROR} from "final-form";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_SUCCESS = 'GET_CAPTCHA_SUCCESS';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_SUCCESS:
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

export const getCaptchaSuccess = (captchaUrl) => {
    return {type: GET_CAPTCHA_SUCCESS, payload: {captchaUrl}}
}

export const getAuthUser = () => {
    return async (dispatch) => {
        let response = await authAPI.auth()
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data
            dispatch(setAuthUserData(id, login, email, true))
        }
    }
}

export const login = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe, captcha)
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        if (response.data.resultCode === 0) {
            dispatch(getAuthUser())
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptcha())
            }
            return {[FORM_ERROR]: message}
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        let response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
}

export const getCaptcha = () => {
    return async (dispatch) => {
        let response = await securityAPI.getCaptcha()
        const captcha = response.data.url
        dispatch(getCaptchaSuccess(captcha))
    }
}
