import React from 'react';
import { Link } from 'react-router-dom';


const SingleBook = ({ name, author, genre, createdAt, updatetAt, _id }) => {
    return (
        <div className="col-lg-4 mb-4">
        <div className="card mt-5 ml-5">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{author}</h6>
                <h6 className="card-subtitle mb-2 text-muted">Genre {genre ? genre.name : ''}</h6>               
                <p className="card-text">{createdAt}</p>
                <p className="card-text">{updatetAt}</p>
                <Link to={`/books/${_id}`} className="btn btn-primary btn-xs">Book Details</Link>
            </div>
        </div> 
        </div>
    )
}

export default SingleBook;