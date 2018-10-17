// let's go!
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
// import "./css/bootstrap.min.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles.css";
// import AddMembers from "./components/AddMembers";
import NotFound from "./components/404";
// import Oldies from "./components/Oldies";
// import Test from "./components/Test";

import Favicon from "react-favicon";
import favicon from "./assets/favicon.png";

import registerServiceWorker from "./registerServiceWorker";

const Root = () => {
	return (
		<React.Fragment>
			<Favicon url={favicon} />
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		</React.Fragment>
	);
};

render(<Root />, document.getElementById("root"));
registerServiceWorker();
