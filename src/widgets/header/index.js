export function Header() {
	return `
    <header class="header">
				<div class="header__wrapper">
					<div class="header__logo">
						<img src="/icons/logo.png" alt="logo" />
					</div>
					<nav class="header__menu">
						<ul class="header__list">
							<li class="header__item">
								<a href="#" class="header__link">Home</a>
							</li>
							<li class="header__item">
								<a href="#" class="header__link">Movies</a>
							</li>
							<li class="header__item">
								<a href="#" class="header__link">Series</a>
							</li>
							<li class="header__item">
								<a href="#" class="header__link">Kids</a>
							</li>
						</ul>
					</nav>
					<div class="header__actions">
						<i
							class="header__actions_search fa-solid fa-magnifying-glass"
						></i>
						<i class="header__actions_profile fa-solid fa-user"></i>
						<i
							class="header__actions_mode fa-solid fa-sun-plant-wilt"
						></i>
					</div>
				</div>
			</header>
  `;
}
