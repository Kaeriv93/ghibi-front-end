import {useEffect,useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import FilmPage from "../Pages/FilmPage";
import Login from '../Login/login'
import Signup from '../Signup/signup'
import List from './Home'


import Success from '../Signup/success';
import UserPage from '../Pages/UserPage';

function Main(props){
    const [film, setFilm] = useState(null);
    const [user ,setUser] = useState(null);
    const [review,setReview] = useState({
        reviews:[{review:'Wow I really loved this film a lot!'}]
    })



    const URL = "https://ghibliapi.herokuapp.com/films";

    const URL2 = 'https://backend-studioghibli-app.herokuapp.com/users/'


    const reviewData = () =>{
        fetch('https://backend-studioghibli-app.herokuapp.com/reviews/')
        .then(response => response.json())
        .then(result => setReview(result))
    }

    const getUsers = () => {
        fetch(URL2)
        .then(response => response.json())
        .then(result => setUser(result))
    }

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(URL);
            const data = await response.json();
            setFilm(data);
        };
        getData();
    }, []);


    const createReview = async(review) =>{
        await fetch ('https://backend-studioghibli-app.herokuapp.com/reviews/',{
            method:'post',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(review)
        })
    }

    const deleteReview = async id =>{
        await fetch('https://backend-studioghibli-app.herokuapp.com/reviews/' + id,{
            method:'delete'
        })
        reviewData()
    }

    useEffect(() => reviewData(),[])
    useEffect(() => getUsers(),[])

    const updatedUser = async (user, id) => {
        await fetch('https://backend-studioghibli-app.herokuapp.com/userpage/' + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
        getUsers()
    }

    const deleteUser = async id => {
        await fetch('https://backend-studioghibli-app.herokuapp.com/userpage/' + id, {
            method: "delete",
            })

        getUsers()
    }


    return(
        <main>
            <Routes>
                <Route path ='/' 
                element={<List
                film ={film}
                />}/>
                <Route path='/:id' element={<FilmPage film={film} review={review} createReview={createReview}/>} deleteReview={deleteReview}/>
                <Route exact path='/login' element={<Login />}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/success' element={<Success/>}/>
                <Route path ='/userpage/:id' element={<UserPage user={user} updatedUser={updatedUser} deleteUser={deleteUser}/>}/>
            </Routes>
        </main>

    )
}

export default Main