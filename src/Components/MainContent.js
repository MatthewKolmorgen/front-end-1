import React from 'react';
import HeadContent from './HeadContent';
import FootNav from './FootNav';

const MainContent = () => {

    return (

        <div id="main">

			<HeadContent />
			<section id="one">
				<div className="inner">
					<header className="major">
						<h2>Sed amet aliquam</h2>
					</header>
					<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.</p>
				</div>
			</section>

			<section id="two" className="spotlights">
				<section>
					<a href="generic.html" className="image">
					    <img src="assets/fitness2.jpg" alt="" data-position="center center" />
					</a>
					<div className="content">
						<div className="inner">
							<header className="major">
								<h3>Orci maecenas</h3>
							</header>
							<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
							<ul className="actions">
								<li><a href="generic.html" className="button">Learn more</a></li>
							</ul>
						</div>
					</div>
				</section>

				<section>
					<a href="generic.html" className="image">
						<img src="assets/fitness3.jpg" alt="" data-position="top center" />
					</a>
					<div className="content">
						<div className="inner">
							<header className="major">
								<h3>Rhoncus magna</h3>
							</header>
						    <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
							<ul className="actions">
								<li><a href="generic.html" className="button">Learn more</a></li>
							</ul>
						</div>
					</div>
				</section>

				<section>
					<a href="generic.html" className="image">
						<img src="assets/fitness4.jpg" alt="" data-position="25% 25%" />
					</a>
				<div className="content">
					<div className="inner">
						<header className="major">
							<h3>Sed nunc ligula</h3>
					    </header>
						<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
						<ul className="actions">
							<li><a href="generic.html" className="button">Learn more</a></li>
						</ul>
					</div>
				</div>
			</section>
		</section>

		<section id="three">
			<div className="inner">
				<header className="major">
					<h2>Massa libero</h2>
				</header>
				<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
				<ul className="actions">
					<li><a href="generic.html" className="button next">Get Started</a></li>
				</ul>
			</div>
		</section>
		<FootNav />

	</div>

    )

}

export default MainContent