import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Mount function for Module Federation / dynamic import usage
export function mount(el: HTMLElement | null) {
    if (!el) return () => {};
    const root = ReactDOM.createRoot(el);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );

    return () => {
        root.unmount();
    };
}

// Standalone development mode (when opened directly)
if (process.env.NODE_ENV === 'development') {
    const el = document.getElementById('root');
    if (el) mount(el);
}