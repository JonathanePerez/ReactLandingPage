import React from "react";

//create your first component
export class Cards extends React.Component {
	render() {
		let arrayOfObjects = [
			{
				title: "Cuba",
				text: "I was on the beach",
				image:
					"https://ugc.kn3.net/i/760x/http://cdn.theatlantic.com/static/infocus/surf091411/s_s34_23282869.jpg"
			},
			{
				title: "America",
				text: "I was in the jungle",
				image:
					"https://images.reference.com/amg-cms-reference-images/prod/jaguar-protect-itself_57726870678a60a0.jpg?width=760&height=411&fit=crop"
			},
			{
				title: "Canada",
				text: "I was in the snow",
				image:
					"https://images.reference.com/amg-cms-reference-images/prod/producers-consumers-decomposers-arctic-tundra_139e6fd97ae39ad4.jpg?width=760&height=411&fit=crop"
			}
		];

		return (
			<div className="card-deck">
				{arrayOfObjects.map((item, index) => {
					return (
						<div className="card" key={index}>
							<img
								src={item.image}
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">{item.title}</h5>
								<p className="card-text">{item.text}</p>
								<p className="card-text">
									<small className="text-muted">
										Last updated 3 mins ago
									</small>
								</p>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}
