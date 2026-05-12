import logo from '../assets/fibank-logo.png'
import android from '../assets/android.png'
import apple from '../assets/apple.png'
import informaiton from '../assets/informaiton.png'
import monitor from '../assets/monitor.png'
import notes from '../assets/notes.png'

function NavigationBar() {

    return(
        <>
        <nav>

            <nav id="top-navigation-bar" className='md:hidden flex items-center justify-between shadow-xl rounded-md bg-white' >

            <img src={logo} className='w-40' alt='Fibank Logo'></img>

        </nav>

        <nav id="top-navigation-bar" className='max-md:hidden flex items-center justify-between shadow-xl rounded-md bg-white' >

            <img src={logo} className='w-50' alt='Fibank Logo'></img>


            <div id="top-navigation-options" className='flex flex-wrap items-center justify-between gap-5'>

                <button className='hover:cursor-pointer text-md'>English</button>

                <a href='' className='flex text-md'>
                    <img src={monitor} className='w-5 h-5 mr-2 ' alt='Fibank Logo'></img>
                    Към сайта
                </a>


                <a href='' className='flex text-md'>
                    <img src={android} className='w-5 h-5 mr-2' alt='Fibank Logo'></img>
                    <img src={apple} className='w-5 h-5 mr-2' alt='Fibank Logo'></img>
                    Мобилно приложение
                </a>

                <a href=''className='flex text-md'>
                    <img src={notes} className='w-5 h-5 mr-2' alt='Fibank Logo'></img>
                    Промени в ОУ тарифа
                </a>

                <a href='' className='flex text-md'>
                    <img src={informaiton} className='w-5 h-5 mr-2' alt='Fibank Logo'></img>
                    Помощ
                </a>

                
            </div>
                
            <button id='sign-button' className='p-2 mr-3 bg-gray-300 hover:bg-gray-400 hover:cursor-pointer'>Регистрация</button>

        </nav>

        </nav>
        </>
    )

}

export default NavigationBar;