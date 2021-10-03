import React from "react";
import s from './Users.module.css'
import Pagination from "../common/Pagination/Pagination";
import User from "./User";

const Users = (props) => {

    return (
        <div>
            <Pagination totalItemsCount={props.totalUsersCount}
                        pageSize={props.pageSize}
                        currentPage={props.currentPage}
                        onPageChanged={props.onPageChanged}/>
            {
                props.users.map(u => <User key={u.id}
                                           user={u}
                                           follow={props.follow}
                                           followingInProgress={props.followingInProgress}/>)
            }
        </div>
    )
}

export default Users