import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to ="/" className = "text-white"> Lights Out </Link>
                    <Link to ="/Estadisticas" className = "text-white"> Estadísticas </Link>
                    <Link to ="/Desarrolladores" className = "text-white"> Equipo </Link>
                    <Link to ="/Login" className = "text-white"> Ingreso </Link>
                    <Link to ="/Register" className = "text-white"> Registro </Link>
                </div>
            </nav>
        </div>
    )
}

export default Header; 
