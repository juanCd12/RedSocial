import React from 'react'

export default function PerfilUsuario() {
  return (
    <div className="w3-container w3-content" style={{ maxWidth: '1400px', marginTop: '80px' }}>
      <div className="w3-row">
        {/* Profile Card */}
        <div className="w3-col m12">
          <div className="w3-card w3-round w3-white w3-padding-32">
            <div className="w3-center">
              <h2>My Profile</h2>
              <img
                src="https://www.w3schools.com/w3images/avatar3.png"
                className="w3-circle"
                style={{ height: '200px', width: '200px', margin: '20px 0' }}
                alt="Avatar"
              />
              <hr />
              <p>
                <strong>Name:</strong> Designer, UI
              </p>
              <p>
                <strong>Location:</strong> London, UK
              </p>
              <p>
                <strong>Birthday:</strong> April 1, 1988
              </p>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="w3-button w3-theme w3-wide w3-margin-top">Edit Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
