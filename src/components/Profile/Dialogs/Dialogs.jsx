import React, {useState} from 'react';
import s from './Dialogs.module.css'
import DialogItemPreview from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, Form} from "react-final-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const Dialogs = (props) => {


    let messagesPage = props.messagesPage
    let dialogsItems = messagesPage.dialogs.map(d =>
        <DialogItemPreview
        name={d.name}
        id={d.id}
        message={d.message}
        />)


   // let messagesItems = messagesPage.messages.map(m => <Message message={m.message}/>)


    /*let addMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }*/

    /*if (!props.isAuth) return <Redirect to={"/login"}/>*/

    return (
        <>
            <div className={s.dialogs}>
                {dialogsItems}
            </div>
            {/*<div className={s.addMessage}>
                <AddMessageForm onSubmit={addMessage}/>
            </div>*/}

        </>
    )
}


export default Dialogs;

const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)


const AddMessageForm = props => {

    return (
        <Form
            onSubmit={props.onSubmit}>
            {({ handleSubmit, form, submitSucceeded, values}) => {
                if (submitSucceeded) {
                form.reset();
                Object.keys(values).forEach(field => form.resetFieldState(field));
            }
                return (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name="newMessageBody"
                           component={Textarea}
                           validate={composeValidators(required, maxLengthCreator(30))}
                           placeholder="Enter your message..." />
                </div>
                <button>send</button>

            </form>
            )}}
        </Form>
    )
}