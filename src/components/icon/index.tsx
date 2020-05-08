import React from 'react';
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

export default function Icon(props: IconProps) {
    return <div className='icon' style={{color: props.color}}>
        {props.name[0]}
    </div>
}
