import React, { Children } from 'react'

// import './index.scss'
interface MenuProps {
  
}

const Menu: React.FunctionComponent<MenuProps> = ({children}) => {
  return (
    <ul>
      {children}
    </ul>
  )
}

export default Menu