import React from "react";
import { useState } from "react";
import { Tab, Button } from "semantic-ui-react";
import "./Users.scss";
import { BasicModal } from "../../../components/Shared";
import { UserForm, ListUsers } from "../../../components/Admin";

export default function Users() {
	const [showModal, setShowModal] = useState(false);
	const [reload, setreload] = useState(false);

	const onOpenCloseModal = () => {
		setShowModal((prevState) => !prevState);
	};

	const onReload = () => {
		setreload((prevState) => !prevState);
	};

	const panes = [
		{
			menuItem: "Usuarios activos",
			render: () => (
				<Tab.Pane attached={false}>
					<ListUsers usersActive={true} reload={reload} onReload={onReload} />
				</Tab.Pane>
			),
		},
		{
			menuItem: "Usuarios inactivos",
			render: () => (
				<Tab.Pane attached={false}>
					<ListUsers usersActive={false} reload={reload} onReload={onReload} />
				</Tab.Pane>
			),
		},
	];

	return (
		<>
			<div className="users-page">
				<Button className="users-page__add" primary onClick={onOpenCloseModal}>
					Nuevo Usuario
				</Button>
				<Tab menu={{ secondary: true }} panes={panes} />
			</div>

			<BasicModal
				show={showModal}
				title={"Crear nuevo usuario"}
				close={onOpenCloseModal}
			>
				<UserForm close={onOpenCloseModal} onReload={onReload} />
			</BasicModal>
		</>
	);
}
