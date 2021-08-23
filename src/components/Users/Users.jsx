import React from "react";
import s from './Users.module.css'
import userPhoto from './../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {toggleFollowingProgress} from "../../redux/users-reducer";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div className={s.pagination}>
                {pages.map(p => {
                    return <span onClick={() => props.onPageChanged(p)}
                                 className={props.currentPage === p ? `${s.selectedPage} ${s.page}` : s.page}>{p}</span>
                })}
            </div>
            {
                props.users.map(u =>
                    <div key={u.id} className={s.userItem}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small ? u.photos.small : userPhoto} className={s.userAva}
                                 alt={'аватар'}/>
                        </NavLink>
                        {
                            u.followed ?
                                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id)
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "6424dc6d-8bde-4394-8237-e0e76a8e61d1"
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleFollowingProgress(false, u.id)
                                    })

                                }}>unfollow</button>
                                :
                                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id)
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "6424dc6d-8bde-4394-8237-e0e76a8e61d1"
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleFollowingProgress(false, u.id)
                                    })

                                }}>follow</button>
                        }
                        <NavLink to={'/profile/' + u.id}>
                            <div>{u.name}</div>
                        </NavLink>
                        <div>{u.status}</div>
                    </div>
                )
            }
        </div>
    )
}

export default Users