import './LoginRegisterModal.css';
import type { AppDispatch, RootState } from '../../../../redux/ReduxStore';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDisplayLogin } from '../../../../redux/Slices/ModalSlice';
import { Modal } from '../../../../components';
import { LoginForm } from '../Loginform/LoginForm';
import { RegisterForm } from '../RegisterForm/RegisterForm';

export const LoginRegisterModal: React.FC = () => {
    const authState = useSelector((state: RootState) => state.authentication);
    const dispatch: AppDispatch = useDispatch();

    const [login, setLogin] = useState<boolean>(true);

    const closeModal = () => {
        dispatch(setDisplayLogin(false));
    };

    const toggleLogin = () => {
        setLogin(!login);
    };

    useEffect(() => {
        if (authState.loggedInUser) {
            closeModal();
        }

        return () => {
            if (authState.loggedInUser) {
                localStorage.setItem('userId', String(authState.loggedInUser._id));
            }
        };
    }, [authState.loggedInUser]);

    return (
       <Modal
       content={login ? <LoginForm toggleRegister={toggleLogin}/> :<RegisterForm toggleLogin={toggleLogin}/>}
       toggleModal={closeModal}
       />
    );
};

