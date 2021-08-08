import React from 'react';
import {addPostAC, updateNewPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../storeContext";


const MyPostsContainer = (props) => {

    return  <StoreContext.Consumer>
            { store => {
                let state = store.getState()
                let addPost = () => {
                    store.dispatch(addPostAC())
                }

                let onPostChange = (newText) => {
                    store.dispatch(updateNewPostAC(newText))
                }

                return <MyPosts updateNewPost={onPostChange}
                                addPost={addPost}
                                posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText}/>
            }
        }
        </StoreContext.Consumer>
}

export default MyPostsContainer;