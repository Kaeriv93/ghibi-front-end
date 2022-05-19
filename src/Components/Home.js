import '../styles/home.css'
import {Link} from 'react-router-dom'
import '../styles/App.css'
import Carousel from './carousel';

function List(props) {
  const caro=()=>{
    return (
      <div>
        <div className='suggested-div'> <h1 className="suggested">Suggested Films</h1></div>
        
        <Carousel/>
      </div>
    );
  }
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
  caro();
  return props.film ? (
    <>
    {caro()}
    {loaded()}
    </>
  ):<h1>Loading.....</h1>

}


export default List
