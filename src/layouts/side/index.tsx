import React from 'react';
import './index.scss'
import Navigation from './components/navigation'
import UserInfo from './components/userInfo'
import Menu from '@/components/menu'
import MenuItem from '@/components/menuItem'

function Side() {
    return <div className='side'>
        <Navigation></Navigation>
        <UserInfo></UserInfo>
        <Menu>
            <MenuItem icon='fm' title='私人FM'></MenuItem>
        </Menu>
    </div>
}

export default Side;
