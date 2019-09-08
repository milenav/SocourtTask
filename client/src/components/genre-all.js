import React, { Fragment, Component } from 'react';
import SingleGenre from './single-genre';
import GenreService from '../services/genre-service';

class GenreAll extends Component {
    state = {
        genres: []
    }
    
    static service = new GenreService(); 

    render() {
        const { genres } = this.state;    
        
        if (!genres.length) {
            return 'No genres'
        }

        return (
            <Fragment>
                <div className="row">
                    <div className="col-xs-12 col-md-4">
                        {
                            genres.map((genre, i) => (
                                <SingleGenre key={i} {...genre} />
                            ))
                        }
                    </div>
                </div>
            </Fragment>
        )
    }

    async componentDidMount() {
        
       try {
            const genres = await GenreAll.service.getAllGenres();

            this.setState({ genres})
        } catch(error) {
            console.error(error)  
        }
        
    }
}

export default GenreAll;