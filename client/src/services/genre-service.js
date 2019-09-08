import { callAPI } from '../utilities/http';


class GenreService {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api';
        
    }

    async getAllGenres() {
        let res = await callAPI('/genres');
        return res.json()

        //return get(`${this.baseUrl}/books`)
    }
}

export default GenreService;