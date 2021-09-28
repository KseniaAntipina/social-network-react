import React, {useEffect, useState} from 'react'

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);


    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <>
            {!editMode &&
            <div>
                <span onClick={() => setEditMode(true)}>{props.status || "change status..."}</span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true}
                       onBlur={deActivateEditMode}
                       onChange={onStatusChange}
                       value={status}
                />
            </div>
            }
        </>
    )
}

export default ProfileStatusWithHooks