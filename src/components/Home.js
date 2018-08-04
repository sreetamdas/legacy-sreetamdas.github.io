import React from "react";
import Navbar from "./Navbar";

class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="black-bg white">
					<Navbar />
					<div
						style={{ fontSize: "40px" }}
						className="black-bg white full-page"
					>
						<div style={{ paddingTop: "200px" }}>
							Hey!<br />I'm Sreetam Das.
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Home;
