import React from 'react'
import Icon from '@/components/icon'
import './index.scss'
interface UserInfoProps {}

const UserInfo: React.FunctionComponent<UserInfoProps> = (props) => {
  return (
    <div className="user-info">
      <div className="user-info__avatar">
        <Icon name="user" color="#fff" size='54'></Icon>
      </div>
      <div className='user-info__username'>未登录</div>
      <Icon name="arrow-right" color="#909090"></Icon>
    </div>
  )
}

export default UserInfo
