const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: action.newMessageBody}]
            };
        default:
            return state;
    }
}

export const sendMessageAC = (newMessageBody) => {
    return {
        type: SEND_MESSAGE, newMessageBody
    }
}

export default dialogsReducer