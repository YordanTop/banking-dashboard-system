import UserIcon from "../../assets/icons/user-icon.svg"

import StatisticIcon from "../../assets/icons/statistic-icon.svg"

import BankAccountIcon from "../../assets/icons/bank-accounts.svg"

import TransactionIcon from "../../assets/icons/transaction-icon.svg"

import VerticleNavigationBar from "../bar/VerticleNavigationBar";
import type { JSX } from "react";
import TopNavigationBar from "../bar/NavigationBar";


function DashboardLayout({dashboardInformation}:{dashboardInformation:JSX.Element}) {

    return(<>
        <TopNavigationBar />

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