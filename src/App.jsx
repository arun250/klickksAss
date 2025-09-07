import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import HomePage from "./components/HomePage"
import RegisterForm from './components/Register'
import PublicRoute from './PublicRoute'
import ProtectedRoute from './ProtectedRoute'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<PublicRoute><LoginForm /></PublicRoute>} />
      <Route path="/register" element={<PublicRoute><RegisterForm /></PublicRoute>} />
      <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
    </Routes>
  )
}

export default App
