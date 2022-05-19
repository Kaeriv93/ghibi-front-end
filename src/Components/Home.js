// import '../styles/home.css'
// import { useEffect, useState } from "react";
// import '../styles/App.css'
// import {Link} from 'react-router-dom'
// import { useParams } from 'react-router-dom';
// import FilmPage from '../Page/FilmPage';


// export default function List() {
//   const [film, setFilm] = useState(null);
//   const URL = "https://ghibliapi.herokuapp.com/films";
//   useEffect(() => {
//     const getData = async () => {
//       const response = await fetch(URL);
//       const data = await response.json();
//       setFilm(data);
//     };
//     getData();
//   }, []);

//   const loaded = () => {
//   console.log(film)
//     return film.map((film) => ( 
      

//       <div className='homepg' key={film._id}>

//           <div className='child'> 
//             <div className='eachMov'> 
//          <Link to={`/${film._id}`}> <h1>{film.title}</h1> 
//                 <img className="gImage" src={film.image} alt={film.name} /></Link>
         
//           </div>

//         </div>


//         </div>
      
//     ));
//   };
//   return film ? loaded() : <h1>Loading.......</h1>;
// }