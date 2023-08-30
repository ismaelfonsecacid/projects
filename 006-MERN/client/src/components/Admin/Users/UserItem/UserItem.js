import React from "react";
import "./UserItem.scss";
import { Image, Button, Icon, Confirm } from "semantic-ui-react";
import { image } from "../../../../assets";
import { ENV } from "../../../../utils";
export default function UserItem(props) {
	const { user } = props;
	console.log(user);
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
					<Button icon primary>
						<Icon name="pencil" />
					</Button>
					<Button icon color={user.active ? "orange" : "teal"}>
						<Icon name={user.active ? "ban" : "check"} />
					</Button>
					<Button icon color="red">
						<Icon name="trash" />
					</Button>
				</div>
			</div>
		</>
	);
}
