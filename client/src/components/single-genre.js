import React from 'react';
import { Link } from 'react-router-dom';


const SingleGenre = ({ name, createdAt, updatetAt, _id }) => {
    return (
        <div className="col-lg-4 mb-4">
        <div className="card mt-5 ml-5">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>              
                <p className="card-text">{createdAt}</p>
                <p className="card-text">{updatetAt}</p>
                <Link to={`/genres/${_id}`} className="btn btn-primary btn-xs">Genre Details</Link>
            </div>
        </div> 
        </div>
    )
}

export default SingleGenre;