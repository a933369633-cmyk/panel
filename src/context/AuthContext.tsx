import { createContext } from 'react';

export interface User {
  id: string;
  name: string;
}

export interface AuthContextValue {
  user: User | null;
  login: (name: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);