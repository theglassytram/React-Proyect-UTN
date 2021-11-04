import { createContext } from 'react';

interface Context {
    user?: {
        id?: number;
        nombre?: string;
        pass?: string;
    },
    setUser?: any;
    
}

export const UserContext = createContext<Context>({

});