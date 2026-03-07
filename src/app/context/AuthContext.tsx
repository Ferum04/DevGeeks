import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
    email: string;
}

interface AuthContextType {
    user: User | null;
    login: (email: string) => void;
    register: (email: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    // Load user from localStorage on initial mount
    useEffect(() => {
        const storedUser = localStorage.getItem('devgeeks_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (email: string) => {
        const newUser = { email };
        setUser(newUser);
        localStorage.setItem('devgeeks_user', JSON.stringify(newUser));
    };

    const register = (email: string) => {
        // In a real app this would call an API. 
        // Here we just save to localStorage to simulate successful registration/login.
        const newUser = { email };
        setUser(newUser);
        localStorage.setItem('devgeeks_user', JSON.stringify(newUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('devgeeks_user');
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
