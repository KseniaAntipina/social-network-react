import React from 'react';
import {addPostAC, updateNewPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {sendMessageAC, updateNewMessageBodyAC} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPost: (newText) => {dispatch(updateNewPostAC(newText))},
        addPost: () => {dispatch(addPostAC())}
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;