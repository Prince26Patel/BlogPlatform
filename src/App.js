// File: src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PostDetails from './pages/PostDetails';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/post/:id" element={<PostDetails />} />
            <Route path="/create" element={<CreatePost />} />

          </Routes>
        </main>
        <footer className="bg-white p-4 text-center text-gray-500 text-sm shadow-inner">
          © {new Date().getFullYear()} MyBlog. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
