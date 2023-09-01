import React, { useState } from "react";
import "./UserItem.scss";
import { Image, Button, Icon, Confirm } from "semantic-ui-react";
import { image } from "../../../../assets";
import { ENV } from "../../../../utils";
import { BasicModal } from "../../../Shared/";
import { UserForm } from "../UserForm";
import { useAuth } from "../../../../hooks";
import { User } from "../../../../api";
export default function UserItem(props) {
	const userController = new User();
	const { accessToken } = useAuth();
	const { user, onReload } = props;
	const [showModal, setShowModal] = useState(false);
	const [titleModal, setTitleModal] = useState("");

	const [showConfirm, setShowConfirm] = useState(false);
	const [confirmMessage, setConfirmMessage] = useState("");
	const [isDelete, setIsDelete] = useState(false);

	const onOpenCloseModal = () => {
		setShowModal((prevState) => !prevState);
	};

	const openUpdateUser = () => {
		setTitleModal(`Actualizar ${user.email}`);
		onOpenCloseModal();
	};

	const onOpenCloseConfirm = () => {
		setShowConfirm((prevState) => !prevState);
	};

	const onActivateDesactivate = async () => {
		try {
			await userController.updateUser(accessToken, user._id, {
				active: !user.active,
			});
			onReload();
			onOpenCloseConfirm();
		} catch (error) {
			console.error(error);
		}
	};

	const openDesactivateActivateConfirm = () => {
		setIsDelete(false);
		setConfirmMessage(
			user.active
				? `Desactivar usuario ${user.email}`
				: `Activar usuario ${user.email}`
		);
		onOpenCloseConfirm();
	};

	const openDeleteConfirm = () => {
		setIsDelete(true);
		setConfirmMessage(`Eliminar usuario ${user.email}`);
		onOpenCloseConfirm();
	};

	const onDelete = async () => {
		try {
			await userController.deleteUser(accessToken, user._id);
			onReload();
			onOpenCloseConfirm();
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<>
			<div className="user-item">
				<div className="user-item__info">
					<span>
						<Image
							avatar
							src={
								user.avatar ? `${ENV.BASE_PATH}/${user.avatar}` : image.noAvatar
							}
						/>
					</span>
					<div>
						<p>
							{user.firstname} {user.lastname}
						</p>
						<p>{user.email}</p>
					</div>
				</div>
				<div>
					<Button icon primary onClick={openUpdateUser}>
						<Icon name="pencil" />
					</Button>
					<Button
						icon
						color={user.active ? "orange" : "teal"}
						onClick={openDesactivateActivateConfirm}
					>
						<Icon name={user.active ? "ban" : "check"} />
					</Button>
					<Button icon color="red" onClick={openDeleteConfirm}>
						<Icon name="trash" />
					</Button>
				</div>
			</div>

			<BasicModal show={showModal} close={onOpenCloseModal} title={titleModal}>
				<UserForm close={onOpenCloseModal} user={user} onReload={onReload} />
			</BasicModal>
			<Confirm
				open={showConfirm}
				onCancel={onOpenCloseConfirm}
				onConfirm={isDelete ? onDelete : onActivateDesactivate}
				content={confirmMessage}
				size="mini"
			/>
		</>
	);
}
