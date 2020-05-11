import React from 'react'
import './importIcons.js'

import './index.scss'
interface IconProps extends React.SVGAttributes<SVGElement> {
  /**
   * 图标名
   */
  name: string
  /**
   * 颜色
   */
  color?: string
  /**
   * 大小
   */
  size?: string | number
}

const Icon: React.FunctionComponent<IconProps> = ({
  size = 16,
  onClick,
  color = '#2d2d2d',
  name,
}) => {
  return (
    <svg
      className="icon"
      width={size}
      height={size}
      onClick={onClick}
      fill={color}
    >
      <use xlinkHref={`#${name}`}></use>
    </svg>
  )
}

export default Icon
