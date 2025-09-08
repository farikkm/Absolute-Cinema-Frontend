export function isAuth() {
	const accessToken = localStorage.getItem("absolute-cinema-access-token");
	if (!accessToken) {
		window.navigate("/login");
	}
}
