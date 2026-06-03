import '../style/input.css'
import '../style/layout.css'

import { createBrowserRouter, RouterProvider } from 'react-router';

import HomePage from './pages/HomePage.tsx';
import RegisterPage from './pages/RegisterPage.tsx'
import StatisticPage from './pages/StatisticPage.tsx'
import ProfilePage from './pages/ProfilePage.tsx'
import LoginPage from './pages/LoginPage.tsx';
import AuthenticationProvider from './context/provider/AuthentucationProvider.tsx';
import { ProtectedRouter } from './utilities/ProtectedRouter.tsx';
import TranslationProvider from './context/provider/TranslationProvider.tsx';
import BankAccountPage from './pages/BankAccountPage.tsx';
import TransactionHistoryPage from './pages/TransactionHistoryPage.tsx';



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
      path:"/statistic",
      element: <ProtectedRouter>
                  <StatisticPage />
               </ProtectedRouter>
    },
    {
      path:"/profile",
      element: <ProtectedRouter>
                  <ProfilePage />
               </ProtectedRouter>
    },
        {
      path:"/accounts",
      element: <ProtectedRouter>
                  <BankAccountPage />
               </ProtectedRouter>
    },
        {
      path:"/transactions",
      element: <ProtectedRouter>
                  <TransactionHistoryPage />
               </ProtectedRouter>
    },


  ])

  return (

    <TranslationProvider>
         <AuthenticationProvider>
          <RouterProvider router={routers} />
        </AuthenticationProvider>
    </TranslationProvider>
  );
}

export default App
