import { useForm } from 'react-hook-form'
import { FormField } from '../field/FormField';
import QuestionIcon from '../../assets/icons/question-icon.svg'
import { FormSuggestionPopup } from '../popup/FormSuggestionPopup';
 


export function RegisterForm(){



    const {register, handleSubmit, formState: {errors}} = useForm();

    //Handing the form validation
    const onSubmit = () => {}

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
                    required:"Полето е задължително"
                }}
            />
            <FormField
            
                fieldName="uic"
                labelText="ЛНЧ или паспорт:"
                typeOfField="text"
                register={register}
                toggle={{
                    icon: QuestionIcon,
                    message: ""
                }}
                
            />
            <FormField
            
                fieldName="name-cyrillic"
                labelText="* Име и фамилия на кирилица:"
                typeOfField="text"
                register={register}
                validation={{
                    required:"Полето е задължително"
                }}

            />
            <FormField
            
                fieldName="name-latin"
                labelText="*  Име и фамилия на латиница:"
                typeOfField="text"
                register={register}
                validation={{
                    required:"Полето е задължително"
                }}
            />
            <FormField
            
                fieldName="email"
                labelText="* Имейл:"
                typeOfField="email"
                register={register}
                validation={{
                    required:"Полето е задължително"
                }}
            />
            <FormField
            
                fieldName="phone-number"
                labelText="* Телефон:"
                typeOfField="tel"
                register={register}
                validation={{
                    required:"Полето е задължително"
                }}
            />
            <FormField
            
                fieldName="address"
                labelText="* Адрес:"
                typeOfField="text"
                register={register}
                validation={{
                    required:"Полето е задължително"
                }}
            />

       

        <hr className='bg-red-500 w-full h-1 border border-none'/>
            <FormField
            
                fieldName="username"
                labelText="* Потребител:"
                typeOfField="text"
                register={register}
                validation={{
                    required:"Полето е задължително"
                }}
                toggle={{
                    icon: QuestionIcon,
                    message: "Изисквания за потребителско име: \n - Да е с дължина от минимум 10 символа; \n - Да няма специални символи в името;\n - Да е на латиница."
                }}
            />

            <FormField
            
                fieldName="passport"
                labelText="* Парола:"
                typeOfField="password"
                register={register}
                validation={{
                    required:"Полето е задължително"
                }}
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
                    required:"Полето е задължително"
                }}
            />

        <hr className='bg-red-500 w-full h-1 border border-none'/>
            

        <p className='text-sm'>Необходимо е да запомните потребителското си име и парола, които току-що въведохте. След като потвърдите регистрацията в банката, те ще Ви служат за вход във Виртуален банков клон (e-fibank).</p>
        

        <button type="submit" className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded w-full hover:hand">Регистриране</button>
   
    </form>
    
    </>);
}