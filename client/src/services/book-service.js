import { callAPI } from '../utilities/http';


class BookService {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api';
        
    }

    async getAllBooks() {
        let res = await callAPI('/books');
        return res.json()

        //return get(`${this.baseUrl}/books`)
    }
}

export default BookService;