import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './pages/Index'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Beneficiaries from './pages/Beneficiaries'
import Payments from './pages/Payments'
import Reports from './pages/Reports'
import Programs from './pages/Programs'
import Exits from './pages/Exits'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/beneficiaries" element={<Beneficiaries />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/programs" element={<Programs />}/>
          <Route path="/exits" element={<Exits />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
