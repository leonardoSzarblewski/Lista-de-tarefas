import React, { createContext, useContext, useState } from "react"


type AuthContextProps = {
    email: string | undefined,
    accessToken: string | undefined,

    login(email: string, password: string): void
    logout(): void
}

const AuthContext = createContext({} as AuthContextProps)



export function AuthProvider({ children }:React.PropsWithChildren) {

    const [email, setEmail] = useState<string>()
    const [accessToken, setAccessToken] = useState<string>()

    const logout = () => {
        setEmail(undefined)
        setAccessToken(undefined)
    }   
    
    const login = (email: string, password: string) => {
        console.log(email, password);
        

        setEmail(email)
        setAccessToken(crypto.randomUUID())
        
    }

    return(
        <AuthContext.Provider value={{ login, logout, email, accessToken }}>
            { children }
        </AuthContext.Provider>
    )
}

export function useAuthContext() {
    return useContext(AuthContext)
}

export function useIsAuthenticated() {
    const { accessToken } = useAuthContext()

    return !!accessToken
}