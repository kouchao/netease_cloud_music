import React from 'react'
import Icon from '@/components/icon'
import './index.scss'
interface UserInfoProps {}

const UserInfo: React.FunctionComponent<UserInfoProps> = (props) => {
  return (
    <div className="user-info">
      <div className="user-info__avatar">
        <Icon name="user" color="#fff" size='70'></Icon>
      </div>
      <div className='user-info__username'>未登录</div>
      <Icon name="triangle-right" color="#666"></Icon>
    </div>
  )
}

export default UserInfo
