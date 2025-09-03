import { MyInput } from "/src/shared/ui/MyInput";
import { register } from "/src/entities/user/api";
import { User } from "/src/entities/user/model";

const app = document.querySelector("#app")

export function init() {
  const user = new User("farikkm", "1234", "email@gmail.com", "samurai", "Fariz Mirzayev");

  const usernameInput = MyInput("username", "text", "Username", "/icons/username.svg");

  // document.body.innerHTML = "";
  app.appendChild(usernameInput);
}