import { useState, useEffect, createContext } from 'react'
import { User, Auth } from '../api';
import { hasExpiredToken } from '../utils'

export const AuthContext = createContext();
const userController = new User();
const authController = new Auth();

export function AuthProvider(props) {
    const { children } = props;
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(async () => {
        const accessToken = authController.getAccessToken();
        const refreshToken = authController.getRefreshToken();

        if (!accessToken || !refreshToken) {
            Logout();
            setLoading(false)
            return;
        }

        if (hasExpiredToken(accessToken)) {
            //Ha caducado
            if (hasExpiredToken(refreshToken)) {
                Logout();
            } else {
                await reLogin(refreshToken)
            }
        } else {
            await login(accessToken)
        }

        setLoading(false);
    }, []);


    const reLogin = async (refreshToken) => {
        try {
            const { accessToken } = await authController.refreshAccessToken(refreshToken);

            authController.setAccesToken(accessToken);
            await login(accessToken)
        } catch (error) {
            console.error(error);
        }
    }

    const login = async (accessToken) => {
        try {
            const response = await userController.getMe(accessToken);
            delete response.password;
            console.log(response);
            setUser(response)
            setToken(accessToken);

        } catch (error) {
            console.error();
        }
    }

    const Logout = () => {
        setUser(null);
        setToken(null);
        authController.removeTokens();
    }

    const data = {
        accessToken: token,
        user,
        login,
        Logout
    };

    if (loading) return null;

    return <AuthContext.Provider value={data}>{children}</ AuthContext.Provider>

}