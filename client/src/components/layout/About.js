import React, { Fragment } from 'react';
import Gallery from './Gallery';

function About() {
	return (
		<Fragment>
			<div className='about'>
				<h2>Frieda Silva</h2>
				<div className='container'>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium accusamus nulla veritatis
						recusandae fugiat atque amet nesciunt totam id animi incidunt reprehenderit dolor odio,
						voluptatum molestiae! Quas recusandae repellendus sint dignissimos. Ad esse similique assumenda
						quis voluptatum animi voluptas aspernatur?Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Alias adipisci sit qui voluptates sapiente, consequatur illo error doloribus unde fugiat
						accusamus labore aperiam beatae cumque, quaerat odio dolores eum maxime
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias adipisci sit qui voluptates
						sapiente, consequatur illo error doloribus unde fugiat accusamus labore aperiam beatae cumque,
						quaerat odio dolores eum maxime?
					</p>
				</div>
			</div>
			<Gallery />
		</Fragment>
	);
}

export default About;
