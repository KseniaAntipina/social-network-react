import React from 'react'
import { Form, Field } from 'react-final-form'


const LoginForm  = () => {

    return (
        <Form
            onSubmit={formData => {
                console.log(formData);
            }}>
            {({ handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <div><Field name="login" component="input" placeholder="login" /></div>
                        <div><Field name="password" component="input" placeholder="input" /></div>
                        <div><Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me</div>
                    </div>
                    <button type="submit">Login</button>
                </form>
            )}
        </Form>
    )
}



const Login = () => {

    return <div>
        <h1>Login</h1>
        <LoginForm/>
    </div>
}

export default Login;