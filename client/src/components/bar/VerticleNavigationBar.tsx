import { NavLink } from "react-router";
import type { NavigationButton } from "./NavigationOption";
import type NavigationOption from "./NavigationOption";

function VerticleNavigationBar({barConfiguration}: {barConfiguration: NavigationOption}){


    return(<>
            <ul className="flex flex-col text-center mt-5">
            {
                barConfiguration.buttons?.map((button) =>(
                    <ButtonDisplay button={button} ></ButtonDisplay>
                ))

            }
            </ul>
    
    </>);

}

function ButtonDisplay({button}:{button:NavigationButton}){

    return(<>
            <NavLink to={`/${button.rediraction}`} className={({isActive}) => `
                ${isActive&&"cursor-pointer text-xs transition-all rounded-xl bg-gray-300 font-medium text-black"}
            
            `}>
                <li className="flex flex-col items-center cursor-pointer hover text-xs hover:bg-gray-200 hover:rounded-xl pt-3 pb-3 transition-all">

                    <img src={button.iconSource} className="w-7"/>    
                    <p className="">{button.text}</p>
                                
                </li>
            </NavLink>
        </>)

}

export default VerticleNavigationBar;