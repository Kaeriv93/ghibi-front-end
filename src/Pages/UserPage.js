import {useNavigate, useParams} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import {useState} from 'react'
import './User.css'

const UserPage = (props) =>{
    const navigate = useNavigate()
    let {id} = useParams()
    let users = props.user
    let user = users.find(u => u._id === id)
    const[editForm, setEditForm] = useState(user)

    const handleChange = event =>{
        setEditForm({...editForm, [event.target.name]:event.target.value})
    }
    
    const handleSubmit = event =>{
        event.preventDefault()
        props.updatedUser(editForm,id)
        navigate(`/userpage/${id}`)
    }

    return(
        <>
        <div className="profile">
            <div className="userpic">
                <img src={user.profilepic} alt={user.firstName}/>
            </div>

            <div className="user-title">
                <h1>Welcome to my page I'm <u>{user.username}</u></h1>
                <h3>Feel free to add me and connect!</h3>
            </div>

            <div className="bio">
                <h3>{user.firstName} {user.lastName}</h3>
                <hr/>
                <h3>About Me</h3>
                <p>{user.bio}</p>
                <hr/>
            </div>
            
            <div className="hobbies">
                <h3>Hobbies:</h3>
                <h3>{user.hobbies}</h3>
            </div>

            <div className="favorites">
                <h3>Favorites List</h3>
                <h5>{user.favorites}</h5>
            </div>

            <div className="reviews">
                <h3>Reviews:{user.reviews}</h3>
            </div>

            <div className="friends">
                <h3>Friends List</h3>
                <h4>Tom</h4>
                <img src="https://pbs.twimg.com/profile_images/1237550450/mstom.jpg" alt="tom"/>
            </div>
            <form onSubmit={handleSubmit} className="editform">
                <input onChange={handleChange} type="text" placeholder="Edit About Me" value={editForm.bio}/>
            </form>
        </div>
        {toast(`Hi ${user.firstName}`,{theme:'dark'})}
        <ToastContainer/>
        </>
   
    )
}

export default UserPage