import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Navigation from './components/navigation'

import Book from './views/book';
import Genre from './views/genre';


const Routes = () => (
    <BrowserRouter>
    <div>
        <Navigation />
        <div className='container'>
        <Switch>
        <Route exact path='/books' component={Book}/>
        <Route exact path='/genres' component={Genre}/>
        </Switch>
        </div>
    </div>
    </BrowserRouter>
)

export default Routes;