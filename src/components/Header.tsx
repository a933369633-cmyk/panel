import { useAuth } from '../hooks/useAuth';

export function Header() {
  const { user, logout } = useAuth();

  return (
    <header style={{ padding: 12, background: '#1f2937', color: '#fff' }}>
      <strong>MyApp</strong>
      <span style={{ float: 'right' }}>
        {user ? (
          <>
            Привет, {user.name}!{' '}
            <button onClick={logout}>Выйти</button>
          </>
        ) : (
          'Гость'
        )}
      </span>
    </header>
  );
}