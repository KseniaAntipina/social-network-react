import {addPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText, date) => {dispatch(addPostAC(newPostText, date))}
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;