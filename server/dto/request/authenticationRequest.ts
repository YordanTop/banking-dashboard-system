import { Request } from "express";
import { UserRole } from "../../model/enums/UserRole";

export interface UserCredentials {
    id: string | number;
    username: string;
    role: UserRole;      
    [key: string]: any; 
}

export interface AuthenticationRequest extends Request{
    user?: UserCredentials
}

