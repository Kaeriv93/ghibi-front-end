import {useParams} from 'react-router-dom'
import {useState} from 'react'
import './Pages.css'

const FilmPage = (props)=>{
    let {id} = useParams()
    let film = props.film[id]
    let review = props.review
    const [newForm, setNewForm] = useState({
        content:''
    })
    
    const handleChange = (e) =>{
        setNewForm({...newForm, [e.target.name]:e.target.value})
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        props.createReview(newForm)
        setNewForm({
            content:''
        })
    }

    return 1 > 0? (
        <div className="showpage">
            <div className="moviebanner">
                <img className="backdrop" src={film.movie_banner} alt={film.title}/>
            </div>
            <h2>{film.original_title}</h2>
            <div className="middle-container">
                <div className="description-grid">
                    <h1 className="title">{film.title}</h1>
                    <h3 className="director">Directed by <b>{film.director}</b></h3>
                    <hr/>
                    <img className="film-image" src={film.image} alt={film.title}/>
                    <div className="film-description">
                        <h3>Description</h3>
                        <p>{film.description}</p>
                    </div>
                    <ul className="detail-description">
                        <li>Year of Production:{film.release_date}</li>
                        <li>Runtime:{film.running_time}mins</li>
                        <li>Producer:{film.producer}</li>
                    </ul>
                    <h3 className="rating">Rating:{film.rt_score}</h3>
                </div>
            </div>
            <div className="review">
                <h3>Leave a review below!</h3>
                    <div>
                        {review.map((review,idx)=>(
                            <p key={idx}>{review.content} {review.rating}/5</p>
                        ))}
                    </div>
                    <section className="review-section">
                        <form onSubmit={handleSubmit} autocomplete="off">
                            <input type='text' value={newForm.content} name='content' placeholder='Leave a review' onChange={handleChange}/>
                            <input id="reviewsubmit" type='submit' value='Submit'/>
                        </form>
                    </section>
            </div>

        </div>
    ): <h1>Can't Load</h1>
}
export default FilmPage