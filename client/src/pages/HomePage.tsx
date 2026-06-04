import '../../style/input.css'
import '../../style/layout.css'
import logo from '../assets/fibank-logo.png'
import android from '../assets/android.png'

import informaiton from '../assets/informaiton.png'
import monitor from '../assets/monitor.png'
import notes from '../assets/notes.png'
import MainFooter from '../components/MainFooter.tsx' 
import FibankTitle from '../assets/fibank-title.png' 
import FibankPlace from '../assets/fibank-place.jpg'
import FibankVideoMP4 from '../assets/videos/fibank-place-background.mp4'
import FibankVideoWebM from '../assets/videos/fibank-place-background.webm'
import FibankTransaction from '../assets/transaction-stock-image.jpg'
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next'
import { RedirectNonLoggedInUser } from '../utilities/RedirectNonLoggedInUser.tsx'
import TopNavigationBar from '../components/bar/NavigationBar.tsx'
import type NavigationOption from '../components/bar/NavigationOption.tsx'

function HomePage() {

    RedirectNonLoggedInUser("/statistic");
    const [t] = useTranslation();

    const NavbarConfig: NavigationOption = {
        logo: {
            iconSource: logo,
            rediraction: "" 
        },
        links: [
            {
                text: t("nav_basic.home"),
                rediraction: "",
                iconSource: monitor 
            },
            {
                text: t("nav_basic.mobile_version"),
                rediraction: "",
                iconSource: android, 
            },
            {
                text: t("nav_basic.basic_services"),
                rediraction: "",
                iconSource: notes
            },
            {
                text: t("nav_basic.help"),
                rediraction: "",
                iconSource: informaiton
            }
        ],
        buttons: [
            {
                text: t("nav_basic.registation_button"),
                rediraction: "register",
                iconSource: "" 
            }
        ]
    };

    return (<>

      <TopNavigationBar barConfiguration={NavbarConfig} />

        <main className='flex flex-col min-h-screen  md:grid grid-cols-2 grid-row-2 grid-rows-[400px_1fr] gap-6 p-5'>
            <section className='flex flex-col justify-center relative overflow-hidden items-center p-10 bg-white/75 rounded-xl md:col-span-2 w-full'>

                <video
                    autoPlay
                    loop
                    muted
                    preload="metadata"
                    playsInline
                    
                    className="absolute inset-0 z-0 w-auto min-w-full min-h-full object-cover" >
                        <source src={FibankVideoWebM} type="video/webm"></source>
                        <source src={FibankVideoMP4} type="video/mp4"></source>
                    </video>


            <div id='video-show-effect' className='absolute z-10 inset-0 bg-black/50'></div>


            <div className=' z-20 flex flex-col items-center bg-white/80 p-10 rounded-xl'>

                <img src={FibankTitle} alt='title' className='w-100'/>
                <p>{t("home_page.motto")}</p>
                

                <article className='flex flex-cols'>
                    <Link to="/login">
                        <button 
                            className='hover:cursor-pointer bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2'>{t("home_page.login_button")}</button>
                        </Link>
                    
                    <Link to="/register">
                        <button 
                            className='hover:cursor-pointer bg-white text-blue-700 hover:text-blue-500 font-bold py-2 px-4 rounded border-2 border-solid border-blue-200 ml-2'>{t("home_page.registation_button")}</button>
                        </Link>
                </article>
            </div>


            </section>

            <section className='flex flex-col items-center p-4 bg-white/75 rounded-xl w-full'>
                
                <img src={FibankPlace} alt='title' className='md:h-100 rounded-xl mb-5'/>
                <div id='card-info' className='rounded-xl bg-gray-100 p-5 w-full'>

                    <h2 className='text-lg font-bold text-center'>{t("home_page.left_card.title")}</h2>
                    <p className='text-md p-3'>{t("home_page.left_card.description")}</p>

                </div>

            </section>


            <section className='flex flex-col items-center p-4 bg-white/75 rounded-xl w-full'>
                
                <img src={FibankTransaction} alt='title' className='md:h-100 rounded-xl mb-5'/>

                <div id='card-info' className='rounded-xl bg-gray-100 p-5 w-full'>

                    <h2 className='text-lg font-bold text-center w-20vw'>{t("home_page.right_card.title")}</h2>
                    <p className='text-md p-3'>{t("home_page.right_card.description")}</p>

                </div>

            </section>

            
        </main>
    <MainFooter/>
  </>
  );
}

export default HomePage;