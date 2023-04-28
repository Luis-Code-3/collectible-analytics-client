import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const ProtectedRoutes = () => {

    const {isLoggedIn, isLoading} = useContext(AuthContext);

    if(isLoading) {
        return <div>Loading...</div>
    }

    return (
        !isLoggedIn ? <Outlet/> : <Navigate to='/'/>
    )

};

export default ProtectedRoutes;