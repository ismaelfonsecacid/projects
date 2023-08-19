import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import { useFormik } from 'formik'
import { initialValues } from './RegisterForm.form'
import './RegisterForm.scss';

export default function RegisterForm() {
    const [error, seterror] = useState("");

    const formik = useFormik({
        initialValues: initialValues(),
        onSubmit: async (formValue) => {
            try {
                console.log(formValue);
            } catch (error) {
                console.error(error);
            }
        }
    })

    return (
        <Form className='register-form' onSubmit={formik.handleSubmit}>
            <Form.Input name='email' placeholder='Correo electrónico' onChange={formik.handleChange} value={formik.values.email} />
            <Form.Input name='password' type='password' placeholder='Contraseña' onChange={formik.handleChange} value={formik.values.password} />
            <Form.Input name='repeatPassword' type='password' placeholder='Repetir Contraseña' onChange={formik.handleChange} value={formik.values.repeatPassword} />
            <Form.Checkbox name='conditionsAccept' label='He leído y acepto las políticas de privacidad' onChange={(_, data) => formik.setFieldValue('conditionsAccepted', data.checked)} checked={formik.values.conditionAccepted} />
            <Form.Button type='submit' primary fluid loading={formik.isSubmitting}>
                Crear cuenta
            </Form.Button>
            <p className='register-form__error'>{error}</p>

        </Form>
    );
}
