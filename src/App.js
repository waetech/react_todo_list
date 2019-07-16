import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';


class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
      title: 'Take out the trash',
      completed: false
      },
      {
      id: uuid.v4(),
      title: 'Meet with the boss',
      completed: true
      },
      {
      id: uuid.v4(),
      title: 'Lunch with husband',
      completed: false
      } 
    ]
  }

//Mark todo complete
   markComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
          if(todo.id === id) {
            todo.completed = !todo.completed
          }
          return todo;
        }) });
    }

    //Delete Todo
    delTodo = (id) => {
     this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
    }

    //Add Todo
    addTodo = (title) => {
      const newTodo = {
        id: uuid.v4(),
        title,
        completed: false
      }
     this.setState({ todos: [...this.state.todos, newTodo] });
    }

render(){
console.log(this.state.todos)
  return (
    <div className="App">
    <div className="container">
    <Header />
    <AddTodo addTodo={this.addTodo} />
    <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
    </div>
    </div>
  );
}
    
}

  

export default App;
