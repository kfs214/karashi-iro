import { AppBar } from '@/app/components';

import './app.css';

import { Top } from '@/app/routes/top';
import { AppProvider } from '@/app/provider';

export function App() {
  return (
    <AppProvider>
      <AppBar />
      <Top />
    </AppProvider>
  );
}
