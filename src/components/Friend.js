import React from 'react'
debugger
export default function Friend(props) {
    console.log(props.friend);
    const friend = props.friend;
    return (
        <div>
            <img className="profile-pic" src={friend.avatarmedium}></img>
            <p>{friend.personaname}</p>
        </div>
    )
}
