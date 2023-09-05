import React from "react";
import { Container } from "semantic-ui-react";
import "./ClientLayout.scss";
import { TopBar, Info, Menu, Newsletter } from "../../components/Web";

export function ClientLayout(props) {
	const { children } = props;
	return (
		<div className="client-layout">
			<div className="client-layout__header">
				<TopBar />
				{children}

				<div className="client-layout__footer">
					<Container>
						<Info />
						<Menu />
						<Newsletter />
					</Container>
					<Container>
						<span>derechos</span>
						<span>Ismael Fonseca Cid | DEVELOPER</span>
					</Container>
				</div>
			</div>
		</div>
	);
}
