import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
	createBrowserRouter,
	RouterProvider,Route, Routes
  } from "react-router-dom";
import Navbar from './containers/Navbar.tsx';
import ContentContainer from './containers/ContentContainer.tsx';
import Carousels from './containers/ContentContainer.tsx';
import NewsBox from './containers/MockFrame.tsx';


const router = createBrowserRouter([
	{
		path: "/",
		element : <ContentContainer/>
	},
	{
		path: "/dashboard",
		element : <h1>Dashboard</h1>
	},
	{
		path: "/search-result/:query",
		element : <h1>Search result</h1>
	},
	{
		path: "/categories/:category",
		element : <h1>Categories</h1>
	},
	{
		path: "/article/:id",
		element : <h1>article details</h1>
	},
	{
		path: "/mock-frame",
		element : <NewsBox/>
	},
]);



ReactDOM.createRoot(document.getElementById('root')!).render(
	// <React.StrictMode>
		<div className='bg-indigo-100 h-[100vh]'>
			<Navbar />
			<RouterProvider router={router} />
		</div>
	// </React.StrictMode>,
)
