import React, { Component } from 'react';
import BookService from '../services/book-service';

class BookDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loadedBook: {}
        };
    }
    
    static service = new BookService(); 

    render() {
        const { loadedBook } = this.state;

        return (
                    <div className="col-lg-4 mb-4">
                    
                    <div className="card mt-5 ml-5">
                        <div className="card-body">
                            <h5 className="card-title">Name: {loadedBook.name}</h5>              
                            <p className="card-text">Author: {loadedBook.author}</p>
                            <p className="card-text">Created: {loadedBook.createdAt}</p>
                        </div>
                    </div> 
                    </div>
        )
    }

    async componentDidMount() {
        
       try {
            //const books = await BookAll.service.getBooksByName("Test Book");
            const { params } = this.props.match;

            if (params && params.id) {
                const loadedBook = await BookDetails.service.getBooksById(params.id);
    
                this.setState({ ...this.state, loadedBook });
            }
        } catch(error) {
            console.error(error)  
        }
        
    }
}
export default BookDetails;