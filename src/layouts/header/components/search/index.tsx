import React from 'react';
import Icon from '@/components/icon'

import './index.scss'

export default function Search() {
    return <div className='search'>
        <Icon name='search'></Icon>
        <input placeholder='搜索' className='search__input'></input>
    </div>
};
