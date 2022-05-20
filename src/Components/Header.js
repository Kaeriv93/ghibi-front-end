import React from 'react'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Header = (props) =>{
    const navigate = useNavigate()
    const[cookie,setCookie,removeCookie] = useCookies([])
    
    useEffect(()=>{
        const logout = document.getElementById('logout')
        const verifyUser = async()=>{
            if(!cookie.jwt){
                logout.style="display:normal"
            }else{
                const{data} = await axios.post('https://backend-studioghibli-app.herokuapp.com/',{},
                {withCredentials:true})
                if(!data.status){
                    removeCookie('jwt')
                }else{
                    logout.style="display:normal"
                }
            }

        }
        verifyUser()
    },[cookie,removeCookie])
    const logOut=()=>{
        removeCookie('jwt')
        navigate('/')
    }

    return(
        <>
        <nav className="navbar">
            <Link to ='/'>
                Main
            </Link>
            <Link to ='/login'>
               Login
            </Link> 
            <Link to ='/signup'>
                Signup
            </Link>
          <a href="https://github.com/Kaeriv93/Studio-Ghibli-Project-3" target='_blank'><img className="dustbabies" src="https://64.media.tumblr.com/tumblr_mac1iqN6oJ1rfjowdo1_500.gifv"alt="spiders"/></a>
            <Link onClick={logOut} to='/'>
                <span id="logout">Logout</span>
            </Link>
        </nav>
        
        </>
    )
}

export default Header
