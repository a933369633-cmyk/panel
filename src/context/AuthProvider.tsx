import { useEffect, useState, type ReactNode } from 'react';
import { AuthContext, type User } from './AuthContext';

const STORAGE_KEY = 'auth_user';

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isRestoring, setIsRestoring] = useState(true);

  // Восстановление из localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed: unknown = JSON.parse(raw);
        if (
          typeof parsed === 'object' &&
          parsed !== null &&
          'id' in parsed &&
          'name' in parsed &&
          typeof (parsed as User).id === 'string' &&
          typeof (parsed as User).name === 'string'
        ) {
          setUser(parsed as User);
        }
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    } finally {
      setIsRestoring(false);
    }
  }, []);

  // Сохранение в localStorage
  useEffect(() => {
    if (isRestoring) return;
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [user, isRestoring]);

  const login = (name: string) => {
    const trimmed = name.trim();
    if (!trimmed) return;
    setUser({
      id: crypto.randomUUID(),
      name: trimmed,
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}