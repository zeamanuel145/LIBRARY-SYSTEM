import React,{useRef} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import{Search,Book }  from '@mui/icons-material';
import './Navbar.css';
import type  { AppDispatch,RootState } from '../../../../redux/ReduxStore';
import { setDisplayLogin } from '../../../../redux/Slices/ModalSlice';

export const Navbar:React.FC=()=>{
    const searchRef = useRef<HTMLInputElement>(null);
    const authState=useSelector((state:RootState)=>state.authentication);
    const navigate=useNavigate();
    const dispatch:AppDispatch=useDispatch();

    const handleEnterKey=(e:React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key==="Enter" && searchRef&&searchRef.current&&searchRef.current.value.length>0){
         navigate(`/catalog?barcode=${searchRef.current.value}&title=${searchRef.current.value}&description=${searchRef.current.value}`);
         searchRef.current.value="";
        }
    }

    const handleSearchIconClicked=()=>{
        if(searchRef&&searchRef.current&&searchRef.current.value.length>0){
            navigate(`/catalog?barcode=${searchRef.current.value}&title=${searchRef.current.value}&description=${searchRef.current.value}`);
            searchRef.current.value="";
        }
    }

    const navigateProfile=()=>{
        if(authState.loggedInUser){
            navigate(`/profile/${authState.loggedInUser._id}`);
        }
    }

    const toggleLogin=()=>{
        dispatch(setDisplayLogin(true));
    }

    return(
    <nav className="navbar">
        <Link to="/" className="navbar-logo-section">
            <Book sx={{
                fontSize:"3rem"
            }} />
            <h3>My Library</h3>
        </Link>
        <div className="navbar-option-section">
            <Link to="/catalog" className="navbar-option navbar-link">
                <h3>View Catalog</h3>
            </Link>
            <div className="navbar-search-box">
                <input
                    className="navbar-search-input"
                    placeholder="Search Catalog"
                    onKeyDown={handleEnterKey}
                    ref={searchRef}
                />
                <Search onClick={handleSearchIconClicked}
                sx={{
                    cursor:"pointer",
                    fontSize:"2rem"
                }}
                 />
            </div>
            {
                authState.loggedInUser?
                <div className="navbar-option" onClick={navigateProfile}>
                    <h2>{authState.loggedInUser.firstName}'s Account</h2>
                </div>
                :
                <div className="navbar-option" onClick={toggleLogin}>
                    <h2>Login</h2>
                </div>
            }
        </div>
     </nav>
    )
}