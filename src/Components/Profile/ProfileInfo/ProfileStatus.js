import React, {useEffect, useState} from "react";

const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    };
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };
    const onKeyPress = (e) => {
        if (e.key === 'Enter') deactivateEditMode();
    };

    const updateStatus = (e) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{status}</span>
            </div>
            }

            {editMode &&
            <div>
                <input autoFocus={true} onBlur={deactivateEditMode} type='text'
                       value={status} onChange={updateStatus} onKeyPress={onKeyPress}/>
            </div>
            }
        </div>
    )
};

export default ProfileStatus;