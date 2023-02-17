import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

// PAGES
import Discover from './pages/discover/Discover'
import Home from './pages/home/Home'
import About from './pages/about/About'
import MyApartment from './pages/myApartment/MyApartment'
import Login from './pages/login/Login'
import NewlySold from './pages/newlySold/NewlySold'
import Contact from './pages/contact/Contact'
import Privacy from './pages/privacy/Privacy'
import CookiePolicy from './pages/cookiePolicy/CookiePolicy'
import Faq from './pages/faq/Faq'

// Local storage
import useLocalStorage from 'react-use-localstorage'

const App = () => {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark').matches
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light')

    return (
        <div className="App" data-theme={theme}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/utforsk" element={<Discover />} />
                    <Route path="/om-oss" element={<About />} />
                    <Route path="/min-bolig" element={<MyApartment />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/nylig-solgte" element={<NewlySold />} />
                    <Route path="/kontakt" element={<Contact />} />
                    <Route path="/personvern" element={<Privacy />} />
                    <Route path="/cookie-policy" element={<CookiePolicy />} />
                    <Route path="/faq" element={<Faq />} />
                </Routes>
                <Footer />
                <button onClick={() => setTheme('light')} />
            </Router>
        </div>
    )
}

export default App
