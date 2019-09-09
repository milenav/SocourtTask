import React, { Fragment, Component } from 'react';
import GenreAll from './genre-all';
import GenreService from '../services/genre-service';

class GenreSearch extends Component {
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
                        {
                            genres.map((genre, i) => (
                                <GenreAll key={i} {...genre} />
                            ))
                        }  

                </div>
            </Fragment>
        )
    }

    async componentDidMount() {
       try {
            const genres = await GenreAll.service.getGenresByName("Test Book");

            this.setState({ genres})
        } catch(error) {
            console.error(error)  
        }
        
    }
}

export default GenreSearch;