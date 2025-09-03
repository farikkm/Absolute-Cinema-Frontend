function MyButton(text) {
    const btn = document.createElement("button");
    btn.id = "auth-btn"
    btn.textContent = text;

    return btn;
}

export { MyButton };
