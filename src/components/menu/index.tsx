import React, { useState } from 'react'
import classnames from 'classnames'
import Icon from '@/components/icon';

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
  /**
   * 可折叠
   */
  fold?: boolean
}

function renderTitle(fold: boolean, title?: string) {
  if (title) {
    return <div className={classnames('title', { 'title--fold': fold })}>{title}</div>
  } else {
    return <span></span>
  }
}


const Menu: React.FunctionComponent<MenuProps> = ({ children, title = '', right, fold = false }) => {
  const [isOpen, setIsOpen] = useState(true)
  function handlerFold() {
    fold && setIsOpen(!isOpen)
  }
  return (
    <div>
      {
        (title || right || fold) && <div className={classnames('title__view', {'title__view--fold': fold})} onClick={handlerFold}>
          {fold && <Icon name={isOpen ? 'arrow-down' : 'arrow-right'} size='12' color="#888888"></Icon>}
          {renderTitle(fold, title)}
          <div className='title__right'>{right}</div>
        </div>
      }

      {
        isOpen && <ul className='menu'>
          {children}
        </ul>
      }
    </div>
  )
}

export default Menu
