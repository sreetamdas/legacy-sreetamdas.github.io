import React from "react";
import CustomNav from "./Navbar";
// import Overlay from "./Overlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Loves from "./Loves";
import Footer from "./Footer";

class Landing extends React.Component {
	render() {
		return (
			<div className="black-bg white full-page">
				<CustomNav />
				<div style={{ fontSize: "40px" }}>
					<div style={{ paddingTop: "200px" }} className="container">
						Hey!
						<br />
						I'm Sreetam Das.
						<br />
						<br />I{" "}
						<FontAwesomeIcon
							icon={faHeart}
							color="red"
							size="sm"
						/>{" "}
						<Loves />
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Landing;
