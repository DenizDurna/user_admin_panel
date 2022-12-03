import { createSlice } from '@reduxjs/toolkit'

export const signinSlice = createSlice({
  
  name: 'signin',
  initialState: {
    mail: "",
    password: "",
    visibleValue:"",

  },
  reducers: {
    setMail: (state, action) => {
      state.mail = action.payload
    },
    setPassword: (state, action) => {
      state.password = action.payload
    },
    setVisibleValue: (state, action) => {
      state.visibleValue = action.payload
    },
}})


export const { setMail,setPassword,setVisibleValue} = signinSlice.actions

export default signinSlice.reducer