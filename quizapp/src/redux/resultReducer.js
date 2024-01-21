import { createSlice } from "@reduxjs/toolkit";

export const resultreducer = createSlice({
    name: 'result',
    initialState: {
        userId: null,
    },
    reducers: {
        setUserId: (state,action) => {
            state.userId = action.payload
        }
    }
})

export const {setUserId} = resultreducer.actions;
export default resultreducer.reducer;