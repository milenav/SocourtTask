import React, { Fragment, Component } from 'react';
import SingleGenre from './single-genre';
import GenreService from '../services/genre-service';


class GenreAll extends Component {
    constructor() {
        super();
        
        this.state = {
            genres: [],
            searchQuery: ''
        }

      this.getGenresByName = this.getGenresByName.bind(this);
      this.handleSearchInput = this.handleSearchInput.bind(this);
    }

    static service = new GenreService();

    handleSearchInput(e) {
        const { value } = e.target;

        this.setState({
            ...this.state,
            searchQuery: value
        });
    }

    async getGenresByName(e) {
        e.preventDefault();

        const genres = await GenreAll.service.getGenresByName(this.state.searchQuery);

        this.setState({ ...this.state, genres });
    }

    render() {
        const { genres } = this.state;

        return (
            <Fragment>
                
                <form>
                    <div className="row my-5 d-flex justify-content-center">
                    <div className="col-6">
                        <input className="form-control form-control-lg" type="text" placeholder="Search" aria-label="Search"
                            value={this.state.searchQuery}
                            onChange={this.handleSearchInput} />
                    </div>
                    <button className="btn btn-dark btn-xs" onClick={this.getGenresByName}>Search</button>
                    </div>
                </form>
               

                <div className="row d-flex justify-content-center">
                    {
                        genres.map((genre, i) => (
                            <SingleGenre key={i} {...genre} />
                        ))
                    }
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