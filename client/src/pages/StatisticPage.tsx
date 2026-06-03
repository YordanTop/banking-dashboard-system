import DashboardLayout from "../components/page-layout/DashboardLayout";

function StatisticPage() {

    return(<>
        
            <DashboardLayout dashboardInformation={<>
                <section className="flex flex-row text-center">
                    <div className="bg-gray-300 shadow-md w-full min-h-30 m-5 w-25 rounded-lg">

                        <h3 className="text-2xl font-bold mt-[7%]">Общо салдо:</h3>
                        <p className="text-xl">10,000 EUR</p>

                    </div>
                    <div className="bg-gray-300 shadow-md w-full min-h-30 mt-5 mb-5 w-25 rounded-lg">

                        <h3 className="text-2xl font-bold mt-[7%]">Общи приходи за месеца:</h3>
                        <p className="text-xl">10,000 EUR</p>

                    </div>
                    <div className="bg-gray-300 shadow-md min-h-30 w-full m-5 w-25 rounded-lg">

                        <h3 className="text-2xl font-bold mt-[7%]">Общи разходи за месеца:</h3>
                        <p className="text-xl">10,000 EUR</p>

                    </div>
                </section>

                <article className="bg-gray-300 shadow-md min-h-100 ml-5 mr-5 rounded-lg">
                   
                </article>

                <article className="bg-gray-300 shadow-md min-h-100  m-5 rounded-lg">
                    <table>
                        
                    </table>
                </article>
            </>}/>

    </>);

}

export default StatisticPage;