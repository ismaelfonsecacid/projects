import { Await } from 'react-router-dom';
import { ENV } from '../utils';

export class Auth {
    base_api = ENV.BASE_API;

    async register(data) {
        try {
            const url = `${this.base_api}/${ENV.API_ROUTES.REGISTER}`;
            const params = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(
                    {
                        email: data.email,
                        password: data.password,
                    }
                )
            };

            const response = await fetch(url, params);
            const result = await response.json();

            if (response.status !== 200) { throw result }
        } catch (error) {
            throw error;
        }
    }
}