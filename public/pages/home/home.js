import { isAuth } from "/src/utils/isAuth";
import { Header } from "/src/widgets/header";

export function init() {
	isAuth();
	const app = document.getElementById("app");

	app.innerHTML = Header();
}
