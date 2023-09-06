const SERVER_IP = "learningmern.up.railway.app";

export const ENV = {
	BASE_PATH: `https://${SERVER_IP}`,
	BASE_API: `https://${SERVER_IP}/api/v1`,
	API_ROUTES: {
		REGISTER: "auth/register",
		LOGIN: "auth/login",
		USER_ME: "user/me",
		USER: "user",
		REFRESH_ACCESS_TOKEN: "auth/refresh_access_token",
		USERS: "users",
		MENU: "menu",
		COURSE: "course",
		NEWSLETTER: "newsletter",
		POST: "post",
	},
	JWT: {
		ACCESS: "access",
		REFRESH: "refresh",
	},
};
