import '../../style/input.css'
import '../../style/layout.css'
import NavigationBar from '../components/NavigationBar.tsx'
import { Link } from 'react-router';


function HomePage() {
    
    return (<>

      <NavigationBar />

      <h1 className='font'>Fiback</h1>
      <p>Първа инвестиционна банка!</p>
      
      <Link to="/login">
        <button 
            className='bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded'>Login</button>
        </Link>
      
      <Link to="/register">
        <button 
            className='bg-white text-blue-700 hover:text-blue-500 font-bold py-2 px-4 rounded border-2 border-solid border-blue-200'>Register</button>
        </Link>

      <footer>
        <p>Copyright 2026 Fibank. All rights reserved.</p>
      </footer>
  </>
  );
}

export default HomePage;