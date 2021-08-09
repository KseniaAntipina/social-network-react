import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let messagesPage = props.messagesPage

    let dialogsItems = messagesPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesItems = messagesPage.messages.map(m => <Message message={m.message}/>)

    let newMessage = React.createRef(); // создаем ссылку на элемент

    let addMessage = () => {
        props.sendMessage()
    }

    let updateMessage = () => {
        let text = newMessage.current.value;
        props.updateNewMessageBody(text)
    }


    return (
        <>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsItems}
                </div>
                <div className={s.messages}>
                    {messagesItems}
                </div>
            </div>
            <div className={s.addMessage}>
                <div><textarea ref={newMessage} onChange={updateMessage} value={messagesPage.newMessageBody}/></div>
                <div>
                    <button onClick={addMessage}>Отправить</button>
                </div>
            </div>

        </>
    )
}


export default Dialogs;