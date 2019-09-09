import React, { Fragment, Component } from 'react';
import SingleBook from './single-book';
import BookService from '../services/book-service';

class BookAll extends Component {
    constructor() {
        super();
        
        this.state = {
            books: [],
            searchQuery: ''
        }

      this.getBooksByName = this.getBooksByName.bind(this);
      this.handleSearchInput = this.handleSearchInput.bind(this);
    }
    

    static service = new BookService();

    handleSearchInput(e) {
        const { value } = e.target;

        this.setState({
            ...this.state,
            searchQuery: value
        });
    }

    async getBooksByName(e) {
        e.preventDefault();

        const books = await BookAll.service.getBooksByName(this.state.searchQuery);

        this.setState({ ...this.state, books });
    }

    render() {
        const { books } = this.state;

        return (
            <Fragment>
                <form>
                    <div className="row my-5 d-flex justify-content-center">
                    <div className="col-6">
                        <input className="form-control form-control-lg" type="text" placeholder="Search" aria-label="Search"
                            value={this.state.searchQuery}
                            onChange={this.handleSearchInput} />
                    </div>
                    <button className="btn btn-dark btn-xs" onClick={this.getBooksByName}>Search</button>
                    </div>
                </form>

                <div className="row d-flex justify-content-center">
                    {
                        books.map((book, i) => (
                            <SingleBook key={i} {...book} />
                        ))
                    }

                </div>
            </Fragment>
        )
    }

    async componentDidMount() {

        try {
            const books = await BookAll.service.getAllBooks();

            this.setState({ books })
        } catch (error) {
            console.error(error)
        }

    }
}

export default BookAll;