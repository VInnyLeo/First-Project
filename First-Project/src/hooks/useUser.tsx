import { useEffect, useState } from "react";
import { User } from "../interfaces/reques.response";
import { loadUserAction } from "../actions/load-user";

export default function useUser(){
    const [users, setusers] = useState<User[]>([]);

    useEffect(()=>{
        loadUserAction.then(users => setusers(users))
    }, [])

    return{users}
}