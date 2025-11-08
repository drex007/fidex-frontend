import { configureStore } from '@reduxjs/toolkit'
import adminReducer from './admin.reducer'
import userReducer from './user.reducer'
export const store = configureStore({
  reducer: {
    admin: adminReducer,
    user: userReducer
  }
})