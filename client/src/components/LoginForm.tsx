

function LoginForm() {

    return (
        <>

        <div className="">

            <form action="" method="post" className="flex flex-col items-center justify-center p-6">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required placeholder="Enter username" />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />

                <button type="submit">Login</button>
            </form>

        </div>
        
        </>
    );

}

export default LoginForm;