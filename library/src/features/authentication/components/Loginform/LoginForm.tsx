import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../../redux/Slices/AuthenticationSlice';
import './LoginForm.css';
import type { User } from '../../../../models/User';
// Import RootState and AppDispatch from your store setup
import type { RootState, AppDispatch } from '../../../../redux/ReduxStore';

interface LoginFormProps{
    toggleRegister():void;
}

export const LoginForm: React.FC<LoginFormProps> = ({toggleRegister}) => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const auth = useSelector((state: RootState) => state.authentication);
    const dispatch: AppDispatch = useDispatch();
    
    const handleLoginUser = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (emailRef.current && passwordRef.current) {
            dispatch(
                loginUser({
                    email: emailRef.current.value,
                    password: passwordRef.current.value,
                })
            );
        }
    };
    
    return (
        <form className="login-form">
            <h2>Please Login</h2>
            {auth.error ? (
                <p className="login-form-error">Invalid email or password</p>
            ) : null}
            <div className="login-form-input-group">
                <h6>Email</h6>
                <input
                    className="login-form-input"
                    placeholder="email"
                    name="email"
                    type="email"
                    required
                    ref={emailRef}
                />
            </div>
            <div className="login-form-input-group">
                <h6>Password</h6>
                <input
                    className="login-form-input"
                    placeholder="password"
                    name="password"
                    type="password"
                    required
                    ref={passwordRef}
                />
            </div>
            <button className="login-form-submit" onClick={handleLoginUser}>
                Login
            </button>
            <p>
                Don't have an account?
                <span className="login-form-register" onClick={toggleRegister}>Create One here</span>
            </p>
        </form>
    );
};