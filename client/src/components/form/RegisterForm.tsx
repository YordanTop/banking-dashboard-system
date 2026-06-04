import { useForm, type FieldValues, type SubmitHandler } from 'react-hook-form'
import { FormField } from '../field/FormField';
import QuestionIcon from '../../assets/icons/question-icon.svg'
import { axiosInstance } from '../../config/AxiosConfig';
import { egnValidationChecker } from './customValidation/register/registerValidation';
import { useNavigate } from 'react-router';
import { AuthenticationContext } from '../../context/AuthenticationContext';
import { useContext } from 'react';
 
interface RegisterFormInput extends FieldValues{
    egn: string
    uic?: string
    fullnameCyrillic: string,
    fullnameLatin: string,
    email: string,
    phoneNumber: string,
    address: string,

    username: string,
    password: string
}

export function RegisterForm(){

    const {register, handleSubmit, watch, formState: {errors}} = useForm<RegisterFormInput>();

    const navigate = useNavigate();
    const authentication = useContext(AuthenticationContext);

    //Handing the form validation
    const onSubmit: SubmitHandler<RegisterFormInput> = async (data: RegisterFormInput) => {

        await axiosInstance.post("auth/register",data)
                .then(async (result) => {
                        console.log(result.data);
                await authentication?.rewriteAuthenticationCache()
                .catch((error) =>{
                    console.warn(`Server could not fetch the data! ${error}`);
                })

                
                navigate('/login', { replace: true });
            
            })
            .catch((error) => {
                console.error('Server request failed: ', error);
            });

    }

    const passwordValue = watch("password");

    return (<>

    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start justify-center p-5  mr-[5%] ml-[5%]  mt-5 mb-10 
                                                        bg-white rounded-md shadow-md gap-4
                                                        min-w-40 lg:min-h-80">

        <h2 className='font-bold text-red-700 text-xl'>Регистрирация на нов потребител:</h2>

        <p className='text-sm'> Тази регистрационна форма се попълва, само ако нямате потребител и парола за Виртуален банков клон (e-fibank) на ПИБ. Ако вече имате потребител и парола, добавянето на достъп до ново физическо или юридическо лице става в банката. Ако сте забравили своя потребител и/или парола, заповядайте в банката, за да ги получите.</p>
        
        <hr className='bg-red-500 w-full h-1 border border-none'/>
            
            <FormField
            
                fieldName="egn"
                labelText="* ЕГН:"
                typeOfField="text"
                register={register}
                validation={{
                    required:"Полето е задължително!",
                    validate:egnValidationChecker
                }}
                error={errors}
            />
            <FormField
            
                fieldName="uic"
                labelText="ЛНЧ или паспорт:"
                typeOfField="text"
                register={register}
                error={errors}
                toggle={{
                    icon: QuestionIcon,
                    message: ""
                    
                }}
                validation={{
                    minLength:{
                        value:10,
                        message:"Полето трябва да има точно 10 числа!"
                    },
                    maxLength:{
                        value:10,
                        message:"Полето трябва да има точно 10 числа!"
                    },
                    pattern: {
                            value: /^[0-9]+$/,
                            message: "Моля, въведете само числа!" 
                        }
                    
                }}
                
            />
            <FormField
            
                fieldName="fullnameLatin"
                labelText="*  Име и фамилия на латиница:"
                typeOfField="text"
                register={register}
                validation={{
                    required:"Полето е задължително!",
                    
                }}
                error={errors}
            />
            <FormField
            
                fieldName="email"
                labelText="* Имейл:"
                typeOfField="text"
                register={register}
                validation={{
                    required:"Полето е задължително!",
                    pattern:{
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Невалиден имейл адрес!',    
                    }
                }}
                error={errors}
            />
            <FormField
            
                fieldName="phoneNumber"
                labelText="* Телефон:"
                typeOfField="text"
                register={register}
                validation={{
                    required:"Полето е задължително!",
                    pattern: {
                            value: /^08[7-9]\d{7}$/,
                            message: "Моля, въведете български мобилен телефон който започва с цифрите: 08(7-9)!" 
                        }
                    
                }}
                error={errors}
            />
            <FormField
            
                fieldName="address"
                labelText="* Адрес:"
                typeOfField="text"
                register={register}
                validation={{
                    required:"Полето е задължително!",
                    minLength: {
                            value: 6,
                            message: "Моля, въведете по-детайлен адрес!"
                        },
                    pattern: {
                            value: /^[A-Za-z0-9\s.,\/#\-]+$/,
                            message: "Моля, въведете адреса само с латински букви!"
                        }
                }}
                error={errors}
            />

       

        <hr className='bg-red-500 w-full h-1 border border-none'/>
            <FormField
            
                fieldName="username"
                labelText="* Потребител:"
                typeOfField="text"
                register={register}
                validation={{
                    required:"Полето е задължително!"
                }}
                error={errors}
                toggle={{
                    icon: QuestionIcon,
                    message: "Изисквания за потребителско име: \n - Да е с дължина от минимум 10 символа; \n - Да няма специални символи в името;\n - Да е на латиница."
                }}
            />

            <FormField
            
                fieldName="password"
                labelText="* Парола:"
                typeOfField="password"
                register={register}
                validation={{
                    required:"Полето е задължително!",
                    pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,24}$/,
                        message: "Паролата трябва да е между 6 и 24 знака, на латиница и да съдържа поне една буква и една цифра!"
                    }
                }}
                error={errors}
                toggle={{
                    icon: QuestionIcon,
                    message: "Изисквания за парола: \n - Да е с дължина от 6 до 24 знака; \n - Да съдържа поне една буква;\n - Да съдържа поне една цифра; \n - Да е на латиница."
                }}
            />

            <FormField
            
                fieldName="passport-repeat"
                labelText="* Повторете парола:"
                typeOfField="password"
                register={register}
                validation={{
                    required:"Полето е задължително!",
                    validate: (value) => value === passwordValue || "Паролите не съвпадат!"
                }}
                error={errors}
            />

        <hr className='bg-red-500 w-full h-1 border border-none'/>
            

        <p className='text-sm'>Необходимо е да запомните потребителското си име и парола, които току-що въведохте. След като потвърдите регистрацията в банката, те ще Ви служат за вход във Виртуален банков клон (e-fibank).</p>
        

        <button type="submit" className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded w-full hover:hand cursor-pointer">Регистриране</button>
   
    </form>
    
    </>);
}