import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
      <ul id="top-nav-bar">
        <li>
          <h2 id="nav-bar-logo">Revival</h2>
        </li>
        <li>
          <NavLink exact to="/product-list">Home</NavLink>
        </li>
        <li>
          <NavLink exact to="/shopping-cart">Cart</NavLink>
          {isLoaded && sessionLinks}
        </li>
      </ul>
  );
}

export default Navigation;
