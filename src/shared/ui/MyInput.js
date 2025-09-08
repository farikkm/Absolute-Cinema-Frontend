function MyInput(id, type, placeholder, iconClassName) {
	const wrapper = document.createElement("div");
	wrapper.className = "input-wrapper";

	const input = document.createElement("input");
	input.id = id;
	input.name = id;
	input.type = type;
	input.autocomplete = "auto";
	input.placeholder = placeholder;

	const icon = document.createElement("i");
	icon.className = iconClassName;

	if (type === "password") {
		icon.onclick = () => {
			if (input.type === "password") {
				input.type = "text";
				icon.className = "fa-solid fa-eye";
			} else {
				input.type = "password";
				icon.className = "fa-solid fa-eye-slash";
			}
		};
	}

	wrapper.append(input, icon);

	return wrapper;
}

export { MyInput };
