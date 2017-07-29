import React from 'react';
import Nav from '../Nav';

const withNavHoc = Wrapped => {
  function WithNav(props) {
    return (
      <div>
        <Nav />
        <Wrapped {...props} />
      </div>
    );
  }

  WithNav.displayName = `WithNav(${Wrapped.name})`;

  return WithNav;
};

export default withNavHoc;
