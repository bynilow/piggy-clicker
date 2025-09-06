import React from 'react';
import { createRoot } from 'react-dom/client';
import { Layout } from './pages/Layout';
import { ModalProvider } from './shared';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <ModalProvider>
        <Layout />
    </ModalProvider>
);