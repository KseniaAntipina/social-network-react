const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
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
    newMessageBody: '',
}

 const dialogsReducer = (state = initialState,action) => {

     switch (action.type) {
         case UPDATE_NEW_MESSAGE_BODY:
             state.newMessageBody = action.body;
             return state;
         case SEND_MESSAGE:
             state.messages.push({id: 4, message: state.newMessageBody});
             state.newMessageBody = '';
             return state;
         default:
             return state;
     }
}

export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyAC = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body
    }
}

export default dialogsReducer