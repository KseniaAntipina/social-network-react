import React, {useEffect, useState} from 'react'
import s from './ProfileInfo.module.css'

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    const [errorSubmit, setErrorSubmit] = useState(null);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);


    const deActivateEditMode = () => {
       return props.updateStatus(status)
            .then(() => {
                setEditMode(false);
                setErrorSubmit(null)
            })
            .catch(() => {
               return setErrorSubmit('Maximum message length 300 characters')
            })
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <>
            {!editMode &&
            <div onClick={() => setEditMode(true)} className={s.status}>
                {props.status || "change status..."}
            </div>
            }
            {editMode &&
            <div className={s.status}>
                <input autoFocus={true}
                       onBlur={deActivateEditMode}
                       onChange={onStatusChange}
                       value={status}
                />

            </div>
            }
            <div className={s.statusError}>{errorSubmit}</div>
        </>
    )
}

export default ProfileStatusWithHooks