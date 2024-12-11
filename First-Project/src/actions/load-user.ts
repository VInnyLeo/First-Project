import axios from "axios";
import { ResUserList } from "../interfaces/reques.response";

export const loadUserAction = async () => {
    const {data} = await axios.get<ResUserList>('https://reqres.in/api/users?page=1')

    return data.data;
}