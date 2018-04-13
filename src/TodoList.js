import React from "react"
import { observer } from "mobx-react"

@observer
export default class TodoList extends React.Component {

  render() {
    const { todos, filter, filteredTodos } = this.props.store;

    const todoList = todos.map( (todo) => (
      <li>{todo}</li>
    ));

    const filteredToDoList = filteredTodos.map( (todo) => (
      <li>{todo}</li>
    ))

    return (
        <div>
          <input className="filter" value={filter} onChange={this.filter} />
          <h1>todos</h1>
          <ul>{ todoList }</ul>
          <h3>Todo Filter</h3>
          <ul>{ filteredToDoList }</ul>
          <input className="new" onKeyPress={this.createNew} />
        </div>
    )
  }

  createNew = (e) => {
    if (e.which === 13) {
      this.props.store.createTodo(e.target.value)
      e.target.value = ""
    }
  }

  filter = (e) => {
    this.props.store.filter = e.target.value
  }
}