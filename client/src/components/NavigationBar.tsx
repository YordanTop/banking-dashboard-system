import logo from '../assets/fibank-logo.png'
import android from '../assets/android.png'
import apple from '../assets/apple.png'
import informaiton from '../assets/informaiton.png'
import monitor from '../assets/monitor.png'
import notes from '../assets/notes.png'
import ToggleMenu from './toggle/ToggleMenu'
import { useState } from 'react'
import { Link } from 'react-router';

function NavigationBar() {

    const[isToggelMenuOpen,setIsToggleOpen] = useState(false);

    return(

        <>
        { /* Mobile version for navigation bar */ }
        <nav>

            <nav id='top-navigation-bar' className='lg:hidden flex items-center justify-between shadow-xl rounded-md bg-white' >
                
                <Link to="/">
                    <img src={logo} className='w-40' alt='Fibank Logo'></img>
                </Link>

                <ToggleMenu

                    isToggleClicked={isToggelMenuOpen}
                    setIsToggleClicked={setIsToggleOpen}
                />


            </nav>

            {/* The linking routes  */}
            <article className='md:hidden flex flex-col item-center shadow-xl rounded-md bg-white'>

               

            </article>


        </nav>

        { /* Desktop version for navigation bar */ }
        <nav id='top-navigation-bar' className='text-sm max-lg:hidden flex items-center justify-between shadow-xl rounded-md bg-white w-full' >

                <Link to="/">
                    <img src={logo} className='w-40' alt='Fibank Logo'></img>
                </Link>

            <div id="top-navigation-options" className='flex flex-wrap items-center justify-between gap-5'>

                <button className='hover:cursor-pointer'>English</button>

                <Link to="/" className='flex'>
                    <img src={monitor} className='w-4 h-4 mr-2 ' alt='Fibank Logo'></img>
                    Към сайта
                </Link>


                <Link to="/" className='flex'>
                    <img src={android} className='w-4 h-4 mr-2' alt='Fibank Logo'></img>
                    <img src={apple} className='w-4 h-4 mr-2' alt='Fibank Logo'></img>
                    Мобилно приложение
                </Link>

                <Link to="/" className='flex'>
                    <img src={notes} className='w-4 h-4 mr-2' alt='Fibank Logo'></img>
                    Промени в ОУ тарифа
                </Link>

                <Link to="/" className='flex'>
                    <img src={informaiton} className='w-4 h-4 mr-2' alt='Fibank Logo'></img>
                    Помощ
                </Link>

                
            </div>
                
            <button id='sign-button' className='p-2 mr-3 bg-gray-300 hover:bg-gray-400 hover:cursor-pointer'>Регистрация</button>

        </nav>

        </>
    )

}

export default NavigationBar;