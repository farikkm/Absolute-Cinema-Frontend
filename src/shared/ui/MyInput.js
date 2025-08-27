function MyInput(id, type, placeholder, iconUrl) {
	const wrapper = document.createElement("div");
	wrapper.className = "input-wrapper";

	const input = document.createElement("input");
	input.id = id;
	input.name = id;
	input.type = type;
	input.placeholder = placeholder;

	const img = document.createElement("img");
	img.src = iconUrl;
	img.alt = iconUrl.split("/").pop();

	wrapper.append(input, img);

	const obj = {
		name: "Fariz",
		lastName: "Mirzayev",
	};

	const obj2 = { name: "farik" };

	return wrapper;
}

export { MyInput };
