import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

// Components
import Sidebar from './sidebar/Sidebar'
import Button from './button/Button'
import FormInput from './input/FormInput'

// SVG
import LogoSvg from '../assets/svg/Logo.svg'
import HamburgerMeny from '../assets/svg/HamburgerMeny.svg'
import Search from '../assets/svg/Search.svg'

const Navbar = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false)

    const isLoggedIn = false

    let navigate = useNavigate()
    function routeLogin() {
        let path = '/login'
        navigate(path)
    }

    let activeStyle = {
        color: '#1C72DC'
    }

    return (
        <nav>
            <div className="flex p-4 pt-8 items-center justify-center">
                <div className="flex justify-between w-11/12">
                    <div className="flex gap-10 items-center self-center content-center">
                        <NavLink to="/">
                            <img src={LogoSvg} alt="" className="w-28 -mt-2" />
                        </NavLink>
                        <FormInput placeholder="Søk etter en adresse...">
                            <img src={Search} alt="" className="pb-2" />
                        </FormInput>
                    </div>
                    <ul className="flex gap-10 items-center font-normal">
                        <li className="hover:text-slate-300">
                            <NavLink to="/utforsk" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                                Utforsk
                            </NavLink>
                        </li>
                        <li className="hover:text-slate-300">
                            <NavLink to="/nylig-solgte" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                                Nylig solgte
                            </NavLink>
                        </li>
                        {!isLoggedIn && <Button name="Logg inn" onClick={routeLogin} />}
                        <li onClick={() => setIsSidebarVisible(prev => !prev)}>
                            <img src={HamburgerMeny} alt="" className="h-6" />
                        </li>
                    </ul>
                </div>
            </div>
            {isSidebarVisible ? <Sidebar /> : null}
        </nav>
    )
}

export default Navbar
