import logo from '../assets/fibank-logo.png'
import android from '../assets/android.png'

import informaiton from '../assets/informaiton.png'
import monitor from '../assets/monitor.png'
import notes from '../assets/notes.png'
import { RegisterForm } from '../components/form/RegisterForm.tsx';
import MainFooter from '../components/MainFooter.tsx';
import { RedirectNonLoggedInUser } from '../utilities/RedirectNonLoggedInUser.tsx';
import TopNavigationBar from '../components/bar/NavigationBar.tsx';
import { useTranslation } from 'react-i18next'
import type NavigationOption from '../components/bar/NavigationOption.tsx'


function RegisterPage() {

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
                text: t("nav_basic.login_button"),
                rediraction: "login",
                iconSource: "" 
            }
        ]
    };

    return(<>   

        <TopNavigationBar barConfiguration={NavbarConfig}/>

        <main className="flex flex-col min-h-[calc(100vh_-_154px)] md:flex-row">

            <RegisterForm/>

        </main>

        <MainFooter />

    </>);


}

export default RegisterPage;