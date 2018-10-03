import React from "react";
import doggos from "../assets/dogs.jpg";
import CustomNav from "./Navbar";
import Helmet from "react-helmet";
// const bg_image = "";
const NotFound = () => (
	<div className="white">
		<CustomNav color="transparent" />
		<Helmet>
			<title>404!</title>
		</Helmet>
		<div className="full-page text-center">
			<img
				src={doggos}
				alt="Dogs!"
				style={{
					overflowY: "hidden",
					position: "absolute",
					zIndex: "-1",
					width: "100%",
					height: "100%",
					objectFit: "cover",
					backgroundPosition: "center",
					filter: "brightness(70%)",
				}}
			/>
			<div className="vertical-center">
				<h1 className="karla" style={{ fontSize: "120px" }}>
					404!
				</h1>
				<h2 style={{ fontSize: "20px" }}>
					I can't find what you were looking for,
					<br />
					so here's an{" "}
					<a
						href="https://www.theguardian.com/lifeandstyle/gallery/2018/jul/18/dog-photographer-of-the-year-2018-in-pictures"
						className="twitter-blue"
					>
						award winning photograph
					</a>{" "}
					of dogs instead &#58;&#x29;{" "}
				</h2>
				<h3
					style={{
						fontSize: "14px",
						paddingTop: "20px",
						position: "absolute",
						bottom: "50px",
						width: "100%",
						textAlign: "center",
					}}
					// className="text-center"
				>
					In case you just want to check out some more dog photos,{" "}
					<a
						href="https://unsplash.com/search/photos/dog"
						className="twitter-blue"
					>
						I got you
					</a>
					.
				</h3>
			</div>
		</div>
	</div>
);

export default NotFound;
