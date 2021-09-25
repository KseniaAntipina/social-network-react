import React from 'react'
import {Form, Field} from 'react-final-form'
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";


const LoginForm = (props) => {

    if (props.isAuth) {return <Redirect to={"/profile"}/>}
    
    const onSubmit = async (formData) => {
        return await props.login(formData.email, formData.password, formData.rememberMe)
    };
    return (
        <>
            <Form
                onSubmit={onSubmit}>
                {({handleSubmit, submitError}) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div><Field name="email" component={Input} placeholder="email" validate={required}/></div>
                            <div><Field name="password" component={Input} placeholder="input" validate={required}
                                        type={"password"}/></div>
                            <div><Field component={Input} name={"rememberMe"} type={"checkbox"}/> remember me</div>
                        </div>
                        <button type="submit">Login</button>
                        <p>{submitError && <div>{submitError}</div>}</p>
                    </form>
                )}
            </Form>
        </>
    )
}

/*const Login = () => {

    return <div>
        <h1>Login</h1>
        <LoginForm/>
    </div>
}*/

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(LoginForm);