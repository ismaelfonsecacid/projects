import React, { useEffect, useState } from "react";
import { size, map } from "lodash";
import { Loader } from "semantic-ui-react";
import { Menu } from "../../../../api";
import { MenuItem } from "../MenuItem";

export default function ListMenu(props) {
	const menuController = new Menu();
	const { active } = props;
	const [menus, setMenus] = useState(null);

	useEffect(() => {
		(async () => {
			try {
				setMenus(null);
				const response = await menuController.getMenu(active);
				setMenus(response);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [active]);

	if (!menus) return <Loader active inline="centered" />;
	if (size(menus) === 0) return "No hay ningun menu";

	return map(menus, (menu) => <MenuItem key={menu._id} menu={menu} />);
}
