import React, { useState } from "react";
import { Tab, Button } from "semantic-ui-react";
import { BasicModal } from "../../../components/Shared";
import { ListCourses, CourseForm } from "../../../components/Admin/";

import "./Courses.scss";

export default function Courses() {
	const [showModal, setShowModal] = useState(false);
	const [reload, setReload] = useState(false);

	const onOpenCloseModal = () => setShowModal((prevState) => !prevState);
	const onReload = () => setReload((prevState) => !prevState);
	return (
		<>
			<div className="courses-page">
				<div className="courses-page__add">
					<Button primary onClick={onOpenCloseModal}>
						Nuevo Curso
					</Button>
				</div>
				<Tab.Pane attached={false}>
					<ListCourses reload={reload} onReload={onReload} />
				</Tab.Pane>
			</div>

			<BasicModal show={showModal} close={onOpenCloseModal} title="Crear Curso">
				<CourseForm onClose={onOpenCloseModal} onReload={onReload} />
			</BasicModal>
		</>
	);
}
