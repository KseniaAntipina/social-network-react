import React from 'react';
import s from './Post.module.css'

const Post = (props) => {

    return  (
        <div className={s.item}>
            <img className={s.ava} src={props.userPhoto} alt="кот"/>
            <p className={s.message}>{props.message}</p>
            <img src="https://img.icons8.com/fluent/48/000000/like.png" className={s.like} alt={"like"}/>
            <p>{props.likeCount}</p>
        </div>
    )
}

export default Post;