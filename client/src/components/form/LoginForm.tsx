import UserIcon from '../../assets/icons/user-icon.svg'
import PasswordIcon from '../../assets/icons/password-icon.svg'
import { useForm } from 'react-hook-form'
import { FormField } from '../field/FormField';
 


export function LoginForm(){

    const {register, handleSubmit, formState: {errors}} = useForm();

    //Handing the form validation
    const onSubmit = () => {}

    return (<>

    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start justify-center p-5 mr-[5%] md:mr-0 ml-[5%] md:ml-[15%]
                                                        bg-white rounded-md shadow-md gap-4
                                                        min-w-40 lg:min-h-80">

        <h2 className='font-bold text-blue-700 text-xl'>Вход в My Fibank:</h2>

        <FormField
        
            fieldName="username"
            labelText="* Потребител:"
            typeOfField="text"
            icon={UserIcon}
            register={register}
            validation={{
                required:"Username field is requierd"
            }}
        />

        <FormField
        
            fieldName="passport"
            labelText="* Парола:"
            typeOfField="password"
            icon={PasswordIcon}
            register={register}
            validation={{
                required:"Username field is requierd"
            }}
        />

        

        <button type="submit" className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded w-full">Вход</button>
   
    </form>
    
    </>);
}