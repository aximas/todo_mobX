import {observer} from "mobx-react-lite";
import "./TodoCount.scss"
import MuiAlert from '@material-ui/lab/Alert';


const TodoCount = observer(props => {
        return <div className="todo-header">
            <MuiAlert  severity="info" className="todo-counter todo-counter-all">All tasks = {props.allTasks}</MuiAlert >
            <MuiAlert severity="warning" className="todo-counter todo-counter-pending">{props.pendingCount} pending</MuiAlert>
            <MuiAlert severity="success" className="todo-counter todo-counter-completed">{props.completedCount} tasks completed </MuiAlert>
        </div>
    }
)

export default TodoCount