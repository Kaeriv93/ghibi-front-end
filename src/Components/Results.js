const Results=(props)=>{
    console.log(props)
    const showData=props.results.map((image, idx)=>
    {
        return(
            <img src={image.images.fixed_height.url} alt={image.title} key={idx}/>
        )
    })
    return(

    <>
     
    {showData}
    </>
    )
    

}
export default Results