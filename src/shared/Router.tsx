import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SplashPage, HomePage, SignInStepPage } from '@pages/index';
import { Frame } from '@components/UI/template';
import LoginPage from '@pages/Login/LoginPage';

const Router = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3300);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frame />}>
          {isLoading ? <Route path="" element={<SplashPage />} /> : <Route path="" element={<LoginPage />} />}
          <Route path="home" element={<HomePage />} />
          <Route path="signin-step" element={<SignInStepPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
