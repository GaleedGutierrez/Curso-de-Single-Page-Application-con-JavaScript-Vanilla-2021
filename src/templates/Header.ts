const Header = (): string => {
	const VIEW = `
	<div class="header-main">
		<div class="header__logo">
			<h1>
				<a href="/">
					100tifi.co
				</a>
			</h1>
		</div>
		<nav class="header__nav">
			<a href="#/about">
				About
			</a>
		</nav>
	</div>
	`;

	return VIEW;
};

export default Header;
