import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//! Import Pages:
import NavbarPage from './components/Navbar/Navbarmenu';
import Main from './pages/Main';
import Admin from './pages/Admin';
import NoMatch from "./pages/NoMatch";
import Footer from './components/Footer/Footer';
import GuardedRoute from "./components/GuardedRoute"
// import Register from "./components/Register/Register"

//! Imports of CSS Files
import './App.css';

import { UserContext } from './components/UserContext';

function App() {

	const [authorize, setAuthorize] = useState(false);

	return (
		<div className="App">
			<Router>
				
				<NavbarPage />
					
					<Switch>
						<UserContext.Provider value={authorize}>
							
							<Route exact path="/" component={Main}   />
							
							<GuardedRoute path='/admin/login' component={Admin} auth={ authorize } />
						
						</UserContext.Provider>
						
						<NoMatch />
					</Switch>

				<Footer setAuthorize={setAuthorize} authorize={authorize} />
			
			</Router>
		</div>
	);
}

export default App;
