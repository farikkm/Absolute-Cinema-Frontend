function MyInput(id, type, placeholder, iconClassName) {
	const wrapper = document.createElement("div");
	wrapper.className = "input-wrapper";

	const input = document.createElement("input");
	input.id = id;
	input.name = id;
	input.type = type;
	input.placeholder = placeholder;

	const icon = document.createElement("i");
	icon.className = iconClassName;

	wrapper.append(input, icon);
	
	return wrapper;
}

export { MyInput };
