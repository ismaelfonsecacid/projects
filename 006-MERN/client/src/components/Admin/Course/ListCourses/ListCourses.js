import React, { useEffect, useState } from "react";
import { Course } from "../../../../api";
import { size, map } from "lodash";
import { Loader, Pagination } from "semantic-ui-react";
import { CourseItem } from "../CourseItem";
import "./ListCourses.scss";

export default function ListCourses(props) {
	const { reload, onReload } = props;
	const courseController = new Course();
	const [courses, setCourses] = useState(false);
	const [page, setPage] = useState(1);
	const [pagination, setPagination] = useState();

	useEffect(() => {
		(async () => {
			try {
				const response = await courseController.getCourses({ page });

				setCourses(response.docs);
				setPagination({
					limit: response.limit,
					page: response.page,
					pages: response.pages,
					total: response.total,
				});
			} catch (error) {
				throw error;
			}
		})();
	}, [page, reload]);

	const changePage = (_, data) => {
		setPage(data.activePage);
	};

	if (!courses) return <Loader active inline="centered" />;
	if (size(courses) === 0) return "No hay cursos";

	return (
		<div className="list-courses">
			{map(courses, (course) => (
				<CourseItem key={course._id} course={course} onReload={onReload} />
			))}

			<div className="list-courses__pagination">
				<Pagination
					totalPages={pagination.pages}
					defaultActivePage={pagination.page}
					ellipsisItem={null}
					firstItem={null}
					lastItem={null}
					onPageChange={changePage}
				/>
			</div>
		</div>
	);
}
