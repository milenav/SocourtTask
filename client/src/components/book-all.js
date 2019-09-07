import React, { Fragment, Component } from 'react';
import SingleBook from './single-book';
import BookService from '../services/book-service';

class BookAll extends Component {
    state = {
        books: []
    }

    static service = new BookService(); 

    render() {
        const { books } = this.state;

        if (!books.length) {
            return 'No books!'
        }

        return (
            <Fragment>
                <div className="row">
                    <div className="col-6">
                        { books.map(book => (
                            <SingleBook key={book.id} {...book} />
                        ))}
                    </div>
                </div>
            </Fragment>
        )
    }

    async componentDidMount() {
        try {
            const books = await BookAll.service.getBooks();

            this.setState({ books})
        } catch(error) {
            console.error(error)  
        }
    }
}

export default BookAll;