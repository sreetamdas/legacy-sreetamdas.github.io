import React from "react";
import logo from "../assets/favicon.png";

const Brand = () => (
	<React.Fragment>
		<h1 style={{ fontSize: "25px" }}>
			<img
				src={logo}
				style={{ width: "30px", marginRight: "10px" }}
				alt="Live Long and Prosper!"
			/>
			Sreetam Das
		</h1>
	</React.Fragment>
);

export default Brand;
