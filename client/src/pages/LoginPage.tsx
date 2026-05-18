import LoginForm from '../components/LoginForm.tsx';
import NavigationBar from '../components/NavigationBar.tsx'
import MainFooter from '../components/MainFooter.tsx'


function LoginPage(){
    return(<>   

        <NavigationBar />

        { /* Mobile version for login page  */ }
        <main className='sm:hidden'>
            <article className=''>

                <LoginForm />
            </article>

            <aside>
                <LoginForm />
            </aside>

        </main>

        { /* Desktop version for login page */ }


        <div className="flex flex-col min-h-fit">

        <main className='max-sm:hidden grid grid-cols-4 grid-rows-2 gap-0  '>

            <article className='p-3 col-start-2' >

                <LoginForm />
            </article>

            <aside className='p-3 col-start-3 row-span-2'>
                <LoginForm />
            </aside>
        </main>

        <MainFooter />

        </div>

    </>);

}


export default LoginPage;