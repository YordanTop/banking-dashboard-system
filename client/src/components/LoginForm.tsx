

function LoginForm() {

    return (
        <>
        {/*  */}

            <form action="" method="post" className="flex flex-col items-start justify-center p-6
                                                     background-white rounded-md shadow-md gap-4
                                                     bg-white rounded-md shadow-md">

                
                <label htmlFor="username">Потребител: </label>
                <input type="text" id="username" name="username" className="border border-solid w-full" required />

                <label htmlFor="password">Парола: </label>
                <input type="password" id="password" name="password" className=" border border-solid w-full " required />

                <button type="submit" className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">Вход</button>
            </form>
        
        </>
    );

}

export default LoginForm;