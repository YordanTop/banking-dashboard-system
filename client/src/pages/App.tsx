import '../../style/input.css'
import '../../style/layout.css'

import { BrowserRouter, createBrowserRouter, Routes, RouterProvider } from 'react-router';

import HomePage from './HomePage.tsx';
import RegisterPage from './RegisterPage.tsx'
import DashboardPage from './UserDashboardPage.tsx'
import LoginPage from './LoginPage.tsx';
import AuthenticationProvider from '../context/AuthentucationProvider.tsx';
import { ProtectedRouter } from '../utilities/ProtectedRouter.tsx';


function App() {

  const routers = createBrowserRouter([

    {
      path:"/",
      element: <HomePage />
    },
    {
      path:"/login",
      element: <LoginPage />
    },
    {
      path:"/register",
      element: <RegisterPage />
    },
    {
      path:"/dashboard",
      element: <ProtectedRouter>
                  <DashboardPage />
               </ProtectedRouter>
    }



  ])

  return (
    <AuthenticationProvider>
      <RouterProvider router={routers} />
    </AuthenticationProvider>
  );
}

export default App
