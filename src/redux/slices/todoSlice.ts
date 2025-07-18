import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../screens/HomeBottomTab/TodoScreen";
import { act } from "react";

type TodoState = {
    todos: Task[],
    selectedTodoId: string
}
const initialState: TodoState = {
    todos: [],
    selectedTodoId: ''
    
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<{title: string, description: string}>) => {
            state.todos.push({ 
                id: nanoid(),
                title: action.payload.title, 
                description:action.payload.description, 
                isComplete:false })
        },
        getTodoById: (state, action: PayloadAction<string>) =>{
            state.selectedTodoId = action.payload
        },
        toggleTodoStatus: (state, action: PayloadAction<{id: string, isComplete: boolean}>) =>{
            const todo = state.todos.find(t => t.id === action.payload.id)
            if(todo){
                todo.isComplete = action.payload.isComplete;  
            }    
        },
        deleteTodo: (state, action: PayloadAction<{id : string}>) => {
            const toDelete = state.todos.find(t => t.id === action.payload.id)
            if(toDelete){
                state.todos.filter(t => t !== toDelete);
            }

        }
    }
})

export const { addTodo, getTodoById, toggleTodoStatus, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;