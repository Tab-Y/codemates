import React from 'react';

function Nav(props) {
    const tabs = ['Home', 'Search', 'Notification', 'Favorites', 'Profile', 'Saves']

    return (

        <header id="flex-row">

    <div>

        <nav className="menu">
          <input type="radio" name="nav-item" id="m-home" defaultChecked /><label htmlFor="m-home">Home</label>
          <input type="radio" name="nav-item" id="m-search" /><label htmlFor="m-search">Search</label>
          <input type="radio" name="nav-item" id="m-notification" /><label htmlFor="m-notification">Notification</label>
          <input type="radio" name="nav-item" id="m-favorites" /><label htmlFor="m-favorites">Favorites</label>
          <input type="radio" name="nav-item" id="m-profile" /><label htmlFor="m-profile">Profile</label>
          <input type="radio" name="nav-item" id="m-saves" /><label htmlFor="m-profile">Profile</label>
          <div className="selector" />
        </nav>

        {/* partial */}
      </div>
      </header>
    )
  }

  export default Nav;