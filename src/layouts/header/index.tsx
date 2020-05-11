import React from 'react'
import Icon from '@/components/icon'
import Navigation from './components/navigation'
import Search from './components/search'

import './index.scss'
interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  return (
    <div className="header">
      <Navigation></Navigation>
      <div className="header__right">
        <Search></Search>
        <div className='header__icon'>
        <Icon name="setting"></Icon>
        </div>
        <div className='header__icon'>
        <Icon name="message"></Icon>
        </div>
        <div className='header__icon'>
        <Icon name="skin"></Icon>
        </div>
      </div>
    </div>
  )
}

export default Header
