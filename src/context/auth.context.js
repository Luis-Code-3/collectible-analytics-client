import { useEffect, createContext, useState } from "react";
import { baseUrl } from "../services/baseUrl";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    const verifyToken = (token) => {
        return new Promise((resolve, reject) => {
            axios
              .post(`${baseUrl}/users/verify`, {}, {
                headers: {
                  authorization: `Bearer ${token}`,
                },
              })
              .then((response) => {
                console.log(response.data);
                // console.log("hit");
                resolve({isValid: true, data: response.data}); // Resolve the Promise with true if the token is valid
              })
              .catch((err) => {
                console.log(err);
                resolve({isValid: false, data: err.response.data}); // Resolve the Promise with false if the token is invalid
              });
          });
    }

    const logout = () => {
        localStorage.clear();
        setIsLoggedIn(false);
        navigate("/");
      };


    const value = {
        isLoggedIn,
        setIsLoggedIn,
        verifyToken,
        logout,
        isLoading,
        setIsLoading
    }

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if(!token) {
            setIsLoggedIn(false);
            setIsLoading(false);
            return;
        }

        (async () => {
            const verified = await verifyToken(token)
            //console.log("verified",verified.isValid);
            if(!verified.isValid) {
                setIsLoggedIn(false);
                setIsLoading(false);
            } else {
                setIsLoggedIn(verified.data);
                setIsLoading(false);
            }
          })();

    }, [])

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}