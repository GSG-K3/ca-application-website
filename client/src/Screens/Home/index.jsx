import React, { Fragment, Component } from 'react';
import SuccessStories from '../../components/successStories';
import Carousel from 'react-bootstrap/Carousel';
class Home extends Component {
	state = {};

	render() {
		return (
			<Fragment>
				 <SuccessStories />
				{/* <Carousel>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://source.unsplash.com/random"
							alt="First slide"
						/>
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://source.unsplash.com/random"
							alt="Third slide"
						/>

						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					
				</Carousel> */}
			</Fragment>
		);
	}
}
export default Home;
