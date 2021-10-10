import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../Preloader/Preloader";

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <>
        <ProfileInfo savePhoto={props.savePhoto}
                     saveProfile={props.saveProfile}
                     profile={props.profile}
                     status={props.status}
                     updateStatus={props.updateStatus}
                     isOwner={props.isOwner}/>
        <MyPostsContainer profile={props.profile}/>
    </>
}

export default Profile;