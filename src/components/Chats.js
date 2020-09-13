//
//
import React from 'react';
import {
  avatarImage1,
  avatarImage2,
  avatarImage3,
  avatarImage4,
} from '../imageLink';
import '../styles/Chats.css';

import Chat from './Chat';

function Chats() {
  return (
    <div className='chats'>
      <Chat
        name='Sarah'
        message='Hey, how are you'
        timestamp='35 minutes ago'
        profilePic={avatarImage1}
      />
      <Chat
        name='Ellen'
        message="What's up?"
        timestamp='55 minutes age'
        profilePic={avatarImage2}
      />
      <Chat
        name='Sandra'
        message='Ola!'
        timestamp='3 days ago'
        profilePic={avatarImage3}
      />
      <Chat
        name='Natasha'
        message='Oops there he is'
        timestamp='1 week ago'
        profilePic={avatarImage4}
      />
    </div>
  );
}

export default Chats;
