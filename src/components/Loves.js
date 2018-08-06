import React from "react";

export default class Loves extends React.Component {
	constructor(props) {
		super();

		this.CycleText = this.CycleText.bind(this);

		this.state = {
			list: ["React", "Python", "Django", "RGB", "Counter Strike"],
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
		return <React.Fragment>{this.state.active}</React.Fragment>;
	}
}
