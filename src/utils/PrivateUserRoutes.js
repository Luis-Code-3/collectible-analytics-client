import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const PrivateUserRoutes = () => {

    const {isLoggedIn} = useContext(AuthContext);

    return (
        isLoggedIn ? <Outlet/> : <Navigate to='/login'/>
    )

};

export default PrivateUserRoutes;