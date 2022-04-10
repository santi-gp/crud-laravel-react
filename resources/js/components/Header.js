import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='flex-row jc-between bgc-1 color-white py-2'>
        <div className='ml-2'>
          LOGO
        </div>
        <nav className='f-grow3 mr-2'>
            <ul className='flex-row jc-around'>
              <li>
                <NavLink to='/movies' className='d-block color-white' style={({isActive}) => ({color: isActive ? 'cyan' : 'white'})}>
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink to='/movies/list' className='d-block color-white' style={({isActive}) => ({color: isActive ? 'cyan' : 'white'})}>
                  Películas
                </NavLink>
              </li>
              <li>
                <NavLink to='/movies/new' className='d-block color-white' style={({isActive}) => ({color: isActive ? 'cyan' : 'white'})}>
                  Nueva
                </NavLink>
              </li>   
            </ul>
        </nav>
    </header>
  )
}

export default Header