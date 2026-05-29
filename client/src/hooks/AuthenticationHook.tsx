import { useState } from "react";
import { axiosInstance } from "../config/AxiosConfig";


/** authState checks if the user currently has authentication info and if it does
 *  it caches the current users session! */
export function useAuthState(){


    const[cacheAuth, setCacheAuth] = useState<object|undefined>(undefined);
    const[isDataLoaded, setIsDataLoaded] = useState(false);
    const[isRequestCrashed, setIsRequestCrashed] = useState(false);
    
    async function checkAuthState(){

        try{
            const serverResponse = await axiosInstance.get("auth/me");

            const credentials = serverResponse.data?.credentials;
            
            

            if(!credentials){
                setCacheAuth({});
                setIsDataLoaded(true);
                setIsRequestCrashed(false);
                return;
            }

            const userData = {
                    id: credentials.id ,
                    username: credentials.username,
                    role: credentials.role,
                    iat: credentials.iat,
                    exp: credentials.exp
            };

            setIsDataLoaded(true);
            setIsRequestCrashed(false);
            setCacheAuth(userData);
        }catch(err){
            console.log(`Data has fail to be captured: ${err}`)
            setCacheAuth({});
            setIsDataLoaded(true);
            setIsRequestCrashed(true);
        }

    }


    return [cacheAuth, checkAuthState, isDataLoaded, isRequestCrashed] as const;


}