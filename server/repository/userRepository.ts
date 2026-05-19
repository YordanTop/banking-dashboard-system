import { userModel} from "../model/User";
import { UserCredentials } from "../model/UserCredentials";


export class UserRepository{

    async getUserCredentialsByUsername(username: string):Promise<UserCredentials | null>{
        let user = await userModel.find({username: username}).lean<UserCredentials>();
        return user;
    }


}