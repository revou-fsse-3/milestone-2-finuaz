import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
	createBrowserRouter,
	RouterProvider
  } from "react-router-dom";
import Navbar from './containers/Navbar.tsx';
import NewsList from './containers/NewsList.tsx';


const router = createBrowserRouter([
	{
		path: "/",
		element : <App/>
	},
	{
		path: "/search-result/:query",
		element : <h1>Search Result</h1>
	},
	{
		path: "/article/:id",
		element : <div><NewsList/></div>
	}
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Navbar />
		<RouterProvider router={router} />
	</React.StrictMode>,
)
