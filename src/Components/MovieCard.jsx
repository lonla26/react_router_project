import React from 'react'
import { Link } from 'react-router-dom'
import StarRating from './StarRating'

const MovieCard = ({ item, deleteMovie }) => {
    return (
        <div className='zoom'>
            <div className='movie-card'>
                <Link to={`/description/${item.id}`} style={{textDecoration:'none', color:'black'}}>
                    <h3>{item.name}</h3>
                    <img src={item.image} alt={item.name} />
                    <StarRating rating={item.rating} />
                    <p>{item.date}</p>
                </Link>
                <button className='btn' onClick={() => deleteMovie(item.id)}>Delete</button>
            </div>
        </div>
    )
}

export default MovieCard