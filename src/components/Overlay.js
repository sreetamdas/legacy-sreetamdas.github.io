import React from "react";

const Overlay = props => (
	<div className="overlay text-center" style={{ backgroundColor: props.item.color }}>
		<div style={props.item.black && { color: "black" }}>
			<div style={{ fontSize: "50px", paddingTop: "200px" }}>
				{props.item.name}
			</div>
		</div>
	</div>
);
export default Overlay;
