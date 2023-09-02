import { ENV } from "../utils";

class Course {
	baseApi = ENV.BASE_API;

	async getCourses(params) {
		try {
			const pageFilter = `page=${params?.page || 1}`;
			const limitFilter = `limit=${params?.limit || 10}`;

			const url = `${this.baseApi}/${ENV.API_ROUTES.COURSE}?${pageFilter}&${limitFilter}`;

			const response = await fetch(url);
			const result = await response.json();

			if (response.status !== 200) throw result;
			return result;
		} catch (error) {}
	}
}

export default Course;
