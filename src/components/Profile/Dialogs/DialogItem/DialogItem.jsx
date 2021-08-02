import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Avatar from './../../../../images/avatar.png'

const DialogItem = (props) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <img src={Avatar} alt="аватар" className={s.avatar}/>
            <NavLink to={`${'/dialogs/'}${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;