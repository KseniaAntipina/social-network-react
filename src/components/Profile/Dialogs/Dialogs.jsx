import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsItems = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>)
    let messagesItems = props.state.messages.map(m => <Message message={m.message} /> )

    let newMessage = React.createRef(); // создаем ссылку на элемент

    let addMessage = () => {
        let text = newMessage.current.value;
        alert(text)
    }


    return  (
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
                <div><textarea ref={newMessage}/></div>
                <div><button onClick={addMessage}>Отправить</button></div>
            </div>

        </>
    )
}

export default Dialogs;