import React, { ReactElement } from 'react';

import { ChatListNavigation } from './chat-list-navigation/ChatListNavigation';
import { ChatListDetailsUser } from './chat-list-details-user/ChatListDetailsUser';

export const ChatList = (): ReactElement => {
  return (
    <section className="chat-list">
      <ChatListNavigation />
      <ChatListDetailsUser />
    </section>
  );
};
