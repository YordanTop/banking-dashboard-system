  import { createRoot } from 'react-dom/client'
  import { StrictMode } from 'react';
import App from './pages/App.tsx';


  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App/>
    </StrictMode>
  )
