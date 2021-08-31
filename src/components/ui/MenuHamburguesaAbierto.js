import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { cerrarMenu } from '../../actions/menuHamburguesa'

export const MenuHamburguesaAbierto = () => {
    const dispatch = useDispatch()

    const cerrar = () => {
        dispatch(cerrarMenu())
    }
    return (
        <div className="menu__haburguesa-abierto animate__animated animate__backInUp">
            <button className="cerrar__menu" onClick={cerrar}>X</button>
            <Link to="/" className="navbar__enlace movil-t" onClick={cerrar}>Covid-19</Link>
            <NavLink to="/paises" className="navbar__enlace movil" activeClassName="actual" onClick={cerrar}>Países</NavLink>
            <NavLink to="/mundial" className="navbar__enlace movil" activeClassName="actual" onClick={cerrar}>Mundial</NavLink>
            <NavLink to="/vacunas" className="navbar__enlace movil" activeClassName="actual" onClick={cerrar}>Vacunas</NavLink>
        </div>
    )
}
