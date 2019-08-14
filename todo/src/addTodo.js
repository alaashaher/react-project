import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSumbit = (e) => {
        e.preventDefault();
        this.props.addtodo(this.state);
        this.setState({
            content: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSumbit}>
                <label>add new todo:</label>
                <input type="text" onChange={this.handleChange} value={this.state.content}/>
            </form>
        )
    }
}

export default AddTodo;