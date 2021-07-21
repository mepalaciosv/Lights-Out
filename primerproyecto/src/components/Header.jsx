import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to ="/" className = "text-white"> Light Out </Link>
                    <Link to ="/Estadisticas" className = "text-white"> Estadísticas </Link>
                    <Link to ="/Desarrolladores" className = "text-white"> Desarrolladores </Link>
                    <Link to ="/Login" className = "text-white"> Login </Link>
                    <Link to ="/Register" className = "text-white"> Register </Link>
                </div>
            </nav>
        </div>
    )
}

export default Header; 
