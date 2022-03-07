import {observer} from "mobx-react-lite";

const TodoCount = observer(props => {
        return <div>
            <p>{props.pendingCount} pending</p>
            <p>{props.completedCount} completed count</p>
            <p>{props.allTasks} all tasks</p>
        </div>
    }
)

export default TodoCount