import {createSlice} from "@reduxjs/toolkit"

export interface UserState {
    UserName: string | undefined
    Token:  string | undefined
    Email:  string | undefined
  }
  
  const initialState: UserState = {
    UserName: undefined,
    Token: undefined,
    Email:  undefined
  }

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state,action) => {
            // state.Email = action.payload.Email;
            // state.UserName = action.payload.UserName;
            // state.Token = action.payload.Token;
            state = action.payload;
        },
        logout: (state) => {
            state = initialState;
        }
    }

})


export const { login, logout } = userSlice.actions

export default userSlice.reducer