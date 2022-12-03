import { configureStore } from '@reduxjs/toolkit'
import generalSlice from './stores/generalSlice'
import signinSlice from './stores/signinSlice'
import newUserSlice from './stores/newUserSlice'

export default configureStore({
  reducer: {
    general: generalSlice,
    signin: signinSlice,
    newUser: newUserSlice,
  },
})