import { Link, NavLink } from 'react-router';
import type NavigationOption from './NavigationOption'
import type { NavigationButton, NavigationLink, NavigationLogo } from './NavigationOption'


function TopNavigationBar({barConfiguration}: {barConfiguration: NavigationOption}){


    return(<>

            { /* Desktop version for navigation bar */ }
            <nav id='top-navigation-bar' className='text-sm max-lg:hidden flex items-center justify-between shadow-xl rounded-md bg-white w-full' >

                {barConfiguration.logo && <LogoDisplay logo={barConfiguration.logo}/>}
                

                <ul className="flex flex-wrap items-center justify-between gap-5">
                {
                    barConfiguration.links?.map((link) =>(
                        <LinkDisplay link={link} ></LinkDisplay>
                    ))

                }
                </ul>

                <ul className="flex flex-wrap items-center justify-between gap-5">
                {
                    barConfiguration.buttons?.map((button) =>(
                        <ButtonDisplay button={button} ></ButtonDisplay>
                    ))

                }
                </ul>

            </nav>
    
    </>);

}

function LogoDisplay({logo}:{logo:NavigationLogo}){
           return(<>
            
            <NavLink to={`/${logo.rediraction}`}>
                    <img src={logo.iconSource} className='w-40' alt='Fibank Logo'></img>
            </NavLink>
 
        </>)
}

function LinkDisplay({link}:{link:NavigationLink}){

        return(<>
            <Link to={`/${link.rediraction}`} className='flex'>
                    <img src={link.iconSource} className='w-4 h-4 mr-2 '></img>
                    {link.text}
                </Link>
        </>)

}

function ButtonDisplay({button}:{button:NavigationButton}){

    return(<>
            {
                button.onClick && 
                <div className='flex'>
                     <button onClick={button.onClick} className='p-2 mr-3 bg-gray-300 hover:bg-gray-400 hover:cursor-pointer'>
                            {button.text}
                    </button>
                </div>
            }

            {
                button.rediraction && 
                <Link to={`/${button.rediraction}`}  className='flex'>
                     <button className='p-2 mr-3 bg-gray-300 hover:bg-gray-400 hover:cursor-pointer'>
                            {button.text}
                    </button>
                </Link>
            }
        </>)

}

export default TopNavigationBar;