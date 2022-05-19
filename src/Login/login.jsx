import './login.css'
import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import axios from 'axios'


const Login = ()=>{
    const navigate = useNavigate()
    const [newForm, setNewForm] = useState({
        email:'',
        password:''
    })

    const generateError = (err) => toast.error(err,{
        position: 'bottom-right',
    })

    const handleChange = (e) =>{
        setNewForm({...newForm, [e.target.name]:e.target.value})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            const{data} = await axios.post('https://backend-studioghibli-app.herokuapp.com/login',{
                ...newForm,
            },
            {
                withCredentials:true,
            }
            )
            console.log(data)
            if(data){
                if(data.errors){
                    const {email,password} = data.errors
                    if(email) generateError(email)
                    else if(password) generateError(password)
                }else{
                    navigate(`/userpage/1`)
                }
            }

        } catch(err){
            console.log(err)
        }
        setNewForm({
            email:'',
            passwords:''
        })
    }




    return(
        <div className="loginpage">
            <h2>Login Form</h2>

            <form onSubmit={handleSubmit}>
                <div class="imgcontainer">
                    <img src="data:image/jpeg;base64,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" alt="Avatar" class="avatar"/>
                </div>
                <div className="flex-container">
                    <div className="container">
                        <label for="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" required onChange={handleChange}/>

                        <label for="password"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password" required onChange={handleChange}/>
                            
                        <button type="submit">Login</button>
                        <button type="button" class="cancelbtn">Cancel</button>
                    </div>

                </div>
            </form>
            <ToastContainer/>
        </div>
)
}

export default Login