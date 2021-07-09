import { createContext, useCallback, useState } from 'react';

export type AuthContextProps = {
    login(email: string, password: string): void;
    register(name: string, email: string, password: string): void;
    verifyToken(): void;
    logout(): void;
};


const initialAuthContext = {
    login(email: string, password: string): void { },
    register(name: string, email: string, password: string): void { },
    verifyToken(): void { },
    logout(): void { },
} as AuthContextProps;


export interface IAuthState {
    id: string | null;
    checking: boolean;
    logged: boolean;
    name: string | null;
    email: string | null;
}


const initialAuthState = {
    id: null,
    checking: false,
    logged: false,
    name: null,
    email: null,
} as IAuthState;


export const AuthContext = createContext(initialAuthContext);


type AuthPropviderProps = { children: JSX.Element };


export const AuthProvider: React.FC<AuthPropviderProps> = ({ children }) => {

    const [auth, setAuth] = useState<IAuthState>(initialAuthState);

    const login = (email: string, password: string) => {

    };

    const register = (name: string, email: string, password: string) => {

    };

    const verifyToken = useCallback(
        () => {
        },
        []);

    const logout = () => {

    }

    const context = {
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
