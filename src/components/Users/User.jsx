import React from "react";
import s from './Users.module.css'
import userPhoto from './../../assets/images/user.png'
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, follow}) => {

    return (
            <div key={user.id} className={s.userItem}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small ? user.photos.small : userPhoto} className={s.userAva}
                         alt={'аватар'}/>
                </NavLink>
                {
                    user.followed ?
                        <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id, user.followed)

                        }}>unfollow</button>
                        :
                        <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id, user.followed)

                        }}>follow</button>
                }
                <NavLink to={'/profile/' + user.id}>
                    <div>{user.name}</div>
                </NavLink>
                <div>{user.status}</div>
            </div>
    )
}

export default User