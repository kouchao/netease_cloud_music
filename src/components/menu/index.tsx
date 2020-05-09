import React, { Children } from 'react'

import './index.scss'
interface MenuProps {
  /**
   * 菜单标题
   */
  title?: string
  /**
   * 右侧的插槽
   */
  right?: React.ReactElement
}

function renderTitle(title?: string) {
  if (title) {
    return <div className='title'>{title}</div>
  } else {
    return <span></span>
  }
}


const Menu: React.FunctionComponent<MenuProps> = ({ children, title = '', right }) => {
  return (
    <div>
      <div>
        {renderTitle(title)}
        {right}
      </div>
      <ul className='menu'>
        {children}
      </ul>
    </div>
  )
}

export default Menu
