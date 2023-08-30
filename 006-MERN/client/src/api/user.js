import { ENV } from "../utils";

class User {
	baseApi = ENV.BASE_API;

	async getMe(accessToken) {
		try {
			const url = `${this.baseApi}/${ENV.API_ROUTES.USER_ME}`;
			const params = {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			};
			const response = await fetch(url, params);
			const result = await response.json();

<<<<<<< HEAD
			if (response.status !== 201) throw result;
=======
			if (response.status !== 200) throw result;
>>>>>>> pruebaLogin

			return result;
		} catch (error) {
			throw error;
		}
	}

	async createUser(accessToken, data) {
		try {
			const formData = new FormData(); //use for frop img
			Object.keys(data).forEach((key) => {
				formData.append(key, data[key]);
			});

			if (data.fileAvatar) {
				formData.append("avatar", data.fileAvatar);
			}

			const url = `${this.baseApi}/${ENV.API_ROUTES.USER}`;
			const params = {
				method: "POST",
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
				body: formData,
			};

			const response = await fetch(url, params);
			const result = await response.json();

			if (response.status !== 201) throw result;


			return result;
		} catch (error) {
			throw error;
		}
	}
}

export default User;
