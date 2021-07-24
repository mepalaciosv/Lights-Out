import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav className="nav-container" >
                <div>
                    <Link to ="/" className = "nav-text"> Lights Out </Link>
                </div>
                <div>
                    <Link to ="/Estadisticas" className = "text-white"> Estadísticas </Link>
                </div>
                <div>
                    <Link to ="/Desarrolladores" className = "text-white"> Equipo </Link>
                </div>
                <div>
                    <Link to ="/Login" className = "text-white"> Cuenta </Link>
                </div>
            </nav>
        </div>
    )
}

export default Header; 
