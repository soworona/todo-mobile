import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../screens/HomeScreen";

type TodoList = {
    todos: Task[]
}
const initialState: TodoList = {
    todos: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, {payload: {title, description, isComplete}}) => {
            state.todos.push({ title, description, isComplete})
        },
    }
})

export const addTodo = todoSlice.actions;

export default todoSlice.reducer