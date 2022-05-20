import {useNavigate, useParams} from 'react-router-dom'
import {useState} from 'react'
import './User.css'

const UserPage = (props) =>{
    const navigate = useNavigate()
    let {id} = useParams()
    let users = props.user
    let user = users.find(u => u._id === id)
    let favoriteFilm = users.favorites

    const[editForm, setEditForm] = useState(user)
    const [fav, setFav] = useState({
        favorites:[{favoriteFilm}],
        newfavorites:[{}]
    })

    const handleChange = event =>{
        setEditForm({...editForm, [event.target.name]:event.target.value})
    }
    
    const handleSubmit = event =>{
        event.preventDefault()
        props.updatedUser(editForm, id)
        navigate(`/userpage/${id}`)
    }

    const deleteAccount = ()=>{
        props.deleteUser(id)
        navigate('/')
    }

    const addForm =()=>{
        props.addForm(editForm,id)
        navigate(`/userpage/${id}`)
    }

    return(
        <>
        <div className="profile">
            <div className="userpic">
                <img src={user.profilepic} alt={user.firstName}/>
                <form onSubmit={handleSubmit}>
                    <input type ='text' name="profilepic" placeholder="Add an image to yourself!" onChange={handleChange} value={editForm.profilepic}/>
                </form>
            </div>

            <div className="user-title">
                <h1>Welcome to my page I'm <u><em>{user.username}</em></u></h1>
                <h3>Feel free to add me and connect!</h3>
            </div>

            <div className="bio">
                <h3> <em><u>{user.firstName} {user.lastName}</u></em></h3>
                <hr/>
                <h3><em><u>About Me</u></em></h3>
                <p>{user.bio}</p>
                <hr/>
            </div>
            
            <div className="hobbies">
                <h3><u>Hobbies:</u></h3>
               
                <h3>{user.hobbies}</h3>
                
            </div>

            <div className="favorites">
                <h3><u>Favorites List</u></h3>
                <h5>{user.favorites}</h5>
                <form onSubmit={handleSubmit}>
                    <input type ='text' name="favorites" placeholder="Add a favorite" onChange={handleChange} value={editForm.favorites}/>
                </form>
            </div>

            <div className="reviews">
                <h3><u>Reviews:</u>{user.reviews}</h3>
            </div>

            <div className="friends">
                <h3><u>Friends List</u></h3>
                <h4>Tom</h4>
                <img className="tom" src="https://pbs.twimg.com/profile_images/1237550450/mstom.jpg" alt="tom"/>
            </div>

            <form onSubmit={handleSubmit} className="editform">

            <form onSubmit={addForm} className="editform">
                <input onChange={handleChange} type="text" name="bio" placeholder="Edit About Me" value={editForm.bio}/>

            </form>
            <div className="delete">
                <button onClick={deleteAccount}>Delete Account</button>
            </div>
        </div>
        </>
   
    )
}

export default UserPage