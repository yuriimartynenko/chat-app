import React, { ReactElement } from 'react';

import selected_girl from '../../../assets/img/selected_girl.svg';

export const ChatListDetailsUser = (): ReactElement => {
  return (
    <div className="user-info">
      <div className="user-info__header">
        <img alt="selected user avatar" className="user-info__header-avatar" src={selected_girl} />
        <div className="user-info__header-description">
          <span>Rachel Curtis</span>
          <span>New York, USA</span>
        </div>
      </div>
      <div className="user-info__container">
        <div className="user-info__container-description">
          <span>Nickname</span> <br/>
          <span>Silentgirl</span>
        </div>
        <div className="user-info__container-description">
          <span>Email</span> <br/>
          <span>rachelcurtis@itzpromo.com</span>
        </div>
        <div className="user-info__container-description">
          <span>Phone number</span> <br/>
          <span>(805) 651-9088</span>
        </div>
      </div>
      <div className="user-info__container">
        <div className="user-info__container-description">
          <span>Date of birth</span> <br/>
          <span>January 20, 1990</span>
        </div>
        <div className="user-info__container-description">
          <span>Gender</span> <br/>
          <span>Female</span>
        </div>
        <div className="user-info__container-description">
          <span>Languages</span> <br/>
          <span>English, French</span>
        </div>
        <span className="user-info__container-full-profile">Show full profile</span>
      </div>
    </div>
  );
};