import React from 'react'
import { Link, useParams } from 'react-router-dom'


const Description = ({ movies }) => {
    const { id } = useParams();
    const movie = movies.find(el => el.id == id);
    return (
        <div>
            <h1>{movie.name}</h1>
            <img src={movie.image} alt={movie.name} style={{ width: "350px", height: "400px" }}></img>
            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'baseline', marginLeft:'20px' }}>
                <h3>Description: &ensp;</h3>
                <p>{movie.description}</p>
            </div>
            <div style={{ display: 'flex', justifyContent:'flex-start', alignItems: 'baseline', marginLeft:'20px' }}>
                <h3>Movie Trailer: &ensp;</h3>
                <p><a href={movie.trailerVideoLink} target="_blank" rel="noopener noreferrer">Show me</a></p>
            </div>
            <div><Link to='/'><button className='btn-primary'>Home</button></Link></div>
        </div>
    )
}

export default Description