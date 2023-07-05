'use client';
import { useEffect, useState } from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import { setTimeout } from 'timers';

export function Providers({ children }: { children: React.ReactNode }) {
  const [display, setDisplay] = useState<String>('');
  useEffect(() => {
    setTimeout(() => {
      setDisplay('d-none'), 800;
    });
    
  }, []);

  return (
    <Provider store={store}>
      <div className={'preloader ' + display}></div>
      {children}
    </Provider>
  );
}
