import { MyButton } from "/src/shared/ui/MyButton";
import { MyInput } from "/src/shared/ui/MyInput";

const inputsDisplay = document.querySelector(".inputs");
const buttonDisplay = document.querySelector(".button")

export function init() {
	const loginBtn = MyButton("Login");
	const emailInput = MyInput("email", "email", "Email", "fa-solid fa-user");
	const passwordInput = MyInput(
		"password",
		"password",
		"Password",
		"fa-solid fa-eye-slash",
	);
 
	inputsDisplay.innerHTML = "";
	inputsDisplay.append(emailInput, passwordInput);

	buttonDisplay.innerHTML = "";
	buttonDisplay.append(loginBtn);

	loginBtn.addEventListener("click", async () => {
		const user = {
			email: emailInput.firstChild.value,
			password: passwordInput.firstChild.value,
		};

		try {
			const response = await fetch(
				"https://absolute-cinema-backend.onrender.com/api/v1/auth/login",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(user),
				},
			);
			const data = await response.json();

			inputsDisplay.innerHTML = successfullLogin(data.data.user.username);

			setTimeout(() => {
				window.navigate("/");
			}, 4000);

			console.log(data);
		} catch (error) {
			console.error("Login Error", error);
		}
	});
}

function successfullLogin(username) {
	const wrapper = document.createElement("div");
    wrapper.className = ""

	const usernameDisplay = document.createElement("h1");
	usernameDisplay.textContent = username;

	return wrapper;
}
