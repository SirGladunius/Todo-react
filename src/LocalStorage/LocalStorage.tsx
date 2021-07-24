import {Todo} from "../core/types/todo.type";

class LocalStorageService {
    static getTodos(): Todo[] {

        const todoList = localStorage.getItem('todos')

        if(todoList){
            return JSON.parse(todoList)
        }

        return []
    }

    static setTodos(todos: Todo[]) {
        let todosLocal = JSON.stringify(todos)
        localStorage.setItem('todos', todosLocal)
    }
}

export default LocalStorageService