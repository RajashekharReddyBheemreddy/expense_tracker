import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    transcations: []
}

export const counterSlice = createSlice({
  name: 'tracker',
  initialState,
  reducers: {
    income: (state, action) => {
        state.transcations.push(action.payload)
    },
    expense:(state, action)=>{
        state.transcations.push(action.payload)
    },
    deleteH:(state, action) => {
        state.transcations = state.transcations.filter(element => element.id !== action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { income, expense, deleteH} = counterSlice.actions

export default counterSlice.reducer