import React, { ReactElement } from 'react';

import menUser from '../../../assets/img/menUser.svg';
import selected_girl from '../../../assets/img/selected_girl.svg';

export const ChatListNavigation = (): ReactElement => {
  return (
    <div className="chat-list__wrapper">
      <div className="chat-list__header">
        <div className="chat-list__header-title title">
          <span>List of designers</span>
          <button></button>
        </div>

        <nav className="nav chat-list__header-tab">
          <a className="nav__menu-item chat-list__header-tab-active">All messages</a>
          <a className="nav__menu-item">Unread</a>
          <a className="nav__menu-item">Important</a>
        </nav>
      </div>

      <div className="chat-list__messages">
        <div className="chat-list__messages-user">
          <img alt="user icon" src={menUser} />
          <div className="chat-list__messages-user-status"></div>
        </div>
        <div className="chat-list__messages-item-description">
          <div className="chat-list__messages-item-text">
            <span className="chat-list__messages-item-name">Matt Tompson</span>
            <span className="chat-list__messages-item-message">I send you a few files for works...</span>
          </div>
          <div className="chat-list__messages-item-settings">
            <button></button>
            <span>18:00pm</span>
          </div>
        </div>
      </div>
      <div className="chat-list__messages">
        <div className="chat-list__messages-user">
          <img alt="user icon" src={menUser} />
          <div className="chat-list__messages-user-status chat-list__messages-user-status-offline"></div>
        </div>
        <div className="chat-list__messages-item-description">
          <div className="chat-list__messages-item-text">
            <span className="chat-list__messages-item-name">Aaron Walker</span>
            <span className="chat-list__messages-item-message">Write me about a project...</span>
          </div>
          <div className="chat-list__messages-item-settings">
            <button></button>
            <span>15:10pm</span>
          </div>
        </div>
      </div>
      <div className="chat-list__messages chat-list__messages-selected">
        <div className="chat-list__messages-user">
          <img alt="user icon" src={selected_girl} />
          <div className="chat-list__messages-user-status"></div>
        </div>
        <div className="chat-list__messages-item-description">
          <div className="chat-list__messages-item-text">
            <span className="chat-list__messages-item-name">Rachel Curtis</span>
            <span className="chat-list__messages-item-message">Thanks friend! I`&apos;m working now...</span>
          </div>
          <div className="chat-list__messages-item-settings">
            <button></button>
            <span>14:20pm</span>
          </div>
        </div>
      </div>
      <div className="chat-list__messages">
        <div className="chat-list__messages-user">
          <img alt="user icon" src={menUser} />
          <div className="chat-list__messages-user-status"></div>
        </div>
        <div className="chat-list__messages-item-description">
          <div className="chat-list__messages-item-text">
            <span className="chat-list__messages-item-name">Stephanie Bailey</span>
            <span className="chat-list__messages-item-message">Hey. I send a files today...</span>
          </div>
          <div className="chat-list__messages-item-settings">
            <button></button>
            <span>14:05pm</span>
          </div>
        </div>
      </div>
      <div className="chat-list__messages">
        <div className="chat-list__messages-user">
          <img alt="user icon" src={menUser} />
          <div className="chat-list__messages-user-status chat-list__messages-user-status-do-not-disturb"></div>
        </div>
        <div className="chat-list__messages-item-description">
          <div className="chat-list__messages-item-text">
            <span className="chat-list__messages-item-name">Amy Matthews</span>
            <span className="chat-list__messages-item-message">Maybe you already have add...</span>
          </div>
          <div className="chat-list__messages-item-settings">
            <button></button>
            <span>13:10pm</span>
          </div>
        </div>
      </div>
      <div className="chat-list__messages">
        <div className="chat-list__messages-user">
          <img alt="user icon" src={menUser} />
          <div className="chat-list__messages-user-status chat-list__messages-user-status-do-not-disturb"></div>
        </div>
        <div className="chat-list__messages-item-description">
          <div className="chat-list__messages-item-text">
            <span className="chat-list__messages-item-name">Helen Newman</span>
            <span className="chat-list__messages-item-message">We are just writing up the user...</span>
          </div>
          <div className="chat-list__messages-item-settings">
            <button></button>
            <span>12:40pm</span>
          </div>
        </div>
      </div>
    </div>
  );
};
