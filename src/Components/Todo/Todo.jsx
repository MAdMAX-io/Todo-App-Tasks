import React, { Component } from 'react'
import PageHeader from '../../Pages/pagesHeader'
import Form from '../TodoForm/TodoForm'
import List from '../TodoList/TodoList'

export default class Todo extends Component {
    render() {
        return (
            <div>
                <PageHeader name="Todo" small="Tasks"/>
                <Form />
                <List />
            </div>
        )
    }
}