import {useParams, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import './Pages.css'

const FilmPage = (props)=>{
    const navigate = useNavigate()
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
        navigate(`/${id}`)
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
                    <h3 className="director">Directed by <br/>{film.director}</h3>
                    <hr/>
                    <img className="film-image" src={film.image} alt={film.title}/>
                    <div className="film-description">
                        <h3>Description</h3>
                        <p>{film.description}</p>
                    </div>
                    <div className="detail-description">
                        <h1>Year of Production: <br/> {film.release_date}</h1>

                        <h1>Runtime: <br/> {film.running_time}mins</h1>
                        <h1>Producer:<br/> {film.producer}</h1>
                    </div>
                    <h3 className="rating">Rating:<br/>{film.rt_score}</h3>
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
                            <input id="form" type='text' value={newForm.content} name='content' placeholder='Leave a review' onChange={handleChange}/>
                            <input id="reviewsubmit" type='submit' value='Submit'/>
                        </form>
                    </section>
            </div>

        </div>
    ): <h1>Can't Load</h1>
}
export default FilmPage