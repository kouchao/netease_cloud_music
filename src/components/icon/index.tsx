import React from 'react'
import './importIcons.js'

import './index.scss'
interface IconProps {
  /**
   * 图标名
   */
  name: string
  /**
   * 颜色
   */
  color?: string
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <span>
      <svg>
        <use xlinkHref={`#${props.name}`}></use>
      </svg>
    </span>
  )
}

export default Icon
