import React from 'react';
import { navs } from '@/data/data';
import Link from 'next/link';
import './nav.css';

const Nav = () => {
    return (
      <nav className="navbar">
        <div className={`nav-links`}>
        {
          navs.map(nav=>(
              <li key={nav.id}>
                  <Link href={nav.link}>{nav.name}</Link>
              </li>
          ))
        }     
        </div>
      </nav>
    )
  }

export default Nav