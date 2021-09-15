import "../styles/nav.css";

const Nav = () => {
	return (
		<nav>
			<div className="logo">
				<img src="/logo.svg" alt="DITTO" />
			</div>
			<div className="menu">
				<ul>
					<li>Sell Your Music</li>
					<li>Pricing</li>
					<li>Publising</li>
					<li>Support</li>
					<li>Blog</li>
				</ul>

				<button id="login">Login</button>
				<button id="join-now">Join Now</button>
				<img src="/globe-americas-solid.svg" alt="Globe" />
			</div>
		</nav>
	);
};

export default Nav;
