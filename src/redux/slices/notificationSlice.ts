import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

type Notification ={
    id: string;
    title: string
    message: string;
}

type notificationState = {
 notifications: Notification[]
}

const initialState : notificationState = {
    notifications: []
}

const notificationSlice = createSlice({
    name: "notifications",
    initialState,
    reducers: {
        addNotification: ( state, action: PayloadAction<{ title: string,  message: string }>) => {
            state.notifications.push({
                id: nanoid(),
                title: action.payload.title,
                message: action.payload.message
            })
        },

        deleteNotification: ( state, action: PayloadAction< { id: string }> ) => {
            state.notifications = state.notifications.filter( n => n.id !== action.payload.id )
        }
    }
})

export const { addNotification, deleteNotification } = notificationSlice.actions;

export default notificationSlice.reducer;