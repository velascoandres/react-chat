import { createContext, useCallback, useState } from 'react';
import { fetchWithOuthToken } from '../helpers/fetch';

export type AuthContextProps = {
    auth: IAuthState,
    login(email: string, password: string): Promise<boolean>;
    register(name: string, email: string, password: string): void;
    verifyToken(): void;
    logout(): void;

};


const initialAuthContext = {
    register(name: string, email: string, password: string): void { },
    verifyToken(): void { },
    logout(): void { },
} as AuthContextProps;


export interface IAuthState {
    id: string | null;
    checking: boolean;
    logged: boolean;
    username: string | null;
    email: string | null;
}


const initialAuthState = {
    id: null,
    checking: false,
    logged: false,
    username: null,
    email: null,
} as IAuthState;

export interface IUser {
    id: string;
    online: boolean;
    username: string;
    email: string;
}

export type LoginResponse = {
    access_token: string;
    refresh_token: string;
    user: IUser;
}


export const AuthContext = createContext(initialAuthContext);


type AuthPropviderProps = { children: JSX.Element };


export const AuthProvider: React.FC<AuthPropviderProps> = ({ children }) => {

    const [auth, setAuth] = useState<IAuthState>(initialAuthState);

    const login = async (email: string, password: string) => {
        const loginResponse = await fetchWithOuthToken<LoginResponse>('auth/login', { email, password }, 'POST');
        if (loginResponse.ok) {
            const { access_token, refresh_token, user } = loginResponse.data as LoginResponse;
            const { email, id, username } = user;
            localStorage.setItem('accessToken', access_token);
            localStorage.setItem('refreshToken', refresh_token);
            setAuth(
                {
                    email,
                    checking: false,
                    id,
                    username,
                    logged: true,
                }
            );
        } else {
            setAuth(
                {
                    ...initialAuthState,
                    checking: true,
                    logged: false,
                }
            );
        }
        return loginResponse.ok;
    };

    const register = (name: string, email: string, password: string) => {

    };

    const verifyToken = useCallback(() => {

    }, []);

    const logout = () => {

    }

    const context = {
        auth,
        login,
        register,
        verifyToken,
        logout,
    } as AuthContextProps;

    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
}
