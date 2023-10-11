import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom"

import MainNavbar from './components/MainNavbar'
import AppRouter from './components/AppRouter';
import { AuthContext } from "./context";

function App() {
	const [isAuth, setIsAuth] = useState(false);

	useEffect(() => {
		if (localStorage.getItem('authOtus')) {
			setIsAuth(true)
		}
	}, [])

	return (
		<React.StrictMode>
			<AuthContext.Provider value={{
				isAuth,
				setIsAuth
			}}>
				<BrowserRouter>
					<MainNavbar />
					<AppRouter />
				</BrowserRouter>
			</AuthContext.Provider>
		</React.StrictMode>
	);
}

export default App;
