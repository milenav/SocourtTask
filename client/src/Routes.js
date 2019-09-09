import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Navigation from './components/navigation'

import Book from './views/book';
import Genre from './views/genre';
import BookDetails from './components/book-details';
import BookSearch from './components/book-search';


const Routes = () => (
    <BrowserRouter>
    <div>
        <Navigation />
        <div className='container'>
        <Switch>
        <Route exact path='/books' component={Book}/>
        <Route exact path='/genres' component={Genre}/>
        <Route exact path='/books/:id' component={BookDetails}/>
        <Route exact path='/books/search' component={BookSearch} />
        </Switch>
        </div>
    </div>
    </BrowserRouter>
)

export default Routes;