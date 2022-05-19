import '../styles/home.css'
import {Link} from 'react-router-dom'
import '../styles/App.css'

function List(props) {


  const loaded = () => {
    return props.film.map((film,idx) => ( 
      <div className='flex'>
      <div className='flip-card' key={idx}>
        <div className='card-inner'> 
            <div className='card-front'> 
                <Link to={`/${idx}`}>
                  <h1>{film.title}</h1>
                <img className="ghibiImage" src={film.image} alt={film.name} />
               </Link> 
           </div>
           <div className="card-back">
           <Link to={`/${idx}`}>
              <h1>{film.description}</h1>
              </Link>
           </div>
       </div>
    </div>
    </div>
    ));
  };
  return props.film ? loaded() : <h1>Loading.......</h1>;
}

export default List