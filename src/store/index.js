import {types, getParent} from "mobx-state-tree";
import {values} from "mobx";
import randomId from "randomid";


const Todo = types.model({
    idForKey: types.optional(types.string, ''),
    name: types.optional(types.string, ''),
    done: types.optional(types.boolean, false),
    isChange: types.optional(types.boolean, false),
}).actions(self => ({
    setName(newName) {
        self.name = newName
    },
    setIsChange() {
        self.isChange = !self.isChange;
    },
    toggleDone() {
        self.done = !self.done
    }
}))

const RootStore = types.model({
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
    }
}))
    .actions(self => ({
        addTodo(id, name) {
            let idForKey = randomId(4);
            self.todos.set(id, Todo.create({name, idForKey}))
        }
    }))

export const store = RootStore.create({})

window.store = store;