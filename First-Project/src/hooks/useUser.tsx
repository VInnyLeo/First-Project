import { useEffect, useState } from "react";
import { User } from "../interfaces/reques.response";
import { loadUserAction } from "../actions/load-user";

export default function useUser(){
    //llamamos a la interface que creamos  <User[]>
    const [users, setusers] = useState<User[]>([]);
    //cuando no hay nada en los corchetes significa
    //cuando se ejecuta toda la carga se ejecuta el efecto
    useEffect(()=>{
        loadUserAction().then(users => setusers(users))
    }, [])

    return{users}
}