import React from "react";
import CustomNav from "./Navbar";
// import Overlay from "./Overlay";
import Loves from "./Loves";
import Footer from "./Footer";

class Landing extends React.Component {
	render() {
		return (
			<div className="black-bg white full-page">
				<CustomNav />
				<div style={{ fontSize: "40px" }}>
					<div style={{ paddingTop: "200px" }} className="container">
						Hey! I'm Sreetam Das,
						<br />
						<span style={{ fontSize: "30px" }}>
							a frontend developer who graduated from{" "}
							<a
								href="https://www.nitw.ac.in"
								className="twitter-blue"
							>
								NIT Warangal
							</a>
							. Currently working as an Enterprise Solutions
							Architect at{" "}
							<a
								href="https://www.microland.com"
								className="twitter-blue"
							>
								Microland
							</a>
							. I love clean and minimalist interfaces and
							component-based development. I also love{" "}
							<a
								href="https://qcnitw.in"
								className="twitter-blue"
							>
								Quizzing
							</a>
							!
						</span>
						<br />
						<br />
						<Loves />
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Landing;
