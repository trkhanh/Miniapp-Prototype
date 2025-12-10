import React, { Suspense, useState } from 'react';
import './App.css';

// Lazy load the remote mini-apps
const MiniApp1 = React.lazy(() => import('miniApp1/App'));
const MiniApp2 = React.lazy(() => import('miniApp2/App'));

export default function App() {
  const [activeApp, setActiveApp] = useState<'app1' | 'app2' | null>(null);

  return (
    <div className="shell-app">
      <header className="shell-header">
        <h1>Micro-Frontend Shell Application</h1>
        <nav className="shell-nav">
          <button
            onClick={() => setActiveApp('app1')}
            className={activeApp === 'app1' ? 'active' : ''}
          >
            Mini App 1
          </button>
          <button
            onClick={() => setActiveApp('app2')}
            className={activeApp === 'app2' ? 'active' : ''}
          >
            Mini App 2
          </button>
          <button onClick={() => setActiveApp(null)} className={activeApp === null ? 'active' : ''}>
            Home
          </button>
        </nav>
      </header>

      <main className="shell-main">
        {activeApp === null && (
          <div className="shell-home">
            <h2>Welcome to the Shell Application</h2>
            <p>Select a mini-app from the navigation to get started.</p>
          </div>
        )}

        {activeApp === 'app1' && (
          <Suspense fallback={<div>Loading Mini App 1...</div>}>
            <MiniApp1 />
          </Suspense>
        )}

        {activeApp === 'app2' && (
          <Suspense fallback={<div>Loading Mini App 2...</div>}>
            <MiniApp2 />
          </Suspense>
        )}
      </main>

      <footer className="shell-footer">
        <p>&copy; 2025 Micro-Frontend Architecture Demo</p>
      </footer>
    </div>
  );
}
