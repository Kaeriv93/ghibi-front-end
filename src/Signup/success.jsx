import './signup.css'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const Success = () =>{
    const navigate = useNavigate()
    const[cookie,setCookie,removeCookie] = useCookies([])
    useEffect(()=>{
        const verifyUser = async ()=>{
            if(!cookie.jwt){
                navigate('/login')
            }else{
                const{data} = await axios.post('https://backend-studioghibli-app.herokuapp.com',
                {},
                {withCredentials:true})
                if(!data.status){
                    removeCookie('jwt')
                    navigate('/login')
                }else toast(`Hi ${data.user}`,{theme:'dark'})
            }
        }
        verifyUser()
    },[cookie,navigate,removeCookie])
    return(
        <>
            <h1 className="successful">Sign up was Successful!</h1>

            <ToastContainer/>
        </>
    )
}

export default Success