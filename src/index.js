// let's go!
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./components/App";
// import "./css/bootstrap.min.css";
import "./assets/styles.css";
// import AddMembers from "./components/AddMembers";
// import NotFound from "./components/NotFound";
// import Oldies from "./components/Oldies";
// import Test from "./components/Test";
import registerServiceWorker from "./registerServiceWorker";

const Root = () => {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Switch>
				<Route exact path="/" component={App} />
				{/* <Route exact path="/add" component={AddMembers} />
				<Route exact path="/oldies" component={Oldies} />
				<Route exact path="/test" component={Test} /> */}
				{/* <Route component={NotFound} /> */}
			</Switch>
		</BrowserRouter>
	);
};

render(<Root />, document.getElementById("root"));
registerServiceWorker();