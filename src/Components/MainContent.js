import React from 'react';
import styled from 'styled-components';
import HeadContent from './HeadContent';
import FootNav from './FootNav';

// const Main = styled.div`

// 	background: '#242943';
// 	color: '#ffffff';
// 	fontFamily: "Source Sans Pro", "Helvetica", "sans-serif";
// 	fontSize: '17pt';
// 	fontWeight: '300';
// 	letterSpacing: '0.025em';
// 	lineHeight: '1.65';
	
// 	`;

const MainContent = () => {

    return (

        <Main>

			<HeadContent />
			<section id="one">
				<div>
					<header>
						<h2>Sed amet aliquam</h2>
					</header>
					<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.</p>
				</div>
			</section>

			<section>
				<section>
					<a href="generic.html">
					    <img src="../assets/fitness2.jpg" />
					</a>
					<div>
						<div>
							<header>
								<h3>Orci maecenas</h3>
							</header>
							<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
						</div>
					</div>
				</section>

				<section>
					<a href="generic.html">
						<img src="../assets/fitness3.jpg" />
					</a>
					<div>
						<div>
							<header>
								<h3>Rhoncus magna</h3>
							</header>
						    <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
						</div>
					</div>
				</section>

				<section>
					<a href="generic.html">
						<img src="../assets/fitness4.jpg" />
					</a>
				<div>
					<div>
						<header>
							<h3>Sed nunc ligula</h3>
					    </header>
						<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
					</div>
				</div>
			</section>
		</section>

		<section>
			<div>
				<header>
					<h2>Massa libero</h2>
				</header>
				<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
			</div>
		</section>
		<FootNav />

	</Main>

    )

}

export default MainContent