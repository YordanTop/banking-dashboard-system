
import { useEffect, useState, type ReactNode } from "react";
import { TranslationContext } from "../TranslationContext";
import i18n from "../../config/i18nInitialization";



export default function TranslationProvider({children}:{children:ReactNode}){

    const [language, setLanguage] = useState(()=>{
        return localStorage.getItem("lng") || "bg"
    })

    useEffect(() => {
        localStorage.setItem("lng",language);
        i18n.changeLanguage(language);

    },[setLanguage]);   


    
    return(
        <>
        
            <TranslationContext.Provider value={setLanguage}>

                {children}

            </TranslationContext.Provider>

        </>
    )

}