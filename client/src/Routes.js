import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Navigation from './components/navigation'

import Book from './views/book';
import Genre from './views/genre';
import BookDetails from './components/book-details';
import BookSearch from './components/book-search';
import GenreDetails from './components/genre-details';
import GenreSearch from './components/genre-search';


const Routes = () => (
    <BrowserRouter>
    <div>
        <Navigation />
        <div className='container'>
        <Switch>
        <Route exact path='/books' component={Book}/>
        <Route exact path='/genres' component={Genre}/>
        <Route exact path='/books/:id' component={BookDetails}/>
        <Route exact path='/genres/:id' component={GenreDetails}/>
        <Route exact path='/books/search' component={BookSearch} />
        <Route exact path='/genres/search' component={GenreSearch} />
        </Switch>
        </div>
    </div>
    </BrowserRouter>
)

export default Routes;