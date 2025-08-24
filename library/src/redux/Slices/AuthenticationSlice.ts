import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { User, LoginUserPayload, RegisterUserPayload, FetchUserPayload } from '../../models/User';

import axios from "axios";

interface AuthenticationState {
    loggedInUser: User | undefined;
    profileUser: User | undefined;
    Loading: boolean;
    error: boolean;
    registerSuccess: boolean;
}

const initialState: AuthenticationState = {
    loggedInUser: undefined,
    profileUser: undefined,
    Loading: false,
    error: false,
    registerSuccess: false,
};

export const loginUser = createAsyncThunk(
    "auth/login",

    async(user:LoginUserPayload,thunkAPI) => {
        try {
            const req = await axios.post("http://localhost:8000/auth/login", user);
            return req.data.user;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const registerUser = createAsyncThunk(
    "auth/register",

    async(user:RegisterUserPayload,thunkAPI) => {
        try {
            const req = await axios.post("http://localhost:8000/auth/register", user);
            return req.data.user;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const fetchUser = createAsyncThunk(
    "auth/fetch",
    async(payload: FetchUserPayload, thunkAPI) => {
        try {
            const req = await axios.get(`http://localhost:8000/auth/users/${payload.userId}`);
            const user=req.data.user;
            return{
                user,
                property: payload.property
            }
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const updateUser=createAsyncThunk(
    "auth/update",
    async(payload:User,thunkAPI) => {
        try {
            const req = await axios.put(`http://localhost:8000/auth/users/`, payload);
            return req.data.user;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }

)



export const AuthenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        resetRegisterSuccess(state){
            state={
                ...state,
                registerSuccess: false
            }
            return state;
        },
        resetUser(state, action: PayloadAction<string>) {
            state = {
                ...state,
                [action.payload]: undefined
            }
            return state;
        }
    },
    extraReducers: (builder) => {
        //pending logic
        builder.addCase(loginUser.pending, (state) => {
            state={
                ...state,
                Loading: true,
                error: false,
            
            }
            return state;
        });
        builder.addCase(registerUser.pending, (state) => {
            state={
                ...state,
                Loading: true,
                error: false,

               
            }
            return state;
        });

        builder.addCase(fetchUser.pending,(state,action) => {
            state={
                ...state,
                Loading: true,
                error: false,
            }
            return state;
        });
        builder.addCase(updateUser.pending,(state,action) => {
            state={
                ...state,
                Loading: true,
                error: false,
               
            }
            return state;
        });





        //resolved logic
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state={
                ...state,
                Loading: false,
                loggedInUser: action.payload,
            
            }
            return state;
        });
        builder.addCase(registerUser.fulfilled, (state) => {
            state={
                ...state,
                Loading: false,
                registerSuccess: true,
                
            }
            return state;
        });
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state={
                ...state,
                Loading: false,
                [action.payload.property]: action.payload.user
            }
            return state;
        });
        builder.addCase(updateUser.fulfilled,(state,action) => {
            state={
                ...state,
                Loading: false,
                loggedInUser: action.payload,
                profileUser: action.payload
            }
            return state;
        });

        //rejected logic
        builder.addCase(loginUser.rejected, (state,action) => {
            state={
                ...state,
            
                error: true,
                Loading: false,
            }
            return state;
        });
        builder.addCase(registerUser.rejected, (state,action) => {
            state={
                ...state,
                Loading: false,
                error: true,
                
            }
            return state;
        });
        builder.addCase(fetchUser.rejected, (state,action) => {
            state={
                ...state,
                Loading: false,
                error: true,
            }
            return state;
        });
        builder.addCase(updateUser.rejected, (state,action) => {
            state={
                ...state,
                Loading: false,
                error: true,
            }
            return state;
        });


    }
});

export const {resetRegisterSuccess,resetUser} = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;
