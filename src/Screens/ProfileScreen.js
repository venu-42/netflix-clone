import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser,logout } from '../features/userSlice'
import Nav from '../Nav'
import './ProfileScreen.css'
import {auth} from '../firebase';

function ProfileScreen() {
    const user=useSelector(selectUser);
    const dispatch=useDispatch();
    
    return (
        <div>
            <Nav/>
            <div className="details__section">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="logo"/>
                <div className="side__section">
                    <p>Email</p><p className='user__email'>{user.email}</p>
                    <button className='submitBtn' onClick={()=>auth.signOut()}>Sign out</button>
                </div>
            </div>
            <div style={{height:'100vh'}} />
        </div>
    )
}

export default ProfileScreen
