import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../screens/HomeScreen";

type TodoState = {
    todos: Task[],
    selectedTodo: Task | null
}
const initialState: TodoState = {
    todos: [],
    selectedTodo: null
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<{title: string, description: string}>) => {
            state.todos.push({ 
                title: action.payload.title, 
                description:action.payload.description, 
                isComplete:false })
        },
        setSelectedTodo: (state, action: PayloadAction<Task>) =>{
            state.selectedTodo = action.payload;
        }
    }
})

export const { addTodo, setSelectedTodo } = todoSlice.actions;

export default todoSlice.reducer;