import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './pages/Index'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Beneficiaries from './pages/Beneficiaries'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/beneficiaries" element={<Beneficiaries />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
