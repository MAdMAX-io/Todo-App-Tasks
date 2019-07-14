import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

/**
 * Components que vão ser renderizados no elemento Router
 */
import Todo from '../Components/Todo/Todo'
import About from '../Components/About/About'

export default props => (
    <Router history={hashHistory}> 
        <Route path="/todos" component={Todo} />
        <Route path="/about" component={About} />
        <Redirect from="*" to="/todos"  />
    </Router>
)