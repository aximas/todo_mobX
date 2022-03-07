import React from "react";
import {values} from "mobx";
import {observer} from "mobx-react-lite";
import { Input } from '@material-ui/core';

const TodoList = observer(props => (
 values(props.todos).map(todo => {
    return <div key={todo.idForKey}>
        <Input type="checkbox" checked={todo.done} onChange={() => todo.toggleDone()}/>
        <Input type="text" value={todo.name} onChange={e => todo.setName(e.currentTarget.value)}/>
    </div>
})
))

export default TodoList;