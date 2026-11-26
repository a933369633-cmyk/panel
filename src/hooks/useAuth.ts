import { useContext } from 'react';
import { AuthContext, type AuthContextValue } from '../context/AuthContext';

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (ctx === undefined) {
    throw new Error(
      'useAuth must be used within an <AuthProvider>. ' +
        'Оберните компонент в <AuthProvider> на верхнем уровне дерева.'
    );
  }
  return ctx;
}