import React, { ReactElement } from 'react';

import star from '../../assets/img/star.svg';
import bell from '../../assets/img/bell.svg';
import answer from '../../assets/img/answer.svg';
import lifebuoy from '../../assets/img/lifebuoy.svg';
import girlUser from '../../assets/img/girl_user.svg';

export const HeaderComponent = (): ReactElement => {
  return (
    <header className="header">
      <nav className="nav header__nav">
        <a className="nav__menu-item">All Projects</a>
        <a className="nav__menu-item">My projects</a>
        <a className="nav__menu-item">Teams</a>
        <a className="nav__menu-item header__nav-menu-item-active">Messages</a>
        <a className="nav__menu-item">Statistics</a>
        <a className="nav__menu-item">Search</a>
      </nav>
      <div className="header__notification">
        <div className="header__notification-icons">
          <div className="header__notification-icon-wrapper">
            <img alt="notification icon" className="header__notification-icon-img"
              src={star} />
            <div
              className="header__notification-icon-counter header__notification-icon-counter-star">10
            </div>
          </div>
          <div className="header__notification-icon-wrapper">
            <img alt="notification icon" className="header__notification-icon-img"
              src={bell} />
            <div
              className="header__notification-icon-counter header__notification-icon-counter-bell">28
            </div>
          </div>
          <div className="header__notification-icon-wrapper">
            <img alt="notification icon" className="header__notification-icon-img"
              src={answer} />
          </div>
          <div className="header__notification-icon-wrapper">
            <img alt="notification icon" className="header__notification-icon-img"
              src={lifebuoy} />
          </div>
        </div>
        <div className="header__user">
          <span>Rachel Curtis</span>
          <img alt="user picture" className="header__user-img" src={girlUser} />
        </div>
      </div>
    </header>
  );
};
