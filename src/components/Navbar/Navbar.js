import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '1rem'}}>
            <Link to='/' className='titulo'>La Tabla</Link>
            <div className='navBar'>
                <Link to={'category/queso'} className='navBarElement'>Quesos</Link>
                <Link to={'category/embutido'} className='navBarElement'>Embutidos y salazones</Link>
                <Link to={'category/vino'} className='navBarElement'>Vinos</Link>
                <Link to={'category/pan'} className='navBarElement'>Panes</Link>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar