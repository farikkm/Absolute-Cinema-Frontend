import { MyButton } from "/src/shared/ui/MyButton";
import { MyInput } from "/src/shared/ui/MyInput";

const inputsDisplay = document.querySelector(".inputs");
const buttonDisplay = document.querySelector(".button");
const registerWrapper = document.getElementById("register-page");
const errorMessageDisplay = document.getElementById("error-message");

export function init() {
	// Buttons
	const loginBtn = MyButton("Register");

	// Inputs
	const fullNameInput = MyInput(
		"full-name",
		"text",
		"Full Name",
		"fa-solid fa-user",
	);
	const emailInput = MyInput("email", "email", "Email", "fa-solid fa-user");
	const passwordInput = MyInput(
		"password",
		"password",
		"Password",
		"fa-solid fa-eye-slash",
	);
	const repeatPasswordInput = MyInput(
		"repeat-password",
		"password",
		"Repeat password",
		"fa-solid fa-eye-slash",
	);
	const usernameInput = MyInput(
		"username",
		"text",
		"Username",
		"fa-solid fa-user",
	);

	// Add to Html
	inputsDisplay.innerHTML = "";
	inputsDisplay.append(
		fullNameInput,
		emailInput,
		passwordInput,
		repeatPasswordInput,
		usernameInput,
	);

	buttonDisplay.innerHTML = "";
	buttonDisplay.append(loginBtn);

	// Listeners AI
	loginBtn.addEventListener("click", async () => {
		const user = {
			username: usernameInput.firstChild.value,
			email: emailInput.firstChild.value,
			password: passwordInput.firstChild.value,
		};

		if (
			passwordInput.firstChild.value !== repeatPasswordInput.firstChild.value
		) {
			errorMessageDisplay.textContent = "Пароли не совпадают!";
			return;
		}

		try {
			const response = await fetch(
				"https://absolute-cinema-backend.onrender.com/api/v1/auth/register",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(user),
				},
			);
			const data = await response.json();

			registerWrapper.innerHTML = successfullRegister(data.data.user.username);

			setTimeout(() => {
				window.navigate("/home");
			}, 4000);
		} catch (error) {
			console.error("Register Error", error);
		}
	});
}

function successfullRegister(username) {
	return `
		<div class="successful-register wrapper">
			<img src="/images/auth/user-icon.png" alt="user-icon" />
			<span>${username}</span>
			<h1>Your account has been successfully created</h1>
		</div>
	`;
}
