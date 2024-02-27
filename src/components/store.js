import { configureStore } from '@reduxjs/toolkit'
import ExpenseSlice from './ExpenseSlice'

export const store = configureStore({
  reducer: {
    tracker: ExpenseSlice
  },
})