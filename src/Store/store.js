import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./signupSlice";
import {loginSlice} from './loginSlice'
import { emailSlice } from "./EmailAuth";
const store=configureStore({
    reducer:{
        auth:authSlice.reducer,
        login:loginSlice.reducer,
        email:emailSlice.reducer
    }
})
export default store