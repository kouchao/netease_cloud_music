import React, { Children } from 'react'

import './index.scss'
interface MenuProps {
  
}

const Menu: React.FunctionComponent<MenuProps> = ({children}) => {
  return (
    <ul className='menu'>
      {children}
    </ul>
  )
}

export default Menu
