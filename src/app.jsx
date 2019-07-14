import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import React from 'react'
import Router from './Routes/Routes'
import Menu from './Components/Menu/Menu'

export default props => (
    <div className="container">
        <Menu />
        <Router />
    </div>
)