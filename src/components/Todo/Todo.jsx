import React from "react";
import randomId from "randomid";
import TodoList from "./TodoList/TodoList";
import TodoCount from "./TodoCount/TodoCount";
import {observer} from "mobx-react-lite";

const Todo = observer(props => {
    props.store.getTodoWhereDoneIs(true);
    return (
        <div>
            <TodoCount pendingCount={props.store.pendingCount} completedCount={props.store.completedCount} allTasks={props.store.allTasks}/>
            <div>
                <button onClick={e => props.store.addTodo(randomId(3), 'New task')}>
                    Add task
                </button>
                <TodoList todos={props.store.todos}/>
            </div>
        </div>
    )
})

export default Todo;