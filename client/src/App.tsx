import React from 'react';
import {HeaderComponent} from './components/header/HeaderComponent';
import {AsideComponent} from './components/aside/AsideComponent';
import { ChatList } from './views/chat-list/ ChatList';
import { Chat } from './views/chat/Chat';
import './assets/styles/main.scss';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <main className="main">
        <AsideComponent />
        <ChatList />
        <Chat />
      </main>
    </div>
  );
}

export default App;
