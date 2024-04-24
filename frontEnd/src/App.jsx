import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Login from "./pages/login"
import Register from "./pages/register"
import Dashboard from "./pages/Dashboard"
import Link from "./pages/Link"
import CashIn from "./pages/CashIn"
import Profile from "./pages/Profile"
import { useSelector } from "react-redux"

function App() {
  const user = useSelector((state) => state.user)

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/register/:ref' element={<Register />} />
        {/* Private Routes */}
        {user ? (
          <>
            <Route path='/' element={<Dashboard />} />
            <Route path='/link' element={<Link />} />
            <Route path='/cashIn' element={<CashIn />} />
            <Route path='/profile' element={<Profile />} />
          </>
        ) : (
          <Route path='*' element={<Navigate to='/login' replace />} />
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default App
