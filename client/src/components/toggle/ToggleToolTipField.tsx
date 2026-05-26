import { useState } from "react";
import { FormSuggestionPopup } from "../popup/FormSuggestionPopup";

export interface ToggleToolTip{
    icon:string;
    message:string;
}

export function ToggleToolTip({icon, message}:ToggleToolTip){

    const [isToggleHovered,setIsToggleHovered] = useState(false);


    return(<>

        <div>
                <img draggable="false"
                     onMouseEnter={() => {setIsToggleHovered(true)}}
                     onMouseLeave={() => {setIsToggleHovered(false)}}
                     className='cursor-pointer w-5 mr-2'
                     src={icon}/>

            {isToggleHovered && <FormSuggestionPopup message={message}/>}

        </div>
    
        
    
    
    </>)



}