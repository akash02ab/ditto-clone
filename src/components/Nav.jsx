import "../styles/nav.css";

const Nav = () => {
	return (
		<nav>
			<div className="logo">
				<img src="/logo.svg" alt="DITTO" />
			</div>
			<div className="menu">
				<ul className="sm-hide">
					<li>Sell Your Music</li>
					<li>Pricing</li>
					<li>Publising</li>
					<li>Support</li>
					<li>Blog</li>
				</ul>

				<img src="/bars-solid.svg" alt="menu" className="lg-hide" />

				<button id="login" className="m-hide">Login</button>
				<button id="join-now" className="m-hide">Join Now</button>
				<img src="/globe-americas-solid.svg" alt="Globe" className="m-hide" />
			</div>
		</nav>
	);
};

export default Nav;
