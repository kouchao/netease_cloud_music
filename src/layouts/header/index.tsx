import React from 'react'
import Icon from '@/components/icon'
import Navigation from './components/navigation'

import './index.scss'
interface HeaderProps { }

const Header: React.FunctionComponent<HeaderProps> = (props) => {
    return (
        <div className="header">
            <Navigation></Navigation>
            <Icon name='user'></Icon>
        </div>
    )
}

export default Header
