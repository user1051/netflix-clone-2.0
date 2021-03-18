import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Nav.css'

function Nav() {

    const [show, handleShow] = useState(false)
    const history = useHistory()
   
    const transitionNavbar = () => {
        if(window.scrollY > 100 ){
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return() => window.removeEventListener("scroll", transitionNavbar) // cleanup process
    }, [])

    return (
        <div className={`'nav' ${show && 'nav__black'}`}>
           <div className="nav__contents">
                <img className="nav__logo" 
                onClick={() => history.push('/')}
                src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                alt=""
                />
            <img className="nav__avatar"
                onClick={() => history.push('/profile')}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLnbQkuteyApIngCTq6zbyUN3bcfzan1VaLQ&usqp=CAU" 
                alt=""
            />
           </div>
        </div>
    )
}

export default Nav
