import React from 'react';
import Link from 'next/link';
import Routes from '../constants/routes.js';
import Logo from './Logo';
import Grid from './Grid';

const navItems = Routes.map(({ text, path }) => {
  return (
    <Link key={path} href={path} prefetch>
      <a style={{ marginBottom: 8, fontWeight: 600 }}>
        {text}
      </a>
    </Link>
  );
});

class Nav extends React.Component {
  render() {
    return (
      <Grid>
        <div className="grid-25">
          <Logo />
        </div>
        <div className="grid-75 flex-column">
          {navItems}
        </div>
      </Grid>
    );
  }
}

export default Nav;
