import { Children, createContext, PropsWithChildren, useContext, useState } from "react";

enum StateTest {
    'checking',
    'login',
    'closed',
    'authenticated'
}

interface AuthState{
    state: StateTest;
    loginEmailWithPassword: (mail: string, password: string) => void;
    logOut: () => void
}

//es como una tienda, debe ser exportable para poder usarlo 
export const AuthContext = createContext ({} as AuthState);

export const useAuthContext = () => useContext(AuthContext)
//PropsWithChildren tipo de dato q nos dice que va a ser un componenete hijo
export const AuthProvider = ({children}:PropsWithChildren) => {

    const [state, setstate] = useState(StateTest.checking);
    //funcion para simular login, ojo que tambien se debe poner los parametros arriba AuthState
    const loginEmailWithPassword = (email: string, password: string) => {
        setstate(StateTest.login)
    }
    //nunca olvidarse de llamar o declarar arriba
    const logOut = () => {
        setstate(StateTest.closed)
    }

    return (
        <AuthContext.Provider value={{
            state: state,
            loginEmailWithPassword,
            logOut
        }}>
            {children}
        </AuthContext.Provider>
        
    )

}

