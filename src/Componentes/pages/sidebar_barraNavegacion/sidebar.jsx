import React from 'react'

export default function Sidebar() {
  return (
    <div className="w3-sidebar w3-bar-block w3-light-grey w3-card" style={{ width: "25%" }}>
      <h3 className="w3-bar-item">Menu</h3>
      <div id="navDemo" className="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large">
        <a href="#" className="w3-bar-item w3-button w3-padding-large">Link 1</a>
        <a href="#" className="w3-bar-item w3-button w3-padding-large">Link 2</a>
        <a href="#" className="w3-bar-item w3-button w3-padding-large">Link 3</a>
        <a href="#" className="w3-bar-item w3-button w3-padding-large">My Profile</a>
        <a href="#" className="w3-bar-item w3-button w3-padding-large">My Messages</a>
      </div>
    </div>
  )
}
