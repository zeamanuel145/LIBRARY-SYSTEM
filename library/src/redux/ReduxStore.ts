import { configureStore } from '@reduxjs/toolkit';  
import authenticationReducer from './Slices/AuthenticationSlice';
import modalReducer from './Slices/ModalSlice';

export const store=configureStore({
    reducer:{
        authentication: authenticationReducer,
        modal: modalReducer
    }
})


export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;
