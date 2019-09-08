import React from 'react';
import { Link } from 'react-router-dom';


const SingleBook = ({ name, author, genre, createdAt, updatetAt, id }) => {
    return (
        <div className="card mt-5 ml-5">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{author}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{genre}</h6>               
                <p className="card-text">{createdAt}</p>
                <p className="card-text">{updatetAt}</p>
                <Link to={`/api/book/${id}`} className="card-link">This Book</Link>
            </div>
        </div> 
    )
}

export default SingleBook;