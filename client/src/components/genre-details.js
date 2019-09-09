import React, { Component } from 'react';
import GenreService from '../services/genre-service';

class GenreDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loadedGenre: {}
        };
    }
    
    static service = new GenreService(); 

    render() {
        const { loadedGenre } = this.state;

        return (
            <div className="row my-5 d-flex justify-content-center">
                <div className="col-lg-6 mb-4">
                    <div className="card mt-5 ml-5">
                        <div className="card-body">
                            <h5 className="card-title">Name: {loadedGenre.name}</h5>
                            <p className="card-text"><span className="card-subtitle mb-2 text-muted">Created: </span>{loadedGenre.createdAt}</p>
                            <p className="card-text"><span className="card-subtitle mb-2 text-muted">Updated: </span>{loadedGenre.updatedAt}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    async componentDidMount() {
        
       try {
            const { params } = this.props.match;

            if (params && params.id) {
                const loadedGenre = await GenreDetails.service.getGenresById(params.id);
    
                this.setState({ ...this.state, loadedGenre });
            }
        } catch(error) {
            console.error(error)  
        }
        
    }
}
export default GenreDetails;