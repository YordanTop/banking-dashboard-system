
import { UserRepository } from "../repository/userRepository";

import { User } from "../model/User";
import { UserRole } from "../model/enums/UserRole";

export class UserService{

    private userRepository: UserRepository;

    constructor( ){
        this.userRepository = new UserRepository();
    }

    async createUser(user: User){

        //@todo handlers for the user parameter

        this.userRepository.createUser(user)

    }

    async updateUser(user: User){

        //@todo handlers for the user parameter

        this.userRepository.updateUser(user)

    }

    async changePassword(username: string, newPassword: string){

        //@todo handlers for the password parameter


    }

    async changeAuthorization(username: string, newRole: UserRole){

        //@todo handlers for the auth parameter


    }

    async getUserByName(username: string){

        //@todo handlers for the user parameter


    }

    async getAllUsers(){

        //@todo handlers for the users parameter

    
    }

    async deleteUser(user: User){

        //@todo handlers for the user parameter


    }
    


}