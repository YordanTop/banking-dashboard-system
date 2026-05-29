import '../../style/input.css'
import '../../style/layout.css'
import NavigationBar from '../components/NavigationBar.tsx'
import MainFooter from '../components/MainFooter.tsx' 
import FibankTitle from '../assets/fibank-title.png' 
import FibankPlace from '../assets/fibank-place.jpg'
import FibankVideo from '../assets/fibank-place-background.mp4'
import FibankTransaction from '../assets/transaction-stock-image.jpg'
import { Link } from 'react-router';

function HomePage() {

    return (<>

      <NavigationBar />

        <main className='flex flex-col min-h-screen  md:grid grid-cols-2 grid-row-2 grid-rows-[400px_1fr] gap-6 p-5'>
            <section className='flex flex-col justify-center relative overflow-hidden items-center p-10 bg-white/75 rounded-xl md:col-span-2 w-full'>

                <video src={FibankVideo}
                    autoPlay={true}
                    loop
                    muted
                    className="absolute z-10 w-auto min-w-full min-h-full max-w-none"></video>


            <div id='video-show-effect' className='absolute z-11 inset-0 bg-black/50'></div>


            <div className=' z-20 flex flex-col items-center bg-white/80 p-10 rounded-xl'>

                <img src={FibankTitle} alt='title' className='w-100'/>
                <p>Първа инвестиционна банка!</p>
                

                <article className='flex flex-cols'>
                    <Link to="/login">
                        <button 
                            className='hover:cursor-pointer bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2'>Вход</button>
                        </Link>
                    
                    <Link to="/register">
                        <button 
                            className='hover:cursor-pointer bg-white text-blue-700 hover:text-blue-500 font-bold py-2 px-4 rounded border-2 border-solid border-blue-200 ml-2'>Регистрация</button>
                        </Link>
                </article>
            </div>


            </section>

            <section className='flex flex-col items-center p-4 bg-white/75 rounded-xl w-full'>
                
                <img src={FibankPlace} alt='title' className='md:h-100 rounded-xl mb-5'/>
                <div id='card-info' className='rounded-xl bg-gray-100 p-5 w-full'>

                    <h2 className='text-lg font-bold text-center'>Умно управление на вашите финанси</h2>
                    <p className='text-md p-3'>Създаваме сигурни дигитални решения за лесно инвестиране и пълен контрол над капитала ви.</p>

                </div>

            </section>


            <section className='flex flex-col items-center p-4 bg-white/75 rounded-xl w-full'>
                
                <img src={FibankTransaction} alt='title' className='md:h-100 rounded-xl mb-5'/>

                <div id='card-info' className='rounded-xl bg-gray-100 p-5 w-full'>

                    <h2 className='text-lg font-bold text-center w-20vw'>Умно управление на вашите финанси</h2>
                    <p className='text-md p-3'>Създаваме сигурни дигитални решения за лесно инвестиране и пълен контрол над капитала ви.</p>

                </div>

            </section>

            
        </main>
    <MainFooter/>
  </>
  );
}

export default HomePage;