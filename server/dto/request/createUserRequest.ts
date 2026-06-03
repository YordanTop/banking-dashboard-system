import { UserRole } from "../../model/enums/UserRole"

export interface CreateUserRequest{ 

    egn: string
    uic?: string
    fullnameLatin: string,
    email: string,
    phoneNumber: string,
    address: string,

    username: string,
    password: string
    
}
