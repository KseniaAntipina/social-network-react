import React from "react";
import s from './Users.module.css'
import userPhoto from './../../assets/images/user.png'
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, follow}) => {

    return (
            <div key={user.id} className={s.userItem}>
                <NavLink to={'/profile/' + user.id} className={s.userPhoto}>
                    <img src={user.photos.small ? user.photos.small : userPhoto} className={s.userAva}
                         alt={'аватар'}/>
                </NavLink>
                <NavLink to={'/profile/' + user.id} className={s.linkToUser}>
                    <div>{user.name}</div>
                </NavLink>
                {
                    user.followed ?
                        <button className="btnDefault" disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id, user.followed)

                        }}>unfollow</button>
                        :
                        <button className="btnDefault" disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id, user.followed)

                        }}>follow</button>
                }
                <div className={s.userStatus}>{user.status}</div>
            </div>
    )
}

export default User