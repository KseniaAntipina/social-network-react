import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostAC, updateNewPostAC} from "../../../redux/profile-reducer";


const  MyPosts = (props) => {

    let newPostElement = React.createRef(); // создаем ссылку на элемент

    let postsItems = props.posts.map( p => <Post message={p.post} key={p.id} likeCount={p.likeCount}/>)

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let newText = newPostElement.current.value;
        props.updateNewPost(newText)
    }

    return  (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div><textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} /></div>
                    <div><button onClick={addPost}>add post</button></div>
                </div>
                <div className={s.posts}>
                    {postsItems}
                </div>
            </div>
        )
}

export default MyPosts;