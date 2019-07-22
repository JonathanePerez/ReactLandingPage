import React from "react";
import { Nav } from "./Nav"; //Nav's file uses "export class Nav extends React.Component", so we need the "{}"
import Jumbotron from "./Jumbotron"; //Jumbotron's file uses "export default class Jumbotron extends React.Component", so we don't need the "{ }"
import { Cards } from "./Cards";
import Footer from "./Footer";
import Form from "./Form";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="container-fluid p-0">
				<Nav />
				<div className="container">
					<Jumbotron />
				</div>
				<div className="container">
					<div className="row">
						<div className="col">
							<Cards />
						</div>
					</div>
					<div className="container mt-5">
						<Form />
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
