import { useAuth } from '../hooks/useAuth';
import { UserGreeting } from './UserGreeting';

export function UserPanel() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div style={{ padding: 12, border: '1px solid #ddd', borderRadius: 6 }}>
        <h3>Панель пользователя</h3>
        <p>Пожалуйста, войдите в систему.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 12, border: '1px solid #ddd', borderRadius: 6 }}>
      <h3>Панель пользователя</h3>
      <p>ID: {user.id}</p>
      <UserGreeting />
    </div>
  );
}