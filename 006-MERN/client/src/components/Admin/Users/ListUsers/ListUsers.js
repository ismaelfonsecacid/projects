import React from "react";

export default function ListUsers(props) {
	const { usersActive } = props;
	return (
		<div>
			<h2>Estamos usuarios</h2>
			<p>{usersActive ? "Activos" : "Inactivos"}</p>
		</div>
	);
}
