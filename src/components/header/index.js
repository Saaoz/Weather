import React from 'react'
import logo from '../../assets/img/Logo.svg'
import CustomSearch from '../common/CustomSearch'
import CustomInputCel from '../common/CustomInputCel'
import './index.css'

function Header(props) {
    const {dataWeather} = props ;

  return (
    <header>
        <img src={ logo } alt='#' width={110} height={38}/>
        <CustomSearch/>
        <CustomInputCel/>
    </header>
  )
}

export default Header