import { useState } from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='navbar'>
            <nav className='heading'>
                <Link to='/' className='alex' >Justice Online Store</Link>

                <div className='menu-icon' onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </div>

                <div className={`nav ${menuOpen ? 'nav-active' : ''}`}>
                    <Link to='/Login' className='alex1'>Login</Link>
                    <Link to='/Signup' className='alex1'>Sign-up</Link>
                    <Link to='/Cart' className='alex1'>Cart</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
