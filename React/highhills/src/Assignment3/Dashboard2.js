import React from 'react'
import Profile from './Profile'

function Dashboard2(props) {
    return (
        <div>
            
            <Profile
            profilename = {props.myname}
            profileage = {props.myage}
            />
        </div>
    )
}


export default Dashboard2;