import { createSlice, nanoid } from "@reduxjs/toolkit";

//function to generate reducer, action and action creators 
export const taskSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        //add a task using nanoid for id
        addTask: (state, action) =>{
            //nanoid generate a random id 
            console.log("nanoid", nanoid());
            console.log("action payload", action.payload.id);
            const newTask = {
                id: nanoid(),
                name: action.payload.task,
                description: action.payload.desc,
                isChecked:false,
                category: action.payload.category,
            };
            state.push(newTask);
        },
        //delete a task with the payload id
        deleteTask: (state, action) => {
            console.log("id of the task", action.payload.id);
            console.log("state to delete", state);
            //use filter to exclude the item with our id 
            return state.filter((item) => item.id !== action.payload.id);
        },
    },
});

//export our actions of our slice, this is what we'll call to execute slice's actions
export const { addTask, deleteTask } = taskSlice.actions;
//export the reducer for our store file 
export default taskSlice.reducer;