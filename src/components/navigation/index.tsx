import React from 'react';
import './index.scss'
import Icon from '../icon'

export default function Navigation() {
    return <div className='nav'>
        <div className="nav-item"><Icon name="left" color="#666"></Icon></div>
        <div className="nav-item"><Icon name="right" color="#bbb"></Icon></div>
    </div>
};
