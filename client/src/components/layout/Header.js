import React from 'react';
import {Link } from 'react-router-dom'
import Photo from '../../img/photo.jpg';

function Header() {
	return (
		<header id="header">
			<div className="imgbg">
				<nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
					<Link className="navbar-brand" to="/">
						Frieda's Gallery
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
						<ul className="navbar-nav ">
							<li className="nav-item">
								<a className="nav-link" href="/!#">
									Gallery
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/!#">
									Comments
								</a>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/login">Log in</Link>
							</li>
							<li className="nav-item">
								<a className="nav-link " href="/!#">
									<i className="fas fa-shopping-cart mr-2"></i>Cart
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
			<div>
				<img id="friedaPic" src={Photo} className="mx-auto d-block" alt="Frieda Silva" />
			</div>
		</header>
	);
}
export default Header;
