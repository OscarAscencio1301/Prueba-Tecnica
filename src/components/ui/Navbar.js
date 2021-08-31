import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MenuHamburguesa } from './MenuHamburguesa'

export const Navbar = () => {
    return (
        <div className="contenedor">
            <div className="contenedor__pc">
                <div className="logo">
                    <Link to="/" className="contenedor__enlace">
                        <h2>Covid-19</h2>
                    </Link>
                </div>
                <div className="navbar">
                    <NavLink to="/paises" className="navbar__enlace" activeClassName="actual">Contagiados</NavLink>
                    <NavLink to="/vacunas" className="navbar__enlace" activeClassName="actual">Vacunas</NavLink>
                    <NavLink to="/mundial" className="navbar__enlace" activeClassName="actual">México</NavLink>
                </div>
            </div>
            <div className="contenedor__movil">
                <div className="menu">
                    <MenuHamburguesa />
                </div>
                <div className="logo">
                    <Link to="/" className="contenedor__enlace">
                        <h2>Covid-19</h2>
                    </Link>
                </div>
            </div>
        </div>
    )
}
