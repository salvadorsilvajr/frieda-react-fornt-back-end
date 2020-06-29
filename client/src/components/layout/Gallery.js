import React from 'react';
import f10 from '../../img/f10.jpg';
import f11 from '../../img/f11.jpg';
import f12 from '../../img/f12.jpg';
import f13 from '../../img/f13.jpg';
import f1 from '../../img/f1.jpg';
import f20 from '../../img/f20.jpg';

const Gallery = () => {
	return (
		<div classNameName="gallery" id="gallery">
			<h2>Some Art Work</h2>
			<div classNameName="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 col-sm-12 mb-2">
						<div className="card">
							<img src={f10} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">La Muerte</h5>
								<h5 className="price">$ 150.00 UDS</h5>
								<p className="card-text">
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</p>
							</div>
							<div>
								<a href={'./#'} className="btn btn-primary mb-2">
									Add to the cart
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-12 mb-2">
						<div className="card">
							<img src={f11} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Friend</h5>
								<h5 className="price">$ 100.00 UDS</h5>
								<p className="card-text">
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</p>
							</div>
							<div>
								<a href={'./#'} className="btn btn-primary mb-2">
									Add to the cart
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-12 mb-2">
						<div className="card">
							<img src={f12} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Never Again</h5>
								<h5 className="price">$ 75.00 UDS</h5>
								<p className="card-text">
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</p>
							</div>
							<div>
								<a href={'./#'} className="btn btn-primary mb-2">
									Add to the cart
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-12 mb-2">
						<div className="card">
							<img src={f13} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">La Muerte</h5>
								<h5 className="price">$ 150.00 UDS</h5>
								<p className="card-text">
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</p>
							</div>
							<div>
								<a href={'./#'} className="btn btn-primary mb-2">
									Add to the cart
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-12 mb-2">
						<div className="card">
							<img src={f1} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Friend</h5>
								<h5 className="price">$ 100.00 UDS</h5>
								<p className="card-text">
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</p>
							</div>
							<div>
								<a href={'./#'} className="btn btn-primary mb-2">
									Add to the cart
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-12 mb-2">
						<div className="card">
							<img src={f20} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Never Again</h5>
								<h5 className="price">$ 75.00 UDS</h5>
								<p className="card-text">
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</p>
							</div>
							<div>
								<a href={'./#'} className="btn btn-primary mb-2">
									Add to the cart
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
