import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { AuthenticationContext } from "../context/AuthenticationContext";

/**RedirectNonLoggedInUser redirects the the users that dont have authentication token.*/
export async function RedirectNonLoggedInUser(pathRedirection:string){
    
    const navigation = useNavigate();

    const authentication = useContext(AuthenticationContext);

    useEffect(()=>{
        if(authentication?.authenticationCache?.id!= null){

            navigation(pathRedirection, {replace:true});
        }
    },[authentication,navigation]);
}