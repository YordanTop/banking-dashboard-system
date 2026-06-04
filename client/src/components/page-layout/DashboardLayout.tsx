import UserIcon from "../../assets/icons/user-icon.svg"

import StatisticIcon from "../../assets/icons/statistic-icon.svg"

import BankAccountIcon from "../../assets/icons/bank-accounts.svg"

import TransactionIcon from "../../assets/icons/transaction-icon.svg"

import logo from '../../assets/fibank-logo.png'

import VerticleNavigationBar from "../bar/VerticleNavigationBar";
import { useContext, type JSX } from "react";
import TopNavigationBar from "../bar/NavigationBar";
import { useTranslation } from "react-i18next";
import type NavigationOption from "../bar/NavigationOption"
import { axiosInstance } from "../../config/AxiosConfig"
import { useNavigate } from "react-router-dom"
import { AuthenticationContext } from "../../context/AuthenticationContext"


function DashboardLayout({dashboardInformation}:{dashboardInformation:JSX.Element}) {

 const [t] = useTranslation();
 const navigate = useNavigate();
 
const authentication = useContext(AuthenticationContext);

    const NavbarConfig: NavigationOption = {
        logo: {
            iconSource: logo,
            rediraction: "statistic" 
        },

        buttons: [
            {
                text: t("nav_basic.logout_button"),
                onClick: async () => { 
                    await axiosInstance.get("auth/logout").then(async () => {
                    
                        await authentication?.rewriteAuthenticationCache()
                                .catch((error) =>{
                                    console.warn(`Server could not fetch the data! ${error}`);
                                });

                        navigate('/login', { replace: true });

                    });
                }

                
            }
        ]
    };

    return(<>   

        <TopNavigationBar barConfiguration={NavbarConfig}/>


        <main className="flex flex-row h-[calc(100vh-80px)] overflow-hidden">
            <nav className="hidden md:block bg-white shadow-md min-h-[calc(100vh_-_124px)] m-5 w-25 rounded-lg">

            <VerticleNavigationBar 
                barConfiguration={{
                        buttons:[
                        {
                            text:"Cтатистика",
                            iconSource:StatisticIcon,
                            rediraction:"statistic"
                        },
                        {
                            text:"Профил",
                            iconSource:UserIcon,
                            rediraction:"profile"
                        },
                        {
                            text:"Акаунти",
                            iconSource:BankAccountIcon,
                            rediraction:"accounts"
                        },
                        {
                            text:"Трансакции",
                            iconSource:TransactionIcon,
                            rediraction:"transactions"
                        },
                        
                        
                        ]}}>
                            
            </VerticleNavigationBar>

            </nav>
            
                <article className="bg-white shadow-md min-h-[calc(100vh_-_124px)] m-5 ml-0 w-screen rounded-lg overflow-y-scroll">
                    {dashboardInformation}
                </article>

        </main>


    </>);

}

export default DashboardLayout;