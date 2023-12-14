import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { FormProvider, useForm } from 'react-hook-form';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

function AppWrapper() {
  const methods = useForm();

  return (
    <React.StrictMode>
      <FormProvider {...methods}>
        <App />
      </FormProvider>
    </React.StrictMode>
  );
}

root.render(<AppWrapper />);
