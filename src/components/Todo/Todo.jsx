import React, {useState} from "react";
import randomId from "randomid";
import TodoList from "./TodoList/TodoList";
import TodoCount from "./TodoCount/TodoCount";
import {observer} from "mobx-react-lite";
import {Button, Input} from '@material-ui/core';
import {makeStyles} from "@material-ui/styles";
import {getSnapshot} from "mobx-state-tree";
import {store} from "../../store";
import "./Todo.scss";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles(() => (
    {
        root: {
            width: 160
        }
    }
))


const Todo = observer(props => {

    const [initialText, setInitialText] = useState('');
    const [open, setOpen] = useState(false);
    console.log('getSnapshot', getSnapshot(store));

    const classes = useStyles();
    return (
        <div>
            <TodoCount pendingCount={props.store.pendingCount} completedCount={props.store.completedCount}
                       allTasks={props.store.allTasks}/>
            <div className="todo-task-bar">
                <Input className="todo-task-input" value={initialText} placeholder="Type task name"
                       onChange={e => setInitialText(e.currentTarget.value)}/>
                {initialText.length > 3 ? <Button className={classes.root} color="primary" variant="outlined"
                                                  onClick={() => {
                                                      props.store.addTodo(randomId(3), initialText);
                                                      setInitialText('');
                                                  }}>Add task</Button> :
                    <Button className={classes.root} color="primary" variant="outlined"
                            onClick={() => {
                                setOpen(true);
                                setTimeout(() => setOpen(false), 3000)
                            }}>Add task</Button>}
            </div>
            <TodoList todos={props.store.todos}/>
            <Snackbar open={open}>
                <MuiAlert severity="error">
                    Name need to more 3 letters
                </MuiAlert>
            </Snackbar>
        </div>
    )
})

export default Todo;