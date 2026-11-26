import { useAuth } from '../hooks/useAuth';

export function UserGreeting() {
  const { user } = useAuth();

  if (!user) {
    return <p>Нет авторизованного пользователя.</p>;
  }

  return <p>Добро пожаловать, {user.name}!</p>;
}