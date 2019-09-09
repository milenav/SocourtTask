import React, { Fragment, Component } from 'react';
import BookAll from './book-all';
import BookService from '../services/book-service';

class BookSearch extends Component {
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
                        {
                            books.map((book, i) => (
                                <BookAll key={i} {...book} />
                            ))
                        }  

                </div>
            </Fragment>
        )
    }

    async componentDidMount() {
       try {
            const books = await BookAll.service.getBooksByName("Test Book");

            this.setState({ books})
        } catch(error) {
            console.error(error)  
        }
        
    }
}

export default BookSearch;