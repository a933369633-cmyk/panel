import { AuthProvider } from './context/AuthProvider';
import { Header } from './components/Header';
import { LoginForm } from './components/LoginForm';
import { Sidebar } from './components/Sidebar';
import { UserPanel } from './components/UserPanel';

function Layout() {
  return (
    <div>
      <Header />
      <main style={{ display: 'flex', gap: 16, padding: 16 }}>
        <Sidebar>
          <LoginForm />
          <UserPanel />
        </Sidebar>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
}