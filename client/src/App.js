import React from 'react'
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'
import AddPost from './pages/AddPost'
import Login from './pages/Login'
import Posts from './pages/Posts'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/addPost' element={<AddPost/>} />
        <Route path='/' element={<Login/>} />
        <Route path='/posts' element={<Posts/>} />
      </Routes>
    </Router>
  )
}

export default App
