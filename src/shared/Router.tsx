import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { SplashPage } from '@pages/index';
import { SplashPage } from '../pages/index';
import { Frame } from '@components/UI/template';

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
        <Route path="" element={<SplashPage />}/>
       </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

// {isLoading && (
//   <Route path="/" element={<SplashPage />} />
// )}