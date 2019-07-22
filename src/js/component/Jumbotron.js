import React from "react";

//create your first component
export default class Jumbotron extends React.Component {
	render() {
		return (
			<div className="jumbotron mt-5 text-center dankbg">
				<h1 className="display-4">Hello, world!</h1>
				<p className="lead">Hyeenas are dope</p>
				<hr className="my-4" />
				<p>
					It uses utility classes for typography and spacing to space
					content out within the larger container.
				</p>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Learn more
				</a>
			</div>
		);
	}
}
