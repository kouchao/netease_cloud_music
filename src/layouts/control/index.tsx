import React from 'react'
import Icon from '@/components/icon'

import './index.scss'

export default function Control() {
  return (
    <div className="control">
      <div className="control__item control__item--music">
        <img className="control__photo"></img>
        <div>
          <div>
            <span className="control__song">歌曲名</span>
            <span className="control__author">- 作者名</span>
          </div>
          <div className="control__time">00:00 / 04:31</div>
        </div>
      </div>
      <div className="control__item control__item--center">
        <div className="control__item-icon">
          <Icon name="like-o" size="20"></Icon>
        </div>
        <div className="control__item-icon">
          <Icon name="skip-back" size="20"></Icon>
        </div>
        <div className="control__item-icon control__item-icon--play">
          <Icon name="play" size="20" color="#fff"></Icon>
          {/* <Icon name="pause"></Icon> */}
        </div>
        <div className="control__item-icon">
          <Icon name="skip-forward" size="20"></Icon>
        </div>
        <div className="control__item-icon">
          <Icon name="remove" size="20"></Icon>
        </div>
      </div>
      <div className="control__item control__item--setting">
        <div className="control__item-icon">
          <Icon name="word" size="20"></Icon>
        </div>
        <div className="control__item-icon">
          <Icon name="volume" size="20"></Icon>
          {/* <Icon name="volume-off" size="20"></Icon> */}
        </div>
      </div>
    </div>
  )
}
