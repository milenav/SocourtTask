import React, {Component} from 'react';
import BookAll from '../components/book-all';


class Book extends Component {
    render() {
        return(
            <div className="row-lg-6">
            <BookAll />
            </div>
        )
    }
}

export default Book;