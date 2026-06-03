import DashboardLayout from "../components/page-layout/DashboardLayout";

function BankAccountPage() {

    return(<>
        
        <DashboardLayout dashboardInformation={<>
            
                    <div className="bg-gray-300 shadow-md min-h-80 mt-5 ml-5 mr-5 rounded-lg">

                        <h3 className="text-2xl font-bold">Акаунти: </h3>

                    </div>

                    <div className="bg-gray-300 shadow-md min-h-80 m-5 rounded-lg">

                        <h3 className="text-2xl font-bold">Тразакционна история на акаунта: </h3>

                    </div>
            
            
            </>}/>

    </>);

}

export default BankAccountPage;