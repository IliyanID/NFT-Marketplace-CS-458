import { Login } from './pages/AuthPage/Login';
import { AnimatePresence } from 'framer-motion';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './pages/Errorpage/ErrorPage';
import { Register } from './pages/AuthPage/Register';
import { ResetPassword } from './pages/AuthPage/ResetPassword';

function App() {
  return (
    <AnimatePresence>
      <RouterProvider router={router}/>
    </AnimatePresence>
  );
}

const router = createBrowserRouter([
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path:'/resetpassword',
    element:<ResetPassword/>
  },
  {
    errorElement:<ErrorPage error='404 Not Found'/>
  }
])

export default App;
