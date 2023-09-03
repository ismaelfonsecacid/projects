import React from "react";
import { Button, Icon, Confirm } from "semantic-ui-react";
import "./EmailItem.scss";

export default function EmailItem(props) {
	const { email } = props;
	return (
		<>
			<div className="email-item">
				<span>{email.email}</span>

				<div>
					<Button icon color="red">
						<Icon name="trash" />
					</Button>
				</div>
			</div>
		</>
	);
}
