import { callAPI } from '../utilities/http';


class GenreService {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api';
        
    }

    async getAllGenres() {
        let res = await callAPI('/genres');
        return res.json()

    }
    
    async getGenresById(id) {
        let res = await callAPI(`/genre/${id}`);
        return res.json()

    }

    async getGenresByName(genreName) {
        let res = await callAPI('/genres/search', "POST", { search: genreName } );
        return res.json()

    }
}

export default GenreService;