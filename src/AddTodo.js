import React, { Component } from 'react';
import axios from 'axios';
class AddTodo extends Component {
    state = {
        content: ""
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
     handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        e.target.value="";
        this.setState({
            content:""
        })

    // await axios.post('https://chahinesoftwaresolutions.com/Services/api/React_api/todoList/todoList.php', values)
    //     .catch(error => {
    //         this.setState({ errorMessage: error.message });
    //         console.error('There was an error!', error);
    //     });

    }
    
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>Add new todo:</label>
                <input type="text" onChange={this.handleChange} value={this.state.content}/>
            </form>
            </div>
        )
    }
}

export default AddTodo;