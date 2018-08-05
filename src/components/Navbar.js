import React from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faStackOverflow,
	faTwitter,
	faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

import Brand from "./Brand";

export default class CustomNav extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
			active: null,
			hover: false,
			portfolio: [
				{
					name: "Say Hi!",
					color: "#000",
					link: "mailto:sreetamdas@gmail.com",
				},
				{
					name: "Github",
					icon: faGithub,
					color: "#333",
					link: "https://github.com/sreetamdas",
				},

				{
					name: "StackOverflow",
					icon: faStackOverflow,
					color: "#f48024",
					link: "https://stackoverflow.com/users/5283213",
				},

				{
					name: "Twitter",
					icon: faTwitter,
					color: "#1da1f2",
					link: "https://twitter.com/sreetamdas",
				},

				{
					name: "Facebook",
					icon: faFacebookSquare,
					color: "#3b5998",
					link: "https://www.facebook.com/sreetam.das",
				},
			],
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}
	Navlinks = props => {
		let item = this.state.portfolio[props.index];
		return (
			<NavItem
				onMouseOver={() =>
					this.setState({
						hover: true,
						active: item,
					})
				}
				onMouseOut={() =>
					this.setState({
						hover: false,
					})
				}
			>
				<NavLink className="white" href={item.link}>
					{item.icon ? (
						<FontAwesomeIcon
							icon={item.icon}
							style={{ fontSize: "30px", margin: "0 5px" }}
						/>
					) : (
						<p style={{ fontSize: "25px" }}>{item.name}</p>
					)}
				</NavLink>
			</NavItem>
		);
	};
	render() {
		return (
			// <div>
			<Navbar className="black-bg" dark fixed="top" expand="md">
				<NavbarBrand href="/" className="white">
					<Brand />
				</NavbarBrand>
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto white" navbar>
						{Object.keys(this.state.portfolio).map(index => (
							<this.Navlinks index={index} key={index} />
						))}
					</Nav>
				</Collapse>
			</Navbar>
			// </div>
		);
	}
}
