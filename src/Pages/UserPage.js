import {useNavigate, useParams} from 'react-router-dom'
import {useState} from 'react'
import './User.css'

const UserPage = (props) =>{
    const navigate = useNavigate()
    let {id} = useParams()
    let users = props.user
    let user = users.find(u => u._id === id)
 
    const[editForm, setEditForm] = useState(user)
    const [fav, setFav] = useState({
        favorites:[{addFilm:'Howl`s Moving Castle'}],
        newfavorites:{addFilm:''}
    })

    const mapfilm = fav.favorites.map((film,idx)=>(
        <div key={idx}>
            <h5>{film.addFilm}</h5>
        </div>
    ))

    const handleFilm = event=>{
        setFav((prev)=>({
            ...prev,
            newfavorites:{
                ...prev.newfavorites,
                [event.target.name]:event.target.value
            }
        }))
    }


    const submitFilm = event =>{
        event.preventDefault()
        setFav({
            favorites:[...fav.favorites, fav.newfavorites],
            newfavorites:{addFilm:'New favorite'}
        })
        props.updatedUser(fav, id)
    }

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
        props.addForm(fav,id)
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
                    {mapfilm}
                <form onSubmit={submitFilm}>
                    <input type ='text' name="addFilm" placeholder="Add a favorite" onChange={handleFilm} value={fav.newfavorites.addFilm}/>
                </form>
            </div>

            <div className="reviews">
                <h3>Reviews:</h3>
                <h4>{user.reviews}</h4>
            </div>

            <div className="friends">
                <h3>Friends List</h3>
                <h4>Tom</h4>
                <img src="https://pbs.twimg.com/profile_images/1237550450/mstom.jpg" alt="tom"/>
            </div>
            <form onSubmit={handleSubmit} className="editform">
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