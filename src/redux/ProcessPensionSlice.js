import { createSlice } from "@reduxjs/toolkit";
import Pension from "../components/models/Pension";

const ProcessPensionSlice=createSlice({
    name:'processPension',
    initialState:{

        processPensionState: new Pension(),
    },

    reducers:{

        getPensionServices :(state,action)=>{
            console.log('ProcessPensionSlice reducers getPensionService');
            state.processPensionState = action.payload;
        }
    }
});

export const{getPensionServices}=ProcessPensionSlice.actions;
export default ProcessPensionSlice.reducer;