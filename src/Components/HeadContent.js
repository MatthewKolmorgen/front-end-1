import React from 'react';

const HeadContent = () => {

    return (

		<div id="wrapper">

				<!-- Note: The "styleN" class below should match that of the banner element. -->
			<header id="header" class="alt style2">
				<nav>
					<a href="#menu">Menu</a>
				</nav>
			</header>

			<nav id="menu">
				<ul class="links">
					<li><a href="index.html">Home</a></li>
					<li><a href="landing.html">Members Login</a></li>
					<li><a href="generic.html">Instructor Login</a></li>
					<li><a href="elements.html">Elements</a></li>
				</ul>
				<ul class="actions stacked">
					<li><a href="#" class="button primary fit">Get Started</a></li>
					<li><a href="#" class="button fit">Log In</a></li>
				</ul>
			</nav>

        	<section id="banner" class="style2" style="background-position: center 0px; background-image: url('assets/fitness.jpg');" >
				<div class="inner">
					<span class="image">
						<img src="assests/pic07.jpg" alt="" />
					</span>
					<header class="major">
						<h1>Anywhere Fitness</h1>
					</header>
					<div class="content">
						<p>These days, fitness classes can be held anywhere- a park, an unfinished basement or a garage- not just at a traditional gym. Certified fitness instructors need an easy way to take the awkwardness out of attendance taking and client payment processing.</p>
					</div>
				</div>
			</section>

		</div>

    )

}

export default HeadContent