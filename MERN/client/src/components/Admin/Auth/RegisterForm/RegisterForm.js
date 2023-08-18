import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import './RegisterForm.scss';

export default function RegisterForm() {
    const [error, seterror] = useState("");

    return (
        <Form className='register-form'>
            <Form.Input name='email' placeholder='Correo electrónico' />
            <Form.Input name='password' type='password' placeholder='Contraseña' />
            <Form.Input name='repeatPassword' type='password' placeholder='Repetir Contraseña' />
            <Form.Checkbox name='conditionsAccept' label='He leído y acepto las políticas de privacidad' />
            <Form.Button type='submit' primary>
                Crear cuenta
            </Form.Button>
            <p className='register-form__error'>{error}</p>

        </Form>
    );
}
