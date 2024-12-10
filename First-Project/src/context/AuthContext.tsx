import { Children, createContext, PropsWithChildren, useContext, useState } from "react";

enum StateTest {
    'checking',
    'login',
    'closed',
    'authenticated'
}

//es como una tienda, debe ser exportable para poder usarlo 
export const AuthContext = createContext ({});

export const useAuthContext = () => useContext(AuthContext)
//PropsWithChildren tipo de dato q nos dice que va a ser un componenete hijo
export const AuthProvider = ({children}:PropsWithChildren) => {

    const [state, setstate] = useState(StateTest.checking);

    return (
        <AuthContext.Provider value={{
            stateValue: state
        }}>
            {children}
        </AuthContext.Provider>
    )

}

