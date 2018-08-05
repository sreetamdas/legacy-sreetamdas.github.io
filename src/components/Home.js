import React from "react";
import Overlay from "./Overlay";
import Landing from "./Landing";

class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Landing />
				<Overlay />
				<div>literally anything</div>
			</React.Fragment>
		);
	}
}

export default Home;
