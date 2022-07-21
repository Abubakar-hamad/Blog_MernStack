import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import AuthService from './AuthService'



const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user:user ? user :null,
    isSuccess:false , 
    isLoading:false ,
    isError:false ,
    message:''
}

export const SignUp = createAsyncThunk('auth/signup' , async(user , thunkAPI)=>{
    try {
        return await AuthService.createAccount(user)
    } catch (error) {
        const message = (error.response  && error.response.data && error.response.data.message ) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const login = createAsyncThunk('auth/login' , async(user  , thunkAPI)=>{
    try {
        return await AuthService.getAccount(user)
    } catch (error) {
        const message = (error.response  && error.response.data && error.response.data.message ) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset:(state)=>{
        state.isSuccess=false
        state.isLoading=false
        state.isError=false
        state.message=''
    }
  },

  extraReducers:(klick)=>{
    klick 

    // register
    .addCase(SignUp.pending , (state)=>{
        state.isLoading = true
    }) 
    .addCase(SignUp.fulfilled , (state , action)=>{
        state.isLoading =false
        state.isSuccess = true
        state.user = action.payload
    })
    .addCase(SignUp.rejected , (state , action)=>{
        state.isError = true
        state.isSuccess = false 
        state.message = action.payload
        state.user = null
    })


    // login

    .addCase(login.pending , (state)=>{
        state.isLoading = true
    }) 
    .addCase(login.fulfilled , (state , action)=>{
        state.isLoading =false
        state.isSuccess = true
        state.user = action.payload
    })
    .addCase(login.rejected , (state , action)=>{
        state.isError = true
        state.isSuccess = false 
        state.message = action.payload
        state.user = null
    })
   
  }
})


export const { reset } = AuthSlice.actions

export default AuthSlice.reducer