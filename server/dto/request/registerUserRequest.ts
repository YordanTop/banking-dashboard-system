import { UserRole } from "../../model/enums/UserRole"

export interface RegisterUserRequest{ 

    egn: string
    uic?: string
    fullnameLatin: string,
    email: string,
    phoneNumber: string,
    address: string,

    username: string,
    password: string
    
}
