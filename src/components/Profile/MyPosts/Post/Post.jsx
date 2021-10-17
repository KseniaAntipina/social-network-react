import React from 'react';
import s from './Post.module.css'

const Post = (props) => {

    return (
            <div className={s.postItem}>
                <div className={s.postHeader}>
                    <img className={s.ava} src={props.userPhoto} alt="фото пользователя"/>
                    <div className={s.postHeaderInfo}>
                        <span className={s.postAuthor}>{props.userName}</span>
                        <span className={s.postDate}>{props.date}</span>
                    </div>
                </div>
                <div className={s.postContent}>
                    <p className={s.message}>{props.message}</p>
                </div>
                <div className={s.postLike}>
                    <img src="https://img.icons8.com/fluent/48/000000/like.png" className={s.like} alt={"like"}/>
                    <span>{props.likeCount}</span>
                </div>
            </div>

    )
}

export default Post;