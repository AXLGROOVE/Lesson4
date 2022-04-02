import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import './app.css';
import {createRenderer} from "react-dom/test-utils";


class App extends React.Component {
  state = {
    todos: [
      { id: 1, label: 'Drink vine', important: false, done: false },
      { id: 3, label: 'Have a dinner', important: false, done: false },
      { id: 2, label: 'Make Awesome', important: true, done: false },
    ]
  }

  onDelete = (id) => {
      this.setState((oldState) => {
          const new_todos = oldState.todos.filter((todo) => todo.id != id)
          return {todos: new_todos}
      })
  }


    onImportant = (id) => {
        this.setState((oldState) => {
            const new_todos = oldState.todos.map((todo) => {
                if (todo.id == id) {
                    return {...todo, important: !todo.important}
                }
                else{
                    return {...todo}
                }
            })
            return {todos: new_todos}
        })
    }

    onDone = (id) => {
        this.setState((oldState) => {
            const new_todos = oldState.todos.map((todo) => {
                if (todo.id == id) {
                    return {...todo, done: !todo.done}
                }
                else{
                    return {...todo}
                }
            })
            return {todos: new_todos}
        })
    }

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={2} Done={1} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList todos={this.state.todos}
                  onDelete={this.onDelete}
                  onImportant={this.onImportant}
                  onDone={this.onDone}
        />

      </div>
    );
  };
}


export default App;