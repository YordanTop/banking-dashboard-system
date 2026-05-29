import { useEffect, useState, type ReactNode } from "react";
import { AuthenticationContext, type UserAuthenticationContext } from "./AuthenticationContext";
import { useAuthState } from "../hooks/AuthenticationHook";


export default function AuthenticationProvider({children}:{children:ReactNode}){

    const [cacheAuthState, checkAuthState, isDataLoaded, isRequestCrashed] = useAuthState();

    const contextValue:UserAuthenticationContext = {
        authenticationCache: cacheAuthState,
        rewriteAuthenticationCache: checkAuthState,
        isDataLoaded: isDataLoaded,
        isRequestCrashed: isRequestCrashed
    }

    useEffect(() => {
             checkAuthState(); 
    }, []); 

    return(
        <>
        
            <AuthenticationContext.Provider value={contextValue}>

                {children}

            </AuthenticationContext.Provider>

        </>
    )

}