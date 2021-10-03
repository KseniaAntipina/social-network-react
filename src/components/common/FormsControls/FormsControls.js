import React from 'react'
import styles from './FormControl.module.css'

const FormControl = ({input, meta, children, ...props}) => {
    const hasError = meta.error && meta.touched

    return (
        <>
            <div className={`${styles.formControl} ${ hasError ? styles.error : meta.error}`}>
                <div>
                    {children}
                </div>
                { hasError && <span>{meta.error}</span>}
            </div>
        </>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/>
        {(meta.error || meta.submitError) && meta.touched && (
            <span>{meta.error || meta.submitError}</span>
        )}
    </FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}