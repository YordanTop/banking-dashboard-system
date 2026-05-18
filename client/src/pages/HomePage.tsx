import '../../style/input.css'
import '../../style/layout.css'
import NavigationBar from '../components/NavigationBar.tsx'
import MainFooter from '../components/MainFooter.tsx' 
import FibankTitle from '../assets/fibank-title.png' 
import { Link } from 'react-router';


function HomePage() {
    
    return (<>

      <NavigationBar />


        {/*Mobile version for Home Page */}
        <main className='md:hidden flex flex-col items-center'>

            <img src={FibankTitle} alt='title'/>
            <p>Първа инвестиционна банка!</p>
            

            <article>
                <Link to="/login">
                    <button 
                        className='hover:cursor-pointer bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded'>Вход</button>
                    </Link>
                
                <Link to="/register">
                    <button 
                        className='hover:cursor-pointer bg-white text-blue-700 hover:text-blue-500 font-bold py-2 px-4 rounded border-2 border-solid border-blue-200'>Регистрация</button>
                    </Link>
            </article>


        </main>


        {/*Desktop version for Home Page */}

        <div className="flex flex-col min-h-screen">
            <main className='max-md:hidden grid grid-rows-[250px_1fr] grid-cols-[350px_2fr] flex-grow gap-4 p-6'>

                <article className='flex flex-col border border-gray-200 p-8
                                                bg-white rounded-md shadow-md gap-6 ml-3  p-10'>

                    <aside>
                        <img src={FibankTitle} alt='title' className='w-full'/>
                        <p>Първа инвестиционна банка!</p>
                    </aside>
                    

                    <article>
                        <Link to="/login">
                            <button 
                                className='hover:cursor-pointer bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded ml-1'>Вход</button>
                            </Link>
                        
                        <Link to="/register">
                            <button 
                                className='hover:cursor-pointer bg-white text-blue-700 hover:text-blue-500 font-bold py-2 px-4 rounded border-2 border-solid border-blue-200 ml-1'>Регистрация</button>
                            </Link>
                    </article>


                </article>

                <aside className='flex flex-col border border-gray-200 p-8
                                                bg-white rounded-md shadow-md gap-6 mr-3 ml-2 p-10 row-span-2'>
                    
                </aside>

                <article className='flex flex-col border border-gray-200 p-8
                                                bg-white rounded-md shadow-md gap-6 ml-3 mt-2 p-10'>

                </article>

            </main>

             <MainFooter />

        </div>
  </>
  );
}

export default HomePage;