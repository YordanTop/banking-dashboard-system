import mongoose, { ClientSession } from "mongoose";
import { userModel, User } from "../model/User";
import { userCredentialsModel, UserCredentials } from "../model/UserCredentials";

export class UserRepository {

    async createUser(user: User, transactionSession?: ClientSession) {
        const userFromDatabase = await userModel.findOne({ credentialID: user.credentialID }).lean<User | null>();

        if (userFromDatabase)
            throw new Error("User already exists with this credential reference.");

        const newUser = new userModel(user);
        await newUser.save({ session: transactionSession });
    }

    async createUserCredentials(userCredentials: UserCredentials, transactionSession?: ClientSession) {
        const userCredentialsFromDatabase = await userCredentialsModel.findOne({ username: userCredentials.username }).lean<UserCredentials | null>();

        if (userCredentialsFromDatabase)
            throw new Error("User credentials already exist for this username.");

        const newUserCredentials = new userCredentialsModel(userCredentials);
        await newUserCredentials.save({ session: transactionSession });
    }

    async getAllUsers(): Promise<Array<User> | null> {
        return await userModel.find().lean<User[]>();
    }

    async getUserCredentialsByUsername(username: string): Promise<UserCredentials | null> {
        return await userCredentialsModel.findOne({ username }).lean<UserCredentials | null>();
    }

    async getUserByUsername(username: string): Promise<User | null> {
        const credentials = await userCredentialsModel.findOne({ username }).lean<UserCredentials | null>();
        if (!credentials)
            return null;

        return await userModel.findOne({ credentialID: credentials._id }).lean<User | null>();
    }

    async updateUser(user: User): Promise<User | null> {
        const userFromDatabase = await userModel.findById(user._id);
        if (!userFromDatabase)
            return null;

        userFromDatabase.egn = user.egn;
        userFromDatabase.address = user.address;
        userFromDatabase.uic = user.uic;
        userFromDatabase.fullnameLatin = user.fullnameLatin;
        userFromDatabase.email = user.email;
        userFromDatabase.phoneNumber = user.phoneNumber;

        const updatedUser = await userFromDatabase.save();
        return updatedUser.toObject();
    }

    async updatePasswordByUsername(username: string, newPassword: string): Promise<UserCredentials | null> {
        const credentials = await userCredentialsModel.findOne({ username });
        if (!credentials)
            return null;

        credentials.password = newPassword;
        const updatedCredentials = await credentials.save();
        return updatedCredentials.toObject();
    }

    async updateRoleByUsername(username: string, newRole: string): Promise<UserCredentials | null> {
        const credentials = await userCredentialsModel.findOne({ username });
        if (!credentials)
            return null;

        credentials.role = newRole as any;
        const updatedCredentials = await credentials.save();
        return updatedCredentials.toObject();
    }

    async deleteUser(user: User, transactionSession?: ClientSession): Promise<boolean> {
        const userFromDatabase = await userModel.findById(user._id).session(transactionSession ?? null);
        if (!userFromDatabase)
            return false;

        await userModel.deleteOne({ _id: user._id }).session(transactionSession ?? null);
        await userCredentialsModel.deleteOne({ _id: user.credentialID }).session(transactionSession ?? null);
        return true;
    }
}
