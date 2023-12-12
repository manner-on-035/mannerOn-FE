import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SplashPage } from '@pages/index';

const Router = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <BrowserRouter>
      <Routes>{isLoading && <Route path="/" element={<SplashPage />} />}</Routes>
    </BrowserRouter>
  );
};

export default Router;
