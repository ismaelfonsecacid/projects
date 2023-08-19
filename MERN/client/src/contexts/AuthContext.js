import { useState, useEffect, createContext } from 'react'

export const AuthContext = createContext();

export function AuthProvider(props) {
    const { children } = props;
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)

    useEffect(() => {
        //Check if the uses is logged or not




    }, [])

    const login = async (accessToken) => {
        try {
            setUser({ username: 'agustin' })
            setToken(accessToken);

        } catch (error) {
            console.error();
        }
    }

    const data = {
        accessToken: token,
        user,
        login
    }

    return <AuthContext.Provider value={data}>{children}</ AuthContext.Provider>

}