import '../styles/home.css'
import '../styles/App.css'
const Search=(props)=>{

    return(
    
        <div className='searchbarFlex'>
            <form onSubmit={props.handleSubmit}>
            <input className='searchBar' type="text" onChange={props.handleChange} value={props.query}/>
            <button className='searchButton'>Search!</button>
            </form>
        </div>
        
           
    )
}
export default Search