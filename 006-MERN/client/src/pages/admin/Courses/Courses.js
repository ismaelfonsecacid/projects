import React, { useState } from "react";
import { Tab, Button } from "semantic-ui-react";
import { BasicModal } from "../../../components/Shared";
import { ListCourses } from "../../../components/Admin/";
import "./Courses.scss";

export default function Courses() {
	const [showModal, setShowModal] = useState(false);

	const onOpenCloseModal = () => setShowModal((prevState) => !prevState);
	return (
		<>
			<div className="courses-page">
				<div className="courses-page__add">
					<Button primary onClick={onOpenCloseModal}>
						Nuevo Curso
					</Button>
				</div>
				<Tab.Pane attached={false}>
					<ListCourses />
				</Tab.Pane>
			</div>

			<BasicModal show={showModal} close={onOpenCloseModal} title="Crear Curso">
				<p>Formulario para crear un curso</p>
			</BasicModal>
		</>
	);
}
