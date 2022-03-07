import {types} from "mobx-state-tree";
import {values} from "mobx";
import randomId from "randomid";


const Todo = types.model({
    idForKey: types.optional(types.string, ''),
    name: types.optional(types.string, ''),
    done: types.optional(types.boolean, false)
}).actions(self => ({
    setName(newName) {
        self.name = newName
    },
    toggleDone() {
        self.done = !self.done
    }
}))

const User = types.model({
    name: types.optional(types.string, 'Ravshan')
})

const RootStore = types.model({
    users: types.map(User),
    todos: types.optional(types.map(Todo), {})
}).views(self => ({
    get pendingCount() {
        return values(self.todos).filter(todo => !todo.done).length
    },
    get completedCount() {
        return values(self.todos).filter(todo => todo.done).length
    },
    get allTasks() {
        return values(self.todos).length
    },
    getTodoWhereDoneIs(done) {
        return values(self.todos).filter(todo => todo.done === done);
    }
}))
    .actions(self => ({
        addTodo(id, name) {
            let idForKey = randomId(4);
            self.todos.set(id, Todo.create({name, idForKey}))
        }
    }))

export const store = RootStore.create({
    users: {}
})

window.store = store;