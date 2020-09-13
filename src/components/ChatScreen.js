//
//
import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';

import '../styles/ChatScreen.css';

function ChatScreen() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: 'Sarah',
      image:
        'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      message: 'What;s up Bozo',
    },
    {
      name: 'Sarah',
      image:
        'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      message: 'How it going?',
    },
    {
      message: 'You are a Bozo the Clown',
    },
  ]);
  return (
    <div className='chatScreen'>
      <p className='chatScreen__timestamp'>YOU MATCHED WITH SARAH</p>
      {messages.map((message) =>
        message.name ? (
          <div className='chatScreen__message'>
            <Avatar
              className='chatScreen__image'
              alt={message.name}
              src={message.image}
            />
            <p className='chatScreen__text'>{message.message}</p>
          </div>
        ) : (
          <div className='chatScreen__message'>
            <p className='chatScreen__textUser'>{message.message}</p>
          </div>
        )
      )}
      <form className='chatScreen__input'>
        <input
          className='chatScreen__inputField'
          placeholder='Type a message'
          type='text'
        />
        <button className='chatScreen__inputButton'>SEND</button>
      </form>
    </div>
  );
}

export default ChatScreen;
