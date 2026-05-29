import { useContext, useEffect, useState, type ReactNode } from "react";
import { AuthenticationContext } from "../context/AuthenticationContext";
import { Navigate } from "react-router";

export function ProtectedRouter({children}:{children:ReactNode}){

    const authentication = useContext(AuthenticationContext);

        if(authentication?.isRequestCrashed == true){
            return <Navigate to="/login" replace />;
        }

        if(authentication?.isDataLoaded == false){
            return <div>Loading...</div>
        }
    
        //if the token is expired!
        if((authentication?.authenticationCache?.exp == undefined || authentication?.authenticationCache.exp <= (Date.now()/1000))){

            return <Navigate to="/login" replace />;
        }



    return children;
}