import UserIcon from '../../assets/icons/user-icon.svg'
import PasswordIcon from '../../assets/icons/password-icon.svg'
import { useForm, type SubmitHandler, type FieldValues } from 'react-hook-form'
import { FormField } from '../field/FormField';
import { axiosInstance } from '../../config/AxiosConfig';
 
interface LoginFormInput extends FieldValues{
    username: string,
    password: string
}

export function LoginForm(){

    const {register, handleSubmit, formState: {errors}} = useForm<LoginFormInput>();

    //Handing the form validation
    const onSubmit: SubmitHandler<LoginFormInput> = async (data: LoginFormInput) => {

        await axiosInstance.post("auth/login",data)
                .then(() => alert("Login was succesful!"))
                .catch((err) => console.error(err));

    }

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
            error={errors}
            validation={{
                required:"Потребителското име е задължително!"
            }}
        />

        <FormField
        
            fieldName="password"
            labelText="* Парола:"
            typeOfField="password"
            icon={PasswordIcon}
            register={register}
            error={errors}
            validation={{
                required:"Паролата е задължителна!"
            }}
        />

        

        <button type="submit" className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4  rounded w-full cursor-pointer">Вход</button>
   
    </form>
    
    </>);
}