import NavigationBar from '../components/NavigationBar.tsx'
import MainFooter from '../components/MainFooter.tsx'
import { LoginForm } from '../components/form/LoginForm.tsx'


function LoginPage(){


    return(<>   

        <NavigationBar />

        <main className="flex flex-col min-h-[calc(100vh_-_154px)] md:flex-row">

            <article className='p-5 md:p-0 md:pt-10 md:pb-0' >

            <LoginForm />

            <section className='md:h-40 pt-5'>

                <main className='flex flex-col items-start justify-center p-5 mr-[5%] md:mr-0 ml-[5%] md:ml-[15%]
                                                        bg-white rounded-md shadow-md gap-4
                                                        min-w-40 h-full '>

                    <p className='text-sm'>Защитен вход със <a href='' className='text-purple-500 '> SSL сертификат от:</a> 2015-02-02</p>
                    
                </main>

            </section>

            </article>

            <aside className='p-5 md:p-0 md:pt-10 md:pb-5 md:h-135 md:w-full'>
                    
                <main className='flex flex-col items-start justify-center p-5 mr-[5%]  ml-[5%] md:ml-5
                                bg-white rounded-md shadow-md gap-4 h-full'>

                    <p className='text-xl'>Инфо</p>
                    
                </main>

            </aside>

        </main>



        <MainFooter />



    </>);

}


export default LoginPage;