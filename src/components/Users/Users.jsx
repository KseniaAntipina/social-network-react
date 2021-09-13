import React from "react";
import s from './Users.module.css'
import userPhoto from './../../assets/images/user.png'
import {NavLink} from "react-router-dom";

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
                                     props.follow(u.id, u.followed)

                                }}>unfollow</button>
                                :
                                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.follow(u.id, u.followed)

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