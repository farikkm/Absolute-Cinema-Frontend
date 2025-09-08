import { Header } from "/src/widgets/header";

export function init() {
	const app = document.getElementById("app");

	app.innerHTML = Header();
}
