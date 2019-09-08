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
            return 'No books'
        }

        return (
            <Fragment>
                <div className="row">
                    <div className="col-xs-12 col-md-4">
                        {
                            books.map((book, i) => (
                                <SingleBook key={i} {...book} />
                            ))
                        }
                    </div>
                </div>
            </Fragment>
        )
    }

    async componentDidMount() {
        
       try {
            const books = await BookAll.service.getAllBooks();

            this.setState({ books})
        } catch(error) {
            console.error(error)  
        }
        
    }
}

export default BookAll;