import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../../storeContext";


const DialogsContainer = () => {

    return <StoreContext.Consumer>
            { store => {

                let state = store.getState()

                let addMessage = () => {
                    store.dispatch(sendMessageAC())
                }
                let updateMessage = (text) => {
                    store.dispatch(updateNewMessageBodyAC(text))
                }
                return <Dialogs updateNewMessageBody={updateMessage}
                                sendMessage={addMessage}
                                store={state.messagesPage}/>
            }
        }
        </StoreContext.Consumer>
}

export default DialogsContainer;