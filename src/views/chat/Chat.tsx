import React, { ReactElement } from 'react';

import menUser from '../../assets/img/menUser.svg';
import room from '../../assets/img/room.jpg';

export const Chat = (): ReactElement => {
  return (
    <section className="chat">
      <div className="chat__container">
        <div className="chat__message-item">
          <div className="chat__message-item-wrapper">
            <div className="chat__message-item-wrapper--user-icon">
              <img alt="user icon" src={menUser} />
            </div>
            <span className="chat__message-item-wrapper--user-text">Maybe you already have additional info?</span>
          </div>
          <span className="chat__message-item-time">14:30 pm</span>
        </div>
        <div className="chat__message-item">
          <div className="chat__message-item-wrapper">
            <div className="chat__message-item-wrapper--user-icon">
              <img alt="user icon" src={menUser} />
            </div>
            <span className="chat__message-item-wrapper--user-text">It is to early to provide some kind of estimation here. We need user stories</span>
          </div>
          <span className="chat__message-item-time">14:20 pm</span>
        </div>
        <div className="chat__message-item chat__message-item-reverse">
          <div className="chat__message-item-wrapper">
            <div className="chat__message-item-wrapper--user-icon">
              <img alt="user icon" src={menUser} />
            </div>
            <span className="chat__message-item-wrapper--user-text">We are just writing up the user stories now so will have requirements for you next week</span>
          </div>
          <span className="chat__message-item-time">14:05 pm</span>
        </div>
        <div className="chat__message-item chat__message-item-reverse">
          <div className="chat__message-item-wrapper chat__message-item-wrapper--big-text">
            <div className="chat__message-item-wrapper--user-icon">
              <img alt="user icon" src={menUser} />
            </div>
            <span className="chat__message-item-wrapper--user-text">Essentially the brief is for you guys to build an iOS and android app.
                    We will do backend and web app. We have a version one mockup of the UI, please see it attached.
                    As mentioned before, we would simply hand you all the assets for the UI and you guys
                    code. If you have any early questions please do send them on to myself.
                    Ill be in touch in coming days when we have requirements prepared.</span>
          </div>
          <span className="chat__message-item-time">12:00 pm</span>
        </div>
        <div className="chat__message-item chat__message-item-reverse">
          <div className="chat__message-item-wrapper chat__message-item-wrapper-data">
            <div className="chat__message-item-wrapper--user-icon">
              <img alt="user icon" src={menUser} />
            </div>
            <div className="chat__message-item-wrapper--content">
              <img alt="image preview" src={room} width="114px" height="84px" />
              <div className="chat__message-item-wrapper--user-icon-description">
                <span>Big room.jpg</span>
                <a href="#">Download</a>
              </div>
              <button></button>
            </div>
          </div>
          <span className="chat__message-item-time chat__message-item-time-data">11:22 pm</span>
        </div>
      </div>
      <div className="chat__input-area">
        <input type="file" id="input_file" />
        <label htmlFor="input_file"></label>
        <textarea placeholder="Type your message..."></textarea>
        <button>SEND</button>
      </div>
    </section>
  );
};
