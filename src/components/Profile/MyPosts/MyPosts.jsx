import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, Form} from "react-final-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {currentDate} from "../../../utils/helpers";

const MyPosts = (props) => {

    let postsItems = props.posts.map(p => <Post userPhoto={props.profile.photos.large}
                                                userName={props.profile.fullName}
                                                message={p.post} key={p.id}
                                                date={p.date}
                                                likeCount={p.likeCount}/>)

    let addPost = (values) => {
        props.addPost(values.newPostText, currentDate())

    }


    return (
        <>
            <div className={s.submitPostBox}>
                <div className={s.postUserPhoto}>
                    <img src={props.profile.photos.large} alt="user photo"/>
                </div>
                <div className={s.postCreate}>
                    <AddPostForm onSubmit={addPost}/>
                </div>
            </div>
            <div className={s.postsBlock}>
                <div className={s.allPosts}>
                    {postsItems}
                </div>
            </div>
        </>
    )
}

export default MyPosts;

const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)

const AddPostForm = props => {

     return (
        <Form onSubmit={props.onSubmit}>
            {({handleSubmit, form, submitSucceeded, values }) => {
               if (submitSucceeded) {
                form.reset();
                    Object.keys(values).forEach(field => form.resetFieldState(field));
                }
                return (
                <form
                    onSubmit={handleSubmit}
                >
                    <Field name="newPostText"
                           classname="newPostText"
                           component={Textarea}
                           placeholder="Write something here..."
                           validate={composeValidators(required, maxLengthCreator(200))}
                    />
                    <button className={`${s.bthPublishPost} btnDefault`}>Publish</button>

                </form>
            )}}
        </Form>
    )
}