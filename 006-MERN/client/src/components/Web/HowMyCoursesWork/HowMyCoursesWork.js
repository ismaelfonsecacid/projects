import React from "react";
import "./HowMyCoursesWork.scss";
import { Container, Icon } from "semantic-ui-react";
import { map } from "lodash";
import { itemsData } from "./HowMyCoursesWork.data";
export default function HowMyCoursesWork() {
	return (
		<Container className="how">
			<h2>Como funcionan los cursos</h2>
			<h4>
				Cada curso cuenta on contenido multimedia, activa las 24horas del dia,
				los 365 dias del año
			</h4>
			<div className="how__items">
				{map(itemsData, (item, index) => (
					<div key={index}>
						<div>
							<Icon name={item.icon} />
							<h3>{item.title}</h3>
							<p>{item.description}</p>
						</div>
					</div>
				))}
			</div>
		</Container>
	);
}
