import type { Field } from "./Field";
import { ToggleToolTip } from "../toggle/ToggleToolTipField";

export function FormField({fieldName, labelText, typeOfField, icon, register, validation, toggle  }: Field){

    return(<>
    
        <label htmlFor={fieldName}> {labelText}</label>

        <div className='flex flex-row border border-solid border-1 focus-within:border-green-500 p-1
                                    has-[:invalid]:focus-within:border-red-500 w-full'>
            {icon && <img className='w-5 mr-2' src={icon}/>}

            <input {...register(fieldName, validation)} type={typeOfField} id={fieldName} name={fieldName}  className="outline-hidden w-full"  />
        
            {
                toggle && 
                    <ToggleToolTip
                        icon={toggle.icon}
                        message={toggle.message}
                    />
            
            
            }

        </div>
    
    </>);

}
