import {useState,useEffect} from "react";
import Homepage from "./pages/Homepage/Homepage";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./redux/ReduxStore";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import LayoutPage from "./pages/LayoutPage/LayoutPage";
import { fetchUser } from "./redux/Slices/AuthenticationSlice";
import ProfilePage from "./pages/ProfilePage/ProfilePage";



function App() {


  const loggedInUser = useSelector((state: RootState) => state.authentication.loggedInUser);
  const dispatch:AppDispatch=useDispatch()

  useEffect(() => {
    let userId = localStorage.getItem('userId');
    if(userId && !loggedInUser){
      dispatch(fetchUser({ userId, property: 'loggedInUser' })); // Assuming fetchUser expects an object with userId and property
    }


    console.log(loggedInUser);
  }, [loggedInUser]);

  return(
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />} />
        <Route path="" element={<Homepage />} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
       
      </Routes>
    </BrowserRouter>
  )

   

}

export default App
