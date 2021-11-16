import React from 'react'
import {Form, Field} from 'react-final-form'
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from './Login.module.css'

const LoginForm = (props) => {

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    const onSubmit = async (formData) => {
        return await props.login(formData.email, formData.password, formData.rememberMe, formData.captchaUrl)
    };
    return (
        <>
            <h1 className={s.title}>Login</h1>
            <div className={s.loginBlock}>
                <Form
                    onSubmit={onSubmit}>
                    {({handleSubmit, submitError}) => (
                        <form onSubmit={handleSubmit}>

                            <Field name="email" component={Input} placeholder="email" validate={required}/>
                            <Field name="password" component={Input} placeholder="input" validate={required}
                                   type={"password"}/>

                            {/* <Field component={Input} name={"rememberMe"} type={"checkbox"}/> remember me*/}

                            <button type="submit" className="btnDefault">Login</button>
                            <p><b>*Test account</b></p>
                            <p>Email: free@samuraijs.com </p>
                            <p>Password: free</p>

                                    {props.captchaUrl && <img src={props.captchaUrl} alt={"captcha"}/>}
                                    {props.captchaUrl && <Field component={Input}
                                                                name={"captchaUrl"}
                                                                placeholder={"symbols from image"}
                                                                validate={required}/>}

                                    <p>{submitError && <div>{submitError}</div>}</p>
                        </form>
                        )}
                        </Form>
                        </div>
                        </>
                        )
                    }

                    const mapStateToProps = (state) => ({
                    isAuth: state.auth.isAuth,
                    captchaUrl: state.auth.captchaUrl
                })

                    export default connect(mapStateToProps, {login})(LoginForm);