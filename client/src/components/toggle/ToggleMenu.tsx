import { useState } from "react";


function ToggleMenu({isToggleClicked,setIsToggleClicked}) {
    

    if(isToggleClicked){

        return(
            <>
            
                {/*cross menu */}
                <div onClick={() => setIsToggleClicked(false) } id="sandwich-menu" className='flex flex-col items-center justify-between gap-1 p-5 mr-3 hover:cursor-pointer'>
                    <span className='w-6 h-1 bg-gray-600 rounded rotate-315 absolute transition duration-950 ease-in-out'></span>
                    <span className='w-6 h-1 bg-gray-600 rounded rotate-45 absolute transition duration-950 ease-in-out'></span>
                </div>

            </>
        );
    }
        return(
            <>
                {/*sandwich menu */}
                <div onClick={() => setIsToggleClicked(true) } id="sandwich-menu" className='flex flex-col items-center justify-between gap-1 p-5 hover:cursor-pointer'>
                    <span className='w-6 h-1 bg-gray-600 rounded static transition duration-350 ease-in-out'></span>
                    <span className='w-6 h-1 bg-gray-600 rounded static transition duration-350 ease-in-out'></span>
                    <span className='w-6 h-1 bg-gray-600 rounded static transition duration-350 ease-in-out'></span>
                </div>

            </>

        )

}

export default ToggleMenu;

