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
  size?: string
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  const size = props.size || 16
  return (
    <svg
      className="icon"
      width={size}
      height={size}
      onClick={props.onClick}
      fill={props.color}
    >
      <use xlinkHref={`#${props.name}`}></use>
    </svg>
  )
}

export default Icon
