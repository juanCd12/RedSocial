import React from 'react'

export default function Login() {
  return (
    <div className="w3-container w3-content" style={{ maxWidth: '1400px', marginTop: '80px' }}>
      <div className="w3-row">
        {/* Left Column */}
        <div className="w3-col m3">
          {/* Profile */}
          <div className="w3-card w3-round w3-white">
            <div className="w3-container">
              <h4 className="w3-center">My Profile</h4>
              <p className="w3-center">
                <img
                  src="https://www.w3schools.com/w3images/avatar3.png"
                  className="w3-circle"
                  style={{ height: '106px', width: '106px' }}
                  alt="Avatar"
                />
              </p>
              <hr />
              <p>
                <i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme" />
                Designer, UI
              </p>
              <p>
                <i className="fa fa-home fa-fw w3-margin-right w3-text-theme" />
                London, UK
              </p>
              <p>
                <i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme" />
                April 1, 1988
              </p>
            </div>
          </div>
          <br />
          <div className="w3-card w3-round w3-white w3-hide-small">
            <div className="w3-container">
              <p>Interests</p>
              <p>
                <span className="w3-tag w3-small w3-theme-d5">News</span>
                <span className="w3-tag w3-small w3-theme-d4">W3Schools</span>
                <span className="w3-tag w3-small w3-theme-d3">Labels</span>
                <span className="w3-tag w3-small w3-theme-d2">Games</span>
                <span className="w3-tag w3-small w3-theme-d1">Friends</span>
              </p>
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div className="w3-col m7">
          <div className="w3-card w3-round w3-white w3-padding-32 w3-center">
            <h2>Login Form</h2>
            <form>
              <input type="text" className="w3-input w3-border w3-margin" placeholder="Username" />
              <input type="password" className="w3-input w3-border w3-margin" placeholder="Password" />
              <button type="submit" className="w3-button w3-theme w3-wide w3-margin-top">
                Login
              </button>
            </form>
          </div>
        </div>

        {/* Right Column */}
        <div className="w3-col m2">
          <div className="w3-card w3-round w3-white w3-center">
            <div className="w3-container">
              <p>Upcoming Events:</p>
              <img src="https://www.w3schools.com/w3images/forest.jpg" alt="Forest" style={{ width: '100%' }} />
              <p>
                <strong>Holiday</strong>
              </p>
              <p>Friday 15:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
