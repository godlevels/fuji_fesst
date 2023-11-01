import { useState } from "react"
import { CgMenuRight } from 'react-icons/cg'
import { Link } from "react-scroll"
const navLogo = new URL('/assets/Gradient.png', import.meta.url).href
// import Logo from "../assets/gradient.png"
import { navLink } from "./data"

const Nav = () => {
    const [mobileNav, setMobileNav] = useState(false)
    const activeNavLink = ({ isActive }) => (isActive ? "active" : "NavLink")

    return (
        <header className="fixed top-0 left-0 z-50 w-screen h-[10vh] md:shadow-sm bg-white">
            <div className="hidden md:flex items-center justify-between px-7 p-2">
                <div className="flex items-center">
                    <img src={navLogo} alt="logo" width='70px' height='70px' />
                </div>

                <div className="menu">
                    <ul className="flex cursor-pointer">
                        {navLink.map((lst, idx) => (
                            <li key={idx} className={`mx-5 py-2 ${activeNavLink}`}>
                                <Link to={lst.path} spy={true} smooth={true} duration={500}>
                                    {lst.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <Link to="tickets" spy={true} smooth={true} duration={500}>
                    <button className="bg-primary px-6 py-1.5 text-white rounded-full mx-3 border border-primary hover:text-primary hover:bg-white transition-all duration-1000 shadow-md">Get Ticket</button>
                </Link>
            </div>

            {/* mobileMenu */}
            <div className="flex items-center justify-between md:hidden h-full pl-2 pr-8">
                <div className="flex items-center">
                    <img src={navLogo} alt="logo" width='70px' height='70px' />
                </div>
                <div>
                    {mobileNav && (
                        <div className="bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-16 left-[10rem] right-0 h-screen w-full">
                            <ul className="flex flex-col">
                                {navLink.map((lst, idx) => (
                                    <li key={idx} className={`mx-5 py-2 ${activeNavLink}`}>
                                        <Link to={lst.path} spy={true} smooth={true} duration={500}>
                                            {lst.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <Link to="tickets" spy={true} smooth={true} duration={500}>
                        <button className="bg-primary px-6 py-1.5 text-white rounded-full mx-3 border border-primary hover:text-primary hover:bg-white transition-all duration-1000 shadow-md">Get Ticket</button>
                    </Link>
                </div>
                <CgMenuRight size={30} onClick={() => setMobileNav(!mobileNav)} />
            </div>
        </header>
    )
}

export default Nav
