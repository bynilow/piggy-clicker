import React from 'react';
import { createRoot } from 'react-dom/client';
import { Layout } from './pages/Layout';
import { ModalProvider } from './shared';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const container = document.getElementById('root');
const root = createRoot(container!);

const queryClient = new QueryClient();


root.render(
    <ModalProvider>
        <QueryClientProvider client={queryClient}>
            <Layout />
        </QueryClientProvider>
    </ModalProvider>
);