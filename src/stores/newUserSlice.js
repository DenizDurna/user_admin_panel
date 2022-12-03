import { createSlice } from "@reduxjs/toolkit";

export const newUserSlice = createSlice({
    name: "NewUser",
    initialState: {
        newId: "",
        newName: "",
        newEmail: "",
        newJob: "",
        newRole: "",
        newStatus: "OFLINE",
        newUrl: "",
        newPassword: "",
        controlPassword:"",
        newUser:"",
        status:true,
        refreshForm:true,
    },
    reducers: {
        setNewId:(state,action)=>{
            state.newId =action.payload
        },
        setNewName:(state,action)=>{
            state.newName =action.payload
        },
        setNewEmail:(state,action)=>{
            state.newEmail =action.payload
        },
        setNewJob:(state,action)=>{
            state.newJob =action.payload
        },
        setNewRole:(state,action)=>{
            state.newRole =action.payload
        },
        setNewUrl:(state,action)=>{
            state.newUrl =action.payload
        },
        setNewPassword:(state,action)=>{
            state.newPassword =action.payload
        },
        setControlPassword:(state,action)=>{
            state.controlPassword =action.payload
        },
        setNewUser:(state,action)=>{
            state.newUser =action.payload
        },
        setStaus:(state,action)=>{
            state.status =action.payload
        },
        setRefreshForm:(state)=>{
            state.refreshForm =!state.refreshForm
        },

    }
})

export const {setNewId, setNewName, setNewEmail, setNewJob, setNewRole, setNewUrl, setNewPassword,setControlPassword,setNewUser,setStaus,setRefreshForm} = newUserSlice.actions
export default newUserSlice.reducer