

import { createSlice } from "@reduxjs/toolkit";

// step 3 for redux - create slices for each components 
const DepSlice = createSlice({

    name: 'dep',

    initialState: {
        depState: {
            did: 101,
            deptName: 'HR'
        }
    },

    reducers: {
        getDepById: (state, action) => {
            state.depState = action.payload;
        }
        // more methods will be added 
    }
});

export const { getDepById } = DepSlice.actions;

export default DepSlice.reducer;