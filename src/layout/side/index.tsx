import React from 'react';
import './index.scss'
import Navigation from './components/navigation'
import UserInfo from './components/userInfo'

function Side() {
    return <div>
        <Navigation></Navigation>
        <UserInfo></UserInfo>
    </div>
}

export default Side;
