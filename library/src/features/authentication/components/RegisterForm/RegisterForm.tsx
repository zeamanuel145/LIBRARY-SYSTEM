import React, { useEffect, useRef } from 'react';

import './RegisterForm.css';
import { useSelector, useDispatch } from 'react-redux';
import { resetRegisterSuccess, registerUser } from '../../../../redux/Slices/AuthenticationSlice';
import type { RootState, AppDispatch } from '../../../../redux/ReduxStore';

interface RegisterFormProps {
    toggleLogin(): void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ toggleLogin }) => {

    const authState = useSelector((state: RootState) => state.authentication);
    const dispatch = useDispatch<AppDispatch>();
    const firstRef = useRef<HTMLInputElement>(null);
    const lastRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (
            firstRef.current &&
            lastRef.current &&
            emailRef.current &&
            passwordRef.current
        ) {
            dispatch(
                registerUser({
                    firstName: firstRef.current.value,
                    lastName: lastRef.current.value,
                    email: emailRef.current.value,
                    password: passwordRef.current.value,
                    type: 'PATRON' // Default type, can be changed based on requirements
                })
            );
        }
    };

    useEffect(() => {
        return () => {
            dispatch(resetRegisterSuccess());
        };
    }, [dispatch]);

    return (
        <form className="register-form">
            <h2>Enter your Information</h2>
            {authState.error ? (
                <p className="register-form-error">There was an error</p>
            ) : null}
            <div className="register-form-name-group">
                <div className="register-form-name-input-group">
                    <h6>First Name</h6>
                    <input className="register-form-input-name" placeholder="first" name="first" required ref={firstRef} />
                </div>
                <div className="register-form-name-input-group">
                    <h6>Last Name</h6>
                    <input className="register-form-input-name" placeholder="last" name="last" required ref={lastRef} />
                </div>
            </div>
            <div className="register-form-input-group">
                <h6>Email</h6>
                <input className="register-form-input" placeholder="email" name="email" type="email" required ref={emailRef} />
            </div>
            <div className="register-form-input-group">
                <h6>Password</h6>
                <input className="register-form-input" placeholder="password" name="password" type="password" required ref={passwordRef} />
            </div>
            <button className="register-form-submit" onClick={handleRegister}>
                Register
            </button>
            {authState.registerSuccess ? (
                <p>
                    Registered Successfully.
                    <span className="register-form-login" onClick={toggleLogin}>Login here.</span>
                </p>
            ) : null}
        </form>
    );
};