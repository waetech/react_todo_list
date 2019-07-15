import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';


class App extends Component {
  state = {
    todos: [
      {
        id: 1,
      title: 'Take out the trash',
      completed: false
      },
      {
      id: 2,
      title: 'Meet with the boss',
      completed: true
      },
      {
      id: 3,
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

render(){
console.log(this.state.todos)
  return (
    <div className="App">
    <div className="container">
    <Header />
    <AddTodo />
    <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
    </div>
    </div>
  );
}
    
}

  

export default App;
