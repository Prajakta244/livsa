import {useState} from 'react'
import Livsa from '../assets/Livsa.svg'
import { Menu,X } from 'lucide-react'

const navItems = [
    { label: 'Menu1', href: '#' },
    { label: 'Menu2', href: '#' },
    { label: 'Menu3', href: '#' },
    { label: 'Menu4', href: '#' }
]
const Navbar = () => {
    const [mobileDrawerOpen,setMobileDrawerOpen] = useState(false)
    const toggelNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen)
    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="items-center flex-shrink-0">
                        <img src={Livsa} className='h-[18px] w-15 mr-2' alt="" />
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <a href="#" className='py-2 px-3 border rounded-md bg-primaryGrad'>Sign In</a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggelNavbar}>
                            {mobileDrawerOpen ? <X/> : <Menu/>}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 w-full p-12 flex flex-col justify-center items-center lg:hidden bg-[#f1f5f9]">
                        <ul>
                        {navItems.map((item, index) => (
                            <li key={index} className='py-4'>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex space-x-6">
                        <a href="" className="py-2 px-3 border rounded-md bg-primaryGrad">Sign In</a>
                    </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar