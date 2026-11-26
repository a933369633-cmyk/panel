import type { ReactNode } from 'react';

interface SidebarProps {
  children: ReactNode;
}

export function Sidebar({ children }: SidebarProps) {
  return (
    <aside style={{ flex: 1, padding: 12, background: '#f3f4f6' }}>
      <h3>Боковая панель</h3>
      {children}
    </aside>
  );
}