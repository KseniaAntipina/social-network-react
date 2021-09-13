import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, Form} from "react-final-form";


const  MyPosts = (props) => {

    let postsItems = props.posts.map( p => <Post message={p.post} key={p.id} likeCount={p.likeCount}/>)

    let addPost = (values) => {
        props.addPost(values.newPostText)
    }

    return  (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <AddPostForm onSubmit={addPost}/>
                </div>
                <div className={s.posts}>
                    {postsItems}
                </div>
            </div>
        )
}

export default MyPosts;


const AddPostForm = props => {

    return (
        <Form onSubmit={props.onSubmit}>
            {({ handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name="newPostText" component="textarea" placeholder="Enter your post..." />
                    </div>
                    <button>publish</button>
                </form>
            )}
        </Form>
    )
}