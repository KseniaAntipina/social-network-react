import React from "react";
import {Field, Form} from "react-final-form";
import {Input, Textarea} from "../../common/FormsControls/FormsControls";
import s from "./ProfileInfo.module.css";


const ProfileDataForm = ({ onSubmit, profile}) => {

    return (
        <Form onSubmit={onSubmit} initialValues={profile}>
            {({handleSubmit, submitError}) => (
                <form onSubmit={handleSubmit}>
                    <button className={`${s.bthEditProfile} btnDefault`} type="submit">Save</button>
                    <div className={s.profileInfoItem}>
                        <Field name="fullName" component={Input} placeholder="full name" />
                    </div>
                    <div className={s.profileInfoItem}>
                        <span>looking for a job</span>
                        <span style={{display: 'inline-block'}}><Field component={Input} name="lookingForAJob" type={"checkbox"}/></span>
                    </div>
                    <div className={s.profileInfoItem}>
                        <p>My skills:</p> <Field name="lookingForAJobDescription" component={Textarea} placeholder="my skills"/>
                    </div>
                    <div className={s.profileInfoItem}>
                        <p>About me:</p> <Field name="aboutMe" component={Textarea} placeholder="about me"/>
                    </div>
                    <div>{submitError && <div>{submitError}</div>}</div>
                    <div className={s.profileInfoItem}>
                        <p>Contacts:</p>
                        {Object.keys(profile.contacts).map(key => {
                        return <div key={key} className={s.profileInfoContactLink}>
                            <p> {key}: </p>  <Field  component={Input} name={`contacts.${[key]}`}/>
                        </div>
                    })}
                    </div>
                </form>
            )}
        </Form>
    )
}


export default ProfileDataForm