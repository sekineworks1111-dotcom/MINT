import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Activity from './pages/Activity'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800 bg-white selection:bg-mint-200 selection:text-navy-900">
      <ScrollToTop />
      <Header />
      <main className="flex-grow w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activity" element={<Activity />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
