function MainFooter(){
    return (

        <footer className='w-full  bg-gray-800 text-white p-6 mt-auto'>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <aside className="flex max-md:flex-row md:flex-col">

                    <ul className="text-sm text-gray-300 space-y-1 flex max-md:flex-col md:flex-row">
                        <li className="hover:text-white cursor-pointer md:p-1">Как да добавим сметки &gt;</li>
                        <li className="hover:text-white cursor-pointer md:p-1">Всичко си един потребител &gt;</li>

                        <li className="hover:text-white cursor-pointer md:p-1">Процес на регистрация &gt;</li>
                        <li className="hover:text-white cursor-pointer md:p-1">Електорнен подпис &gt;</li>


                        <li className="hover:text-white cursor-pointer md:p-1">Такси и комисионни&gt;</li>
                        <li className="hover:text-white cursor-pointer md:p-1">Документи&gt;</li>
                    </ul>
                </aside>

                <p className="text-sm text-gray-400">© Първа инвестиционна банка</p>
            </div>
        </footer>
    );
}

export default MainFooter;
