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
                resolve(true); // Resolve the Promise with true if the token is valid
              })
              .catch((err) => {
                console.log(err);
                resolve(false); // Resolve the Promise with false if the token is invalid
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
            //console.log(verified);
            if(!verified) {
                setIsLoggedIn(false);
                setIsLoading(false);
            } else {
                setIsLoggedIn(verified);
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