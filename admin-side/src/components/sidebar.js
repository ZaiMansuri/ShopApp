
import React from 'react';
import { reveal as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu {...props} width={'250px'} padding={'10px'} >

      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/inventorylist">
       Manage inevntory
      </a>
      <a className="menu-item" href="/subcategorylist">
        Manage Sub Category
      </a>
      <a className="menu-item" href="/Categorylist">
        Manage Category
      </a>
      <a className="menu-item" href="/filterlist">
        Manage Filter
      </a>
      <a className="menu-item" href="/userlist">
        Show Users
      </a>
    </Menu>
  );

};