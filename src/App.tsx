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
import PublicOverview from './pages/PublicOverview'
import PublicEnrolment from './pages/PublicEnrolment'
import PublicBenefits from './pages/PublicBenefits'
import PublicExits from './pages/PublicExits'
import ScrollToTop from './components/ScrollToTop'
import AboutUs from './pages/AboutUs'
import AdminProfile from './pages/AdminProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/beneficiaries" element={<Beneficiaries />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/programs" element={<Programs />}/>
          <Route path="/exits" element={<Exits />}/>
          {/* Public Side  */}
          <Route path="/public_overview" element={<PublicOverview />} />
          <Route path="/public_enrolment" element={<PublicEnrolment />} />
          <Route path="/public_benefits" element={<PublicBenefits />} />
          <Route path="/public_exits" element={<PublicExits />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/admin_profile" element={<AdminProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
