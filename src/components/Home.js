import React from "react";
import Landing from "./Landing";
import Helmet from "react-helmet";

class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Helmet>
					<title>Hi, I'm Sreetam!</title>
				</Helmet>
				<Landing />
				<div>literally anything</div>
			</React.Fragment>
		);
	}
}

export default Home;
