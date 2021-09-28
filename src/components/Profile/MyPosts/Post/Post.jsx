import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return  (
        <div className={s.item}>
            <img className={s.ava} src="https://i.pinimg.com/originals/bf/55/56/bf5556f2a8278d67832d41e2c1922bc3.jpg" alt="кот"/>
            <p className={s.message}>{props.message}</p>
            <img src="https://img.icons8.com/fluent/48/000000/like.png" className={s.like} alt={"like"}/>
            <p>{props.likeCount}</p>
        </div>
    )
}

export default Post;