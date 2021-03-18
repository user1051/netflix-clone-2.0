import { Button } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import { auth } from './firebase'
import Nav from './Nav'
import PlansScreen from './PlansScreen'
import './ProfileScreen.css' 

function ProfileScreen() {

    const user = useSelector(selectUser)

    return (
        <div className="profileScreen">
            <Nav/>
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                 <div className="profileScreen__info">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLnbQkuteyApIngCTq6zbyUN3bcfzan1VaLQ&usqp=CAU" alt=""/>
                <div className="profileScreen__details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen__plans">
                        <h3>Plans</h3>
                        <PlansScreen/>
                        <Button onClick={() => auth.signOut()}>Sign Out</Button>
                    </div>
                </div>
            </div>
            </div>
           
        </div>
    )
}

export default ProfileScreen
