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


/*class BookService {
    createBook(book) {
        return post(`${config.domain}/api/book`, null, book);
    }

    getAllBook() {
        return get(`${config.domain}/api/books`, null);
    }

    deleteBook(id) {
        return delete(`${config.domain}/api/book/${id}`)
    }
}*/

export default BookService;