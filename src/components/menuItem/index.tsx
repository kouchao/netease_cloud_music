import React from 'react'
import classnames from 'classnames'
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
  /**
   * 是否选中
   */
  active?: boolean
}

const renderIcon = function (active: boolean, icon?: string) {
  const color = active ? '#f00' : '#222'
  if (icon) {
    return (
      <div className="menu-item__icon">
        <Icon name={icon} color={color}></Icon>
      </div>
    )
  }
}

const MenuItem: React.FunctionComponent<MenuItemProps> = ({
  title,
  icon,
  active = false,
}) => {
  return (
    <li className={classnames('menu-item', { 'menu-item--active': active })}>
      {renderIcon(active, icon)}
      {title}
    </li>
  )
}

export default MenuItem
