import logo from '../../assets/fibank-logo.png'
import android from '../../assets/android.png'
import apple from '../../assets/apple.png'
import informaiton from '../../assets/informaiton.png'
import monitor from '../../assets/monitor.png'
import notes from '../../assets/notes.png'
import ToggleMenu from '../toggle/ToggleMenu'
import { useState } from 'react'
import { Link, NavLink } from 'react-router';
import { useTranslation } from 'react-i18next'

function TopNavigationBar() {

    const[isToggelMenuOpen,setIsToggleOpen] = useState(false);

    const { t } = useTranslation();

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

                <NavLink to="/">
                    <img src={logo} className='w-40' alt='Fibank Logo'></img>
                </NavLink>
 
            <div id="top-navigation-options" className='flex flex-wrap items-center justify-between gap-5'>

                <button className='hover:cursor-pointer'>{t('nav_basic.language')}</button>

                <Link to="/" className='flex'>
                    <img src={monitor} className='w-4 h-4 mr-2 ' alt='Fibank Logo'></img>
                    {t("nav_basic.home")}
                </Link>


                <Link to="/" className='flex'>
                    <img src={android} className='w-4 h-4 mr-2' alt='Fibank Logo'></img>
                    <img src={apple} className='w-4 h-4 mr-2' alt='Fibank Logo'></img>
                    {t("nav_basic.mobile_version")}
                </Link>

                <Link to="/" className='flex'>
                    <img src={notes} className='w-4 h-4 mr-2' alt='Fibank Logo'></img>
                    {t("nav_basic.basic_services")}
                </Link>

                <Link to="/" className='flex'>
                    <img src={informaiton} className='w-4 h-4 mr-2' alt='Fibank Logo'></img>
                    {t("nav_basic.help")}
                </Link>

                
            </div>
                
            <Link to="/register" className='flex'>
                <button id='sign-button' className='p-2 mr-3 bg-gray-300 hover:bg-gray-400 hover:cursor-pointer'>{t("nav_basic.registation_button")}</button>
            </Link>    
        </nav>

        </>
    )

}

export default TopNavigationBar;