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
                <form className="form-inline ml-auto">
                    <div className="md-form my-0">
                        <input className="form-control" type="text" placeholder="Search" aria-label="Search"
                            value={this.state.searchQuery}
                            onChange={this.handleSearchInput} />
                    </div>

                    <button onClick={this.getBooksByName}>Search</button>
                </form>

                <div className="row">
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
            //const books = await BookAll.service.getBooksByName("Test Book");
            const books = await BookAll.service.getAllBooks();

            this.setState({ books })
        } catch (error) {
            console.error(error)
        }

    }
}

export default BookAll;