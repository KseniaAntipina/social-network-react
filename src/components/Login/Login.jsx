import React from 'react'
import {Form, Field} from 'react-final-form'
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {getCaptcha, login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";


const LoginForm = (props) => {

    if (props.isAuth) {return <Redirect to={"/profile"}/>}
    
    const onSubmit = async (formData) => {
        return await props.login(formData.email, formData.password, formData.rememberMe, formData.captchaUrl)
    };
    return (
        <>
            <h1>Login</h1>
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

                        {props.captchaUrl && <img src={props.captchaUrl} alt={"captcha"}/>}
                        {props.captchaUrl && <Field component={Input}
                                                    name={"captchaUrl"}
                                                    placeholder={"symbols from image"}
                                                    validate={required}/>}

                        <p>{submitError && <div>{submitError}</div>}</p>
                    </form>
                )}
            </Form>
        </>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(LoginForm);