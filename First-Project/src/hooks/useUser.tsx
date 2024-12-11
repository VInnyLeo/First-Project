import { useEffect, useState } from "react";
import { User } from "../interfaces/reques.response";

export default function useUser(){
    const [users, setusers] = useState<User[]>([]);

    useEffect(()=>{

    }, [])

    return{users}
}