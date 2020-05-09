import React from 'react'
import Icon from '../icon'

import './index.scss'
interface MenuItemProps {
  /**
   * 标题
   */
  title: string
  /**
   * 图标
   */
  icon?: string
}

const renderIcon = function (active: boolean, icon?: string ){
  const color = active ? '#f00' : '#222'
  console.log(color)
  if(icon){
    return <div className='menu-item__icon'><Icon name={icon} color={color}></Icon></div>
  }
}

const MenuItem: React.FunctionComponent<MenuItemProps> = ({ title, icon }) => {
  return (
    <li className='menu-item menu-item--active'>
      {renderIcon(true, icon)}
      {title}
    </li>
  )
}

export default MenuItem
