import React, { useState } from 'react'
import './LoginScreen.css'
import { Button } from '@material-ui/core'
import SignupScreen from './SignupScreen'

function LoginScreen() {

    const [ signIn, setSignIn ] = useState(false)

    return (
        <div className="login">
            <div className="login__background">
                <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" className="login__logo"/>
                <Button className="login__button" onClick={() => setSignIn(true)}>Sign in</Button> 
                <div className="login__gradient"/>
            </div>
            <div className="login__body">
                { signIn ? (
                    <SignupScreen/>
                ) : (
                <>
                    <h1>Unlimited films, TV programs and more.</h1>
                    <h2>Watch anywhere. Cancel any time.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className="login__input">
                        <form action="">
                        <input type="email" placeholder="Email Address"/>
                        <Button className="login__getStarted"  onClick={() => setSignIn(true)}>GET STARTED</Button>
                        </form>
                    </div>
                </>
                )}
            </div>
        </div>
    )
}

export default LoginScreen
