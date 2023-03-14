import API from "../common/api"
import { IUser } from "../types";

export const getUsers = async ():Promise<IUser[]> => {
    const response = await API.get('users');
    return response.data;
}