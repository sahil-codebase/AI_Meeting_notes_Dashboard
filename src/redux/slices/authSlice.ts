import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  user: string | null
}

const initialState: AuthState = {
  user: localStorage.getItem('user')
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.user = action.payload

      localStorage.setItem('user', action.payload)
    },

    logout: (state) => {
      state.user = null

      localStorage.removeItem('user')
    }
  }
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
