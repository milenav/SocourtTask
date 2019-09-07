import { get } from '../data/crud'

class BookService {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api'; 
        this.allBooksUrl = `${this.baseUrl}/books`;
    }

    getBooks() {
        return get(this.allBooksUrl);
    }
}

export default BookService;