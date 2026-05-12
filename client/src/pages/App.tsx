import '../../style/input.css'
import '../../style/layout.css'

import { Route, Routes } from 'react-router';

import HomePage from './HomePage.tsx';
import RegisterPage from './RegisterPage.tsx'
import DashboardPage from './DashboardPage.tsx'
import LoginPage from './LoginPage.tsx';

function App() {

  return (

    <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />

    </Routes>

  );
}

export default App
