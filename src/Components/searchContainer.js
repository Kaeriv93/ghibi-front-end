import {useState} from 'react'
import Search from './Search'
import Results from './Results'
import React from 'react'

const SearchContainer=()=>{
    const [query, setQuery]=useState([])
    const [results, setResults]=useState([])

    async function handleSubmit(e){
        e.preventDefault()
        
        try {
        const URL=`https://ghibliapi.herokuapp.com/films`
        const response =await fetch(URL)
        const data =await response.json()
        setResults(data.data)
        }catch(err){
            console.log(err)
        }
    }  
    
    function handleChange(e){
        setQuery(e.target.value)
    }
    return(
        <>
        < Search handleSubmit={handleSubmit} handleChange={handleChange} query={query}/>
        < Results results={results} />
        </>
    )
}
export default SearchContainer