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
			</React.Fragment>
		);
	}
}

export default Home;
