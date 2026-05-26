import { RegisterForm } from '../components/form/RegisterForm.tsx';
import MainFooter from '../components/MainFooter.tsx';
import NavigationBar from '../components/NavigationBar.tsx'


function RegisterPage() {

    return(<>
          
          
        <NavigationBar />

        <main className="flex flex-col min-h-[calc(100vh_-_154px)] md:flex-row">

            <RegisterForm/>

        </main>

        <MainFooter />

    </>);


}

export default RegisterPage;