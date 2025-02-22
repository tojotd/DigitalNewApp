'use client';
import React, { useState } from 'react';
import './header.css';
import Nav from './Nav';
import Sci from './Sci';
import SearchForm from './SearchForm';

const Header = () => {

  const [open, setOpen] = useState(false); // For search form open state
  const [isNavOpen, setIsNavOpen] = useState(false); // For mobile navigation toggle state

  const handleFormOpen = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setOpen(!open); // Toggle the search form open state
  };

  // Mobile view compatibility
  const handleToggleMenu = () => {
    setIsNavOpen(!isNavOpen); // Toggle the mobile navigation menu state
    const body: HTMLElement | null = document.querySelector('body');
    if (body) {
      body.classList.toggle('mobile-nav-active');
    }
  };

  return (
    <header id="header" className='header d-flex align-items-center fixed-top'>
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center">
          <h1>Digital News</h1>
        </a>
        <Nav />
        <div className='position-relative'></div>
        <Sci />
        <a className='mx-2 js-search-open' onClick={handleFormOpen}>
          <span className='bi-search'></span>
        </a>

        {/* Mobile view compatibility */}
        {isNavOpen ? (
          <i className='bi bi-x mobile-nav-toggle'
             onClick={handleToggleMenu}></i>
        ) : (
          <i className='bi bi-list mobile-nav-toggle'
             onClick={handleToggleMenu}></i>
        )}

        <SearchForm active={open} formOpen={handleFormOpen} />
      </div>
    </header>
  );
}

export default Header;
