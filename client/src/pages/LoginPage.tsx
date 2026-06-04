import logo from '../assets/fibank-logo.png'
import android from '../assets/android.png'

import informaiton from '../assets/informaiton.png'
import monitor from '../assets/monitor.png'
import notes from '../assets/notes.png'
import BankIcon from "../assets/icons/bank.svg"
import MainFooter from '../components/MainFooter.tsx'
import { LoginForm } from '../components/form/LoginForm.tsx'
import { RedirectNonLoggedInUser } from '../utilities/RedirectNonLoggedInUser.tsx';
import TopNavigationBar from '../components/bar/NavigationBar.tsx';
import { useTranslation } from 'react-i18next';
import type NavigationOption from '../components/bar/NavigationOption.tsx'


function LoginPage(){

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



    return(<>   

        <TopNavigationBar barConfiguration={NavbarConfig}/>

        <main className="flex flex-col min-h-[calc(100vh_-_154px)] md:flex-row">

            <article className='p-5 md:p-0 md:pt-10 md:pb-0' >

            <LoginForm />

            <section className='md:h-25 pt-5'>

                <main className='flex flex-col items-start justify-center p-5 mr-[5%] md:mr-0 ml-[5%] md:ml-[15%]
                                                        bg-white rounded-md shadow-md gap-4
                                                        min-w-40 h-full '>

                    <p className='text-sm'>Защитен вход със <a href='' className='text-purple-500 '> SSL сертификат от:</a> 2015-02-02</p>
                    
                </main>

            </section>

            </article>

            <aside className='p-5 md:p-0 md:pt-10 md:pb-5 md:h-135 md:w-full'>
                    
                <main className='flex flex-col items-start justify-center p-5 mr-[5%] ml-[5%] md:ml-5 bg-white rounded-md shadow-md gap-4 h-full'>

                    
                    <section className='w-full'>
                        <h3 className='text-lg font-semibold'>ВАЖНО!</h3>
                        <p className='text-sm text-gray-700'>ПИБ АД УВЕДОМЯВА КАРТОДЪРЖАТЕЛИТЕ си, че има информация за получени фалшиви съобщения по електронната поща, които...</p>
                        <a href='' className='text-purple-500 text-sm mt-1 inline-block'>Прочетете повече ›</a>
                    </section>

                    <section className='w-full border-t pt-4'>
                        <h4 className='text-md font-semibold'>Разгледайте системата</h4>
                        <p className='text-sm text-gray-700'>Разгледайте и усетете онлайн банкирането чрез интерактивната ни демо версия.</p>
                        <a href='' className='text-purple-500 text-sm'>ДЕМО ВЕРСИЯ ›</a>
                    </section>

                    <section className='w-full border-t pt-4 flex items-center gap-4'>
                        <div className='w-28 h-20 rounded flex items-center justify-center'>
                            <img src={BankIcon} alt='token' className='w-20 h-12 object-contain' />
                        </div>
                        <div>
                            <p className='text-sm font-semibold'>Банкиране с Token</p>
                            <p className='text-xs text-gray-700'>Мобилност, удобство и сигурност в едно — нашето Token устройство за генериране на еднократни пароли.</p>
                            <a href='' className='text-purple-500 text-sm'>Научете повече ›</a>
                        </div>
                    </section>

                    <section className='w-full border-t pt-4'>
                        <h5 className='text-sm font-semibold'>Валутни курсове</h5>
                        <table className='w-full text-sm mt-2'>
                            <tbody>
                                <tr className='border-t'><td className='py-1'>GBP</td><td className='py-1 text-right'>2.602220</td></tr>
                                <tr className='border-t'><td className='py-1'>EUR</td><td className='py-1 text-right'>1.95583</td></tr>
                                <tr className='border-t'><td className='py-1'>USD</td><td className='py-1 text-right'>1.844770</td></tr>
                            </tbody>
                        </table>
                    </section>

                </main>

            </aside>

        </main>



        <MainFooter />



    </>);

}


export default LoginPage;