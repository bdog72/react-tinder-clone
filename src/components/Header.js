//
//

import React from 'react';
import '../styles/Header.css';

import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';

import IconButton from '@material-ui/core/IconButton';
import { image1 } from '../imageLink';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon className='header__icon' fontSize='large' />
      </IconButton>

      <Link to='/'>
        <img className='header__logo' src={image1} alt='tinder logo' />
      </Link>

      <Link to='/chat'>
        <IconButton>
          <ForumIcon className='header__icon' fontSize='large' />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
