import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import axios from 'axios';
import cors from 'cors';
// import express from 'express'
// var app = express()
// app.use(cors())

class App extends Component {
  state = {
    todos: [
     
    ]
  }
   componentDidMount() {
        axios.get('https://chahinesoftwaresolutions.com/Services/api/React_api/todoList/todoList.php?operation=get')
        .then(res => {
            console.log(res);
            this.setState(
                {
                    todos:res.data
                }
            )
        })
    }
  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !==id
    })
    var index = this.state.todos.findIndex(item => item.id === id);
    axios.get('http://chahinesoftwaresolutions.com/Services/api/React_api/todoList/todoList.php?operation=delete&content='+this.state.todos[index].content)
        .then(res => {
            console.log(res);
        })
    this.setState ({
      todos:todos
    })
    
  }
  addTodo =(todo) => {
    let id=0;
    if(this.state.todos.length>0)
    {
      id=this.state.todos.length;
      id++;
    }
    
    todo.id= id;
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
    //console.log(id, this.state.todos[this.state.todos.length-1]);
      //const values = { content: this.state.content, operation: 'insert'};
    //  axios.post('https://chahinesoftwaresolutions.com/Services/api/React_api/todoList/todoList.php', values)
    //     .catch(error => {
    //         this.setState({ errorMessage: error.message });
    //         console.error('There was an error!', error);
    //     });
     
axios.get('http://chahinesoftwaresolutions.com/Services/api/React_api/todoList/todoList.php?operation=insert&content='+todo.content)
        .then(res => {
            console.log(res);
        })
  }
  render() {
return (
    <div className="todo-app container">
    <h1 className='center blue-text'>Todo's</h1>
    <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
    <AddTodo addTodo={this.addTodo}/>
    </div>
  );
  }
}


export default App;
