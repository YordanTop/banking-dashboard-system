import React from "react";

export interface UserAuthenticationContext {

    authenticationCache?: {
        id?: string,
        username?: string,
        role?: string,
        iat?: number,
        exp?: number,
    },


    rewriteAuthenticationCache: () => Promise<void>,

    isDataLoaded:boolean,

    isRequestCrashed: boolean

}


export const AuthenticationContext = React.createContext<UserAuthenticationContext | undefined>(undefined);

