import { createSlice } from '@reduxjs/toolkit'

export const generalSlice = createSlice({
  
  name: 'general',
  initialState: {
    login: false,
    sign: true,
    users: "",
    loginUser: "",
    alert:"",
    loginStatus:"Not Login"
  },
  reducers: {
    setLogin: (state,action) => {
      state.login = action.payload
    },
    setSign: (state,action) => {
      state.sign = action.payload
    },

    setUsers: (state, action) => {
      state.users = action.payload
    },

    setLoginUser: (state, action) => {
      state.loginUser = action.payload
    },
    setAlert: (state, action) => {
      state.alert = action.payload
    },
    setLoginStatus: (state,action) => {
      state.loginStatus = action.payload 
    },
  },
})


export const { setLogin, setSign,setUsers,setLoginUser,setAlert,setLoginStatus} = generalSlice.actions

export default generalSlice.reducer