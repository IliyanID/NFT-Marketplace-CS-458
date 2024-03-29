import { AnimatePresence } from 'framer-motion';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ErrorPage } from './pages/Errorpage/ErrorPage';
import { AuthPage } from './pages/AuthPage/AuthPage';
import { Marketplace } from './pages/Marketplace/Marketplace';
import { UserContextProvider } from './context/UserContext';
import { AssetPage } from './pages/Asset/AssetPage';
import { MarketPlaceContextProvider } from './context/MarketPlaceContext';

function App() {



  return (
    <AnimatePresence>
      <UserContextProvider>
          <MarketPlaceContextProvider>
            <BrowserRouter>
              <Routes>
                <Route index element={<Marketplace/>}/>
                <Route path="asset/:id" element={<AssetPage/>}/>
                <Route path="auth/*" element={<AuthPage/>}/>
                <Route path="*" element={<ErrorPage error="404 Not Found"/>}/>
              </Routes>
            </BrowserRouter>
          </MarketPlaceContextProvider>
      </UserContextProvider>
    </AnimatePresence>
  );
}


export default App;
