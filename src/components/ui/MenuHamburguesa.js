import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { abrirMenu } from '../../actions/menuHamburguesa'
import { MenuHamburguesaAbierto } from './MenuHamburguesaAbierto'

export const MenuHamburguesa = () => {
    const dispatch = useDispatch()
    const {abierto} = useSelector(state => state.menu)
    const abrir = () => {
        dispatch(abrirMenu())
    }
    return (
        <>
        <i className='bx bx-menu menu__hamburguesa' onClick={abrir}></i>
        {
            abierto && <MenuHamburguesaAbierto />
        }
        </>
    )
}
