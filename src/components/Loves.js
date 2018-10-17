import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default class Loves extends React.Component {
	constructor(props) {
		super();

		this.CycleText = this.CycleText.bind(this);

		this.state = {
			list: [
				"React",
				"Python",
				"Django",
				"RGB",
				"Counter Strike",
				"Reddit",
				"Open Source",
				"Stickers",
				"Coffee",
			],
			active: "",
		};
	}
	componentDidMount = () => {
		this.setState({
			active: this.state.list[0],
		});
		this.CycleText();
	};
	CycleText = () => {
		let i = 1;
		setInterval(() => {
			if (i === this.state.list.length) {
				i = 0;
			}
			this.setState({
				active: this.state.list[i++],
			});
		}, 500);
	};
	render() {
		return (
			<React.Fragment>
				I <FontAwesomeIcon icon={faHeart} color="red" size="sm" />{" "}
				{this.state.active}
			</React.Fragment>
		);
	}
}
