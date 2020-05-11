import React from 'react';
import Icon from '@/components/icon'
import './index.scss'

export default function Navigation() {
    return <div className='nav'>
        <button className="nav__item"><Icon name="left" color="#737373"></Icon></button>
        <button className="nav__item nav__item--disabled" disabled><Icon name="right" color="#cdcdcd"></Icon></button>
    </div>
};
