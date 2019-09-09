import { callAPI } from '../utilities/http';


class BookService {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api';
        
    }

    async getAllBooks() {
        let res = await callAPI('/books');
        return res.json()
    }

    async getBooksById(id) {
        let res = await callAPI(`/book/${id}`);
        return res.json()
    }

    async getBooksByName(bookName) {
        let res = await callAPI('/books/search', "POST", { search: bookName } );
        return res.json()
    }
}

export default BookService;