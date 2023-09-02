import React, { useEffect, useState } from "react";
import { Course } from "../../../../api";
import { size, map } from "lodash";
import { Loader, Pagination } from "semantic-ui-react";
import { CourseItem } from "../CourseItem";
import "./ListCourses.scss";

export default function ListCourses() {
	const courseController = new Course();
	const [courses, setCourses] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				const response = await courseController.getCourses();

				setCourses(response.docs);
			} catch (error) {
				throw error;
			}
		})();
	}, []);

	if (!courses) return <Loader active inline="centered" />;
	if (size(courses) === 0) return "No hay cursos";

	return (
		<div className="list-courses">
			{map(courses, (course) => (
				<CourseItem key={course._id} course={course} />
			))}

			<div className="list-courses__pagination">
				<Pagination
					totalPages={20}
					defaultActivePage={1}
					ellipsisItem={null}
					firstItem={null}
					lastItem={null}
					onPageChange={() => console.log("cambio")}
				/>
			</div>
		</div>
	);
}
