import React from "react";
import {values} from "mobx";
import {observer} from "mobx-react-lite";
import { Input, Checkbox, Button } from '@material-ui/core';
import "./TodoList.scss"

const TodoList = observer(props => {
    return values(props.todos).map(todo => {
        const todoListName = todo.done ? <p className="todo-list-input"><strike>{todo.name}</strike></p> : <p className="todo-list-input">{todo.name}</p>
        return <div className="todo-list" key={todo.idForKey}>
            <Checkbox className="todo-list-checkbox" color="primary" checked={todo.done} onChange={() => todo.toggleDone()}/>
            {todo.isChange ? <Input className="todo-list-input" value={todo.name} onChange={e => todo.setName(e.currentTarget.value)}/> :todoListName}
            {todo.isChange ? <Button onClick={() => todo.setIsChange()}>Save</Button> : <Button onClick={() => todo.setIsChange()}>Change</Button>}
        </div>
    })
})

export default TodoList;