import React from "react";
import Navbar from "./Navbar";

class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<div style={{ fontSize: "40px" }}>Home!</div>
			</React.Fragment>
		);
	}
}

export default Home;
