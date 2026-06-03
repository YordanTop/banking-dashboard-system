import { RegisterForm } from '../components/form/RegisterForm.tsx';
import MainFooter from '../components/MainFooter.tsx';
import { RedirectNonLoggedInUser } from '../utilities/RedirectNonLoggedInUser.tsx';
import TopNavigationBar from '../components/bar/NavigationBar.tsx';


function RegisterPage() {

    RedirectNonLoggedInUser("/statistic");
    
    return(<>
          
          
        <TopNavigationBar />

        <main className="flex flex-col min-h-[calc(100vh_-_154px)] md:flex-row">

            <RegisterForm/>

        </main>

        <MainFooter />

    </>);


}

export default RegisterPage;