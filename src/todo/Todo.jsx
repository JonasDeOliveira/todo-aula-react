import React, {Component} from 'react';
import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';
import axios from 'axios';

const URL = 'http://localhost:3004/todo'

export default class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.refresh()
    }

    refresh = (description = '') => {
        axios.get(`${URL}`)
        .then(resp => this.setState({description, list: resp.data}))
    }

    handleChange = (event) => {
        this.setState({description: event.target.value})
    }

    handleAdd = () => {
        axios.post(URL, { description: this.state.description, done: false })
        .then(resp => {
            alert(`${this.state.description} cadastrado com sucesso`);
            this.refresh();
        })
    }

    handleRemove = (todo) => {
        axios.delete(`${URL}/${todo.id}`)
        .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsDone = (todo) => {
        axios.put(`${URL}/${todo.id}`, { ...todo, done: true })
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPending = (todo) => {
        axios.put(`${URL}/${todo.id}`, { ...todo, done: false })
            .then(resp => this.refresh(this.state.description))
    }

    limpar = () => {
        this.refresh()
    }

    render() {
        return (
            <>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleClear={this.handleClear}/>
                <TodoList list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}/>
            </>
        )
    }
}