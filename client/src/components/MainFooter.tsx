import { useTranslation } from "react-i18next";

function MainFooter(){
    const {t} = useTranslation();

    return (

        <footer className='w-full  bg-gray-800 text-white p-6 mt-auto'>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <aside className="flex max-md:flex-row md:flex-col">

                    <ul className="text-sm text-gray-300 space-y-1 flex max-md:flex-col md:flex-row">
                        <li className="hover:text-white cursor-pointer md:p-1">{t("footer_basic.link_1")}&gt;</li>
                        <li className="hover:text-white cursor-pointer md:p-1">{t("footer_basic.link_2")} &gt;</li>

                        <li className="hover:text-white cursor-pointer md:p-1">{t("footer_basic.link_3")} &gt;</li>
                        <li className="hover:text-white cursor-pointer md:p-1">{t("footer_basic.link_4")} &gt;</li>


                        <li className="hover:text-white cursor-pointer md:p-1">{t("footer_basic.link_5")} &gt;</li>
                        <li className="hover:text-white cursor-pointer md:p-1">{t("footer_basic.link_6")} &gt;</li>
                    </ul>
                </aside>

                <p className="text-sm text-gray-400">© {t("footer_basic.motto")}</p>
            </div>
        </footer>
    );
}

export default MainFooter;
