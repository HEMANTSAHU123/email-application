import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./signupSlice";
import {loginSlice} from './loginSlice'
const store=configureStore({
    reducer:{
        auth:authSlice.reducer,
        login:loginSlice.reducer
    }
})
export default store