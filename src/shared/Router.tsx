import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SplashPage, SignInStepPage } from '@pages/index';
import { Frame } from '@components/UI/template';
import LoginPage from '@pages/Login/LoginPage';

const Router = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frame />}>
          <Route path="" element={<SplashPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signin-step" element={<SignInStepPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
