import { createSlice, nanoid } from "@reduxjs/toolkit";

//function to generate reducer, action and action creators 
export const categorySlice = createSlice({
    name: "categories",
    initialState: [],
    reducers: {
        //add a category using nanoid for id
        addCategory: (state, action) =>{
            //nanoid generate a random id 
            console.log("nanoid", nanoid());
            console.log("action payload", action.payload);
            const newCategory = {
                id: nanoid(),
                name: action.payload.category,
                color: action.payload.color,
            };
            state.push(newCategory);
        },
    },
});

//export our actions of our slice, this is what we'll call to execute slice's actions
export const { addCategory } = categorySlice.actions;
//export the reducer for our store file 
export default categorySlice.reducer;