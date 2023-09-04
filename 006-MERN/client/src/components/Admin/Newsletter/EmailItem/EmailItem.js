import React, { useState } from "react";
import { Button, Icon, Confirm } from "semantic-ui-react";
import { Newsletter } from "../../../../api";
import { useAuth } from "../../../../hooks";
import "./EmailItem.scss";

const newsController = new Newsletter();
export default function EmailItem(props) {
	const { email, onReload } = props;
	const [showConfirm, setShowConfirm] = useState(false);
	const { accessToken } = useAuth();

	const onOpenCloseConfirm = () => setShowConfirm((prevState) => !prevState);

	const onDelete = async () => {
		try {
			await newsController.deleteEmail(accessToken, email._id);
			onReload();
			onOpenCloseConfirm();
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<>
			<div className="email-item">
				<span>{email.email}</span>

				<div>
					<Button icon color="red" onClick={onOpenCloseConfirm}>
						<Icon name="trash" />
					</Button>
				</div>
			</div>

			<Confirm
				open={showConfirm}
				onCancel={onOpenCloseConfirm}
				onConfirm={onDelete}
				content={`Eliminar ${email.email}`}
				size="mini"
			/>
		</>
	);
}
