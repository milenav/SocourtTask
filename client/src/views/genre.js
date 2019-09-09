import React, {Component} from 'react';
import GenreAll from '../components/genre-all';


class Genre extends Component {
    render() {
        return(
            <div className="row-lg-6">
            <GenreAll />
            </div>
        )
    }
}

export default Genre;