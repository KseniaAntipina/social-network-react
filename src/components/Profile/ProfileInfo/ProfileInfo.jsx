import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return <div>
        <div className={s.content}>
            <img src='https://www.u-f-l.net/images/content/sinij-les-v-belgiji-0(1).jpg' />
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>
    </div>
}

export default ProfileInfo;