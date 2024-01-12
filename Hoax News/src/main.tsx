import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route, Routes, createRoutes, RouterProvider } from 'react-router-dom';
import Navbar from './containers/Navbar.tsx';
import ContentContainer from './containers/ContentContainer.tsx';
import NewsBox from './containers/NewsBox.tsx';
import SearchResult from './containers/SearchResult.tsx';
import CategoryContainer from './containers/CategoryContainer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
        <div className='bg-indigo-100 min-h-[100vh]'>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<ContentContainer />} />
                    <Route path="/dashboard" element={<h1>Dashboard</h1>} />
                    <Route path="/search-result/:query" element={<SearchResult />} />
                    <Route path="/categories/:category" element={<CategoryContainer/>} />
                    <Route path="/details" element={<NewsBox />} />
                </Routes>
            </Router>
        </div>
    </React.StrictMode>
)
