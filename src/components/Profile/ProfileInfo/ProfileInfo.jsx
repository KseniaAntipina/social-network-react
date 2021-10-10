import React, {useRef, useState} from 'react';
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from './../../../assets/images/user.png'
import ProfileDataForm from "./ProfileDataForm";
import imageCover from './../../../assets/images/profile-cover.jpg'

const ProfileInfo = (props) => {

    const [editMode, setEditMode] = useState(false);
    const inputFile = useRef(null)
    const handleClick = (e) => {
        inputFile.current.click ();
    };
    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        return props.saveProfile(formData)
            .then(() => {
                setEditMode(false);
            })
            .catch(err => err)
    }

    return (
        <>
            <div className={s.content}>
                <div className={s.wrapContentImageCover}>
                    <img src={imageCover} alt={"обложка"} className={s.contentImageCover}/>
                </div>
                <div className={s.contentAvatarWrap}>
                    <div className={s.contentAvatar}>
                        <img src={props.profile.photos.large || userPhoto} alt={"profile"} className={s.userPhoto}/>
                        {props.isOwner &&
                        <div className={s.changePhotoBlock}>
                            <input ref={inputFile} type={"file"} onChange={mainPhotoSelected} className={s.ownerAvatarEditor}/>
                            <div onClick={handleClick} className={s.btnChangeUserPhoto}>Change photo</div>
                        </div>
                        }
                    </div>
                </div>
                <h1 className={s.userName}>{props.profile.fullName}</h1>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>

            <div className={s.descriptionBlock}>
                {
                    editMode
                        ? <ProfileDataForm onSubmit={onSubmit} profile={props.profile} initialValues={props.profile}/>
                        : <ProfileData profile={props.profile} isOwner={props.isOwner}
                                       editModeOn={() => setEditMode(true)}/>
                }
            </div>
        </>
    )
}

const ProfileData = ({profile, isOwner, editModeOn}) => {
    return (
        <div className={s.profileInfo}>
            {isOwner && <button onClick={editModeOn} className={`${s.bthEditProfile} btnDefault`}>Edit profile</button>}
            <div className={s.profileInfoItem}>
                <span>Looking for a job:</span> {profile.lookingForAJob ? "yes" : "no"}
            </div>
            <div className={s.profileInfoItem}>
                 <span>My skills: </span> {profile.lookingForAJobDescription}
            </div>
            <div className={s.profileInfoItem}>
                 <span>About me: </span> {profile.aboutMe}
            </div>
            <div className={s.profileInfoItem}>
                 <p>Contacts: </p>
                {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return <>
        <div className={s.profileInfoContactLink}>{contactTitle}: {contactValue}  </div>
    </>
}


export default ProfileInfo;