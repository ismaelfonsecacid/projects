import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import { useFormik } from 'formik'
import { initialValues, validationSchema } from './RegisterForm.form'
import './RegisterForm.scss';
import { Auth } from '../../../../api'


const authController = new Auth();

export default function RegisterForm(props) {
    const { openLogin } = props
    const [error, setError] = useState(""); // Corrected the state variable name

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                setError('')
                await authController.register(formValue);
                openLogin();

            } catch (error) {
                console.error(error);
            }
        }
    });

    return (
        <Form className='register-form' onSubmit={formik.handleSubmit}>
            <Form.Input name='email' placeholder='Correo electrónico' onChange={formik.handleChange} value={formik.values.email} error={formik.errors.email} />
            <Form.Input name='password' type='password' placeholder='Contraseña' onChange={formik.handleChange} value={formik.values.password} error={formik.errors.password} />
            <Form.Input name='repeatPassword' type='password' placeholder='Repetir Contraseña' onChange={formik.handleChange} value={formik.values.repeatPassword} error={formik.errors.repeatPassword} />
            <Form.Checkbox name='conditionsAccept' label='He leído y acepto las políticas de privacidad' onChange={(_, data) => formik.setFieldValue('conditionsAccept', data.checked)} checked={formik.values.conditionsAccept} error={Boolean(formik.errors.conditionsAccept)} /> {/* Ensure error prop is boolean */}
            <Form.Button type='submit' primary fluid loading={formik.isSubmitting}>
                Crear cuenta
            </Form.Button>
            <p className='register-form__error'>{error}</p>
        </Form>
    );
}
