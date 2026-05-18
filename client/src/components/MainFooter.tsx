function MainFooter(){
    return (
        <footer className='w-full bg-gray-800 text-white p-6 mt-auto'>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <aside className="flex flex-row">
                    <ul className="text-sm text-gray-300 space-y-1">
                        <li className="hover:text-white cursor-pointer">Как да добавим сметки &gt;</li>
                        <li className="hover:text-white cursor-pointer">Всичко си ед</li>
                    </ul>
                </aside>

                <p className="text-sm text-gray-400">© Първа инвестиционна банка</p>
            </div>
        </footer>
    );
}

export default MainFooter;
