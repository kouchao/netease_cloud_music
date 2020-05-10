import React from 'react';
import './index.scss'
import Navigation from './components/navigation'
import UserInfo from './components/userInfo'
import Menu from '@/components/menu'
import MenuItem from '@/components/menuItem'
import Icon from '@/components/icon';

function Side() {
    return <div className='side'>
        <Navigation></Navigation>
        <UserInfo></UserInfo>
        <Menu>
            <MenuItem icon='netease' title='发现音乐' active></MenuItem>
            <MenuItem icon='fm' title='私人FM'></MenuItem>
            <MenuItem icon='video' title='视频'></MenuItem>
            <MenuItem icon='friend' title='朋友'></MenuItem>
        </Menu>
        <Menu title="我的音乐">
            <MenuItem icon='netease' title='下载管理'></MenuItem>
        </Menu>
        <Menu fold title="创建的歌单" right={
            <Icon name='plus'></Icon>
        }>
            <MenuItem icon='like-o' title='我喜欢的音乐'></MenuItem>
        </Menu>
    </div>
}

export default Side;
