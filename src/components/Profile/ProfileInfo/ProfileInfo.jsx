import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.content}>
                <img src='https://www.u-f-l.net/images/content/sinij-les-v-belgiji-0(1).jpg' alt={"обложка"}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt={"profile"}/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <p>{props.profile.aboutMe}</p>
            </div>
        </div>
    )


}

export default ProfileInfo;