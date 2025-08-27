export function init() {
    const loginBtn = document.querySelector("#login");

    const user = {
        email: "absulute2@gmail.com",
        password: "absolute23"
    }

    loginBtn.addEventListener("click", async () => {
        try {
            const response = await fetch("https://absolute-cinema-backend.onrender.com/api/v1/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Login Error", error)
        }
    })
}