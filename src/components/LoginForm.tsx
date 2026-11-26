import { useState, type FormEvent } from 'react';
import { useAuth } from '../hooks/useAuth';

export function LoginForm() {
  const { user, login } = useAuth();
  const [name, setName] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(name);
    setName('');
  };

  if (user) {
    return <p>Вы вошли как <b>{user.name}</b>.</p>;
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 12 }}>
      <input
        type="text"
        placeholder="Введите имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" disabled={!name.trim()}>
        Войти
      </button>
    </form>
  );
}