import React, { Component } from 'react';
import BookService from '../services/book-service';

class BookDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loadedBook: null
        };
    }

    static service = new BookService();

    render() {
        const { loadedBook } = this.state;

        if (!loadedBook) {
            return <div>No data</div>
        }

        return (
            <div className="row my-5 d-flex justify-content-center">
                <div className="col-lg-6 mb-4" >
                    <div className="card mt-5 ml-5">
                        <div className="card-body">
                            <h5 className="card-title">Name: {loadedBook.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Author: {loadedBook.author}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Genre: {loadedBook.genre ? loadedBook.genre.name : ''}</h6>
                            <p className="card-text"><span className="card-subtitle mb-2 text-muted">Created: </span>{loadedBook.createdAt}</p>
                            <p className="card-text"><span className="card-subtitle mb-2 text-muted">Updated: </span>{loadedBook.updatedAt}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    async componentDidMount() {
        try {
            const { params } = this.props.match;

            if (params && params.id) {
                const loadedBook = await BookDetails.service.getBooksById(params.id);

                this.setState({ ...this.state, loadedBook });
            }
        } catch (error) {
            console.error(error)
        }
    }
}
export default BookDetails;