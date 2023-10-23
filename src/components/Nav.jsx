import { useState } from "react"
// import NavMobile from "./NavMobile"
import { CgMenuRight } from 'react-icons/cg'
import { NavLink } from "react-router-dom"
import Logo from "../assets/gradient.png"
import { navLink } from "./data"
// // import { Link } from "react-router-dom"

// const navigation = [
//     {
//         name: 'speakers',
//         href: 'speakers'
//     },
//     {
//         name: 'contact',
//         href: 'contact'
//     },
//     {
//         name: 'venue',
//         href: 'venue'
//     },
// ]

const Nav = () => {
    // const [bg, setBg] = useState(false)
    const [mobileNav, setMobileNav] = useState(false)

    // useEffect(()=> {
    //     window.addEventListener('scroll', ()=> {
    //         return window.scrollY > 50 ? setBg(true) : setBg(false)
    //     })
    // }, [])
    const activeNavLink = ({ isActive }) => (isActive ? "active" : "NavLink")

    return (
        <header className="fixed top-0 left-0 z-50 w-screen h-[10vh] md:shadow-sm bg-white">
            {/* <header className={`${bg ? 'bg-background shadow-lg py-4 lg:py-6 font-primary' : 'bg-none'} fixed left-0 w-full pt-6 pb-8 z-10 transition-all duration-200`}></header> */}
            {/* <div className="container mx-auto">
                <div className="flex  justify-between items-center">
                    <a href="#">
                        <img className="h-6 lg:h-8" src={Logo} alt="" />
                    </a>
                    <div onClick={()=> setMobileNav(!mobileNav)} className="text-2xl text-primary md:hidden lg:text-3xl cursor-pointer">
                        {mobileNav ? <CgClose /> : <CgMenuRight />}
                    </div>
                    <nav className="hidden md:flex">
                        <ul className="md:flex md:gap-x-12">
                            {navigation.map((data, i)=>{
                                return (
                                    <li key={i}>
                                        <a className="capitalize text-primary text-[20px] font-medium hover:border-b border-secondary transition-all" href={data.href}>{data.name}</a>
                                    </li>
                                )
                            })}
                        </ul>
                        <a href="/get-tickets" className="text-primary px-[1.25rem] py-[0.625rem] ml-6 flex justify-center items-center bg-secondary border border-secondary rounded-md text-[15px] font-medium hover:bg-secondary shadow-md hover:text-white transition-all ease-in-out duration-300">
                            <button className="capitalize flex justify-center items-center">get tickets</button>
                        </a>
                    </nav>

                    <div className={`${mobileNav ? "left-0" : "-left-full"} md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}>
                        <NavMobile />
                    </div>
                </div>
            </div> */}

            <div className="hidden md:flex items-center justify-between px-7 p-2">
                <div className="flex items-center">
                    <img src={Logo} alt="logo" width='70px' height='70px' />
                </div>

                <div className="menu">
                    <ul className="flex">
                        {navLink.map((lst, idx) => (
                            <li key={idx} className={`mx-5 py-2 ${activeNavLink}`}>
                                <NavLink to={lst.path}>
                                    {lst.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <button className="bg-primary px-6 py-1.5 text-white rounded-full mx-3 border border-primary hover:text-primary hover:bg-white transition-all duration-1000 shadow-md">Get Ticket</button>
                </div>
            </div>

            {/* mobileMenu */}
            <div className="flex items-center justify-between md:hidden h-full pl-2 pr-8">
                <div className="flex items-center">
                    <img src={Logo} alt="logo" width='70px' height='70px' />
                </div>
                <div>
                    {mobileNav && (
                        <div className="bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-16 left-[10rem] right-0 h-screen w-full">
                            <ul className="flex flex-col">
                                {navLink.map((lst, idx) => (
                                    <li key={idx} className={`mx-5 py-2 ${activeNavLink}`}>
                                        <NavLink to={lst.path}>
                                            {lst.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <CgMenuRight size={30} onClick={() => setMobileNav(!mobileNav)} />
            </div>
        </header>
    )
}

export default Nav
