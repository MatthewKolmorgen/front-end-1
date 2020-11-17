import React from 'react';
import { Link } from 'react-router-dom';

const HeadContent = () => {

    return (

		<div id="wrapper">

			<header id="header" className="alt style2">
				<nav>
					<a href="#menu">Menu</a>
				</nav>
			</header>

			<nav id="menu">
				<ul className="links">
					<li><a href="index.html">Home</a></li>
					<li><Link to='/login'>Members Login</Link></li>
					<li><Link to='/instructorlogin'>Instructor Login</Link></li>
				</ul>
			</nav>

        	<section id="banner" className="style2" style={{backgroundPosition: 'center', backgroundImage: "url(`${./assests/fitness.jpg}`)", }} >
				<div className="inner">
					<span className="image">
						<img src="assests/pic07.jpg" alt="" />
					</span>
					<header className="major">
						<h1>Anywhere Fitness</h1>
					</header>
					<div className="content">
						<p>These days, fitness classes can be held anywhere- a park, an unfinished basement or a garage- not just at a traditional gym. Certified fitness instructors need an easy way to take the awkwardness out of attendance taking and client payment processing.</p>
					</div>
				</div>
			</section>

		</div>

    )

}

export default HeadContent