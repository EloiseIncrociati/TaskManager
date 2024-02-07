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
            console.log("action payload", action.payload);
            const newTask = {
                id: nanoid(),
                name: action.payload.task,
                description: action.payload.desc,
                isChecked:false,
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
        //update the state of our checkbox action
        // updateCheckbox: (state, action) => {
        //   const { id, isChecked } = action.payload;
          
        //   // Ensure tasks is an array before using map
        //   state.tasks = state.tasks || [];
    
        //   // Use Immer to update the checkbox state for the task with the specified id
        //   const taskIndex = state.tasks.findIndex(task => task.id === id);
        //   if (taskIndex !== -1) {
        //     state.tasks[taskIndex].isChecked = isChecked;
        //   }
        // },
    },
});

//export our actions of our slice, this is what we'll call to execute slice's actions
export const { addTask, deleteTask } = taskSlice.actions;
//export the reducer for our store file 
export default taskSlice.reducer;