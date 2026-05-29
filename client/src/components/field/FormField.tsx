import type { Field } from "./Field";
import { ToggleToolTip } from "../toggle/ToggleToolTipField";
import { ErrorMessage } from "@hookform/error-message"

export function FormField({fieldName, labelText, typeOfField, icon, register, validation, error, toggle  }: Field){

    return(<>
    
        <label htmlFor={fieldName}> {labelText}</label>

        <div className='flex flex-row border border-solid border-1 p-1
                                    has-[:invalid]:focus-within:border-red-500 w-full'>
            {icon && <img className='w-5 mr-2' src={icon}/>}

            {register && 
            
                <input {...register(fieldName, validation)} type={typeOfField} id={fieldName} name={fieldName}  className="outline-hidden w-full"  />
            
            }

            {!register && <input type={typeOfField} id={fieldName} name={fieldName}  className="outline-hidden w-full"  />}
            

            {
                toggle && 
                    <ToggleToolTip
                        icon={toggle.icon}
                        message={toggle.message}
                    />
            
            }

        </div>


            {error &&                 
            
            <div className="text-xs md:text-sm text-red-500">
                <ErrorMessage  
                    errors={error}
                    name={fieldName}
                    render={({ message }) => <p>{message}</p>}
                />
            </div>
            }
            

    </>);

}
