import React from 'react';
import Icon from '@/components/icon'

import './index.scss'

export default function Navigation() {
    return <div className='header-nav'>
        <div className="header-nav__item header-nav__item--active">个性推荐</div>
        <div className="header-nav__item">歌单</div>
        <div className="header-nav__item">主播电台</div>
        <div className="header-nav__item">排行榜</div>
        <div className="header-nav__item">歌手</div>
        <div className="header-nav__item">最新音乐</div>
    </div>
};
