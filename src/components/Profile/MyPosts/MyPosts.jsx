import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, Form} from "react-final-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = (props) => {

    let postsItems = props.posts.map(p => <Post userPhoto={props.profile.photos.large} message={p.post} key={p.id}
                                                likeCount={p.likeCount}/>)

    let addPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostForm onSubmit={addPost}/>
            <div className={s.posts}>
                {postsItems}
            </div>
        </div>
    )
}

export default MyPosts;

const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)

const AddPostForm = props => {

    return (
        <Form onSubmit={props.onSubmit}>
            {({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <Field name="newPostText"
                           component={Textarea}
                           placeholder="Enter your post..."
                           validate={composeValidators(required, maxLengthCreator(30))}
                    />
                    <button className={`${s.bthPublishPost} btnDefault`}>Publish</button>
                </form>
            )}
        </Form>
    )
}