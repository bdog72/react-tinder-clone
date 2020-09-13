//
//

import React from 'react';
import '../styles/Header.css';

import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';

import IconButton from '@material-ui/core/IconButton';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';

import { tinderImage } from '../imageLink';
import { Link, useHistory } from 'react-router-dom';

function Header({ backButton }) {
  const history = useHistory();
  return (
    <div className='header'>
      {backButton ? (
        // <Link to='/'>
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIos fontSize='large' className='header__icon' />
        </IconButton>
      ) : (
        // </Link>
        <IconButton>
          <PersonIcon className='header__icon' fontSize='large' />
        </IconButton>
      )}

      <Link to='/'>
        <img className='header__logo' src={tinderImage} alt='tinder logo' />
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
