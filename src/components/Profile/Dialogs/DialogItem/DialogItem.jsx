import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Avatar from './../../../../assets/images/user.png'

const DialogItemPreview = (props) => {
    return (
        <NavLink to={`${'/dialogs/'}${props.id}`} className={s.dialogPreview}>

            <div className={`${s.dialogImg} ${s.active}`}>
                <img src={Avatar} alt="аватар" className={s.avatar}/>
            </div>
            <div className={s.dialogContent}>
                <div className={s.dialogName}>{props.name}</div>
                <div className={s.dialogContentText}>{props.message}</div>
            </div>

        </NavLink>
    )
}

export default DialogItemPreview;