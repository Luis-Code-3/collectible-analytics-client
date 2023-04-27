import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const ProtectedRoutes = () => {

    const {isLoggedIn} = useContext(AuthContext);

    return (
        !isLoggedIn ? <Outlet/> : <Navigate to='/'/>
    )

};

export default ProtectedRoutes;