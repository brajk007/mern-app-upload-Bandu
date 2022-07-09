import { createSlice } from "@reduxjs/toolkit";

const initialState={
     users:null
}

export const userSlice = createSlice({
        name:'user',
        initialState,
        reducers:{
            authDispatch:(state,action)=>{
              state.users = action.payload
            }
        }
})

export const {authDispatch} = userSlice.actions;
export default userSlice.reducer;