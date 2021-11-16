import React from "react";
import Pagination from "../common/Pagination/Pagination";
import User from "./User";
import s from './Users.module.css'

const Users = (props) => {

    return (
        <div>
            <Pagination totalItemsCount={props.totalUsersCount}
                        pageSize={props.pageSize}
                        currentPage={props.currentPage}
                        onPageChanged={props.onPageChanged}/>
            <div className={s.usersWrap}>
                {
                    props.users.map(u => <User key={u.id}
                                               user={u}
                                               follow={props.follow}
                                               followingInProgress={props.followingInProgress}/>)
                }
            </div>
        </div>
    )
}

export default Users