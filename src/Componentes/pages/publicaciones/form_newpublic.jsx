import React from 'react'

export default function FormNewPublic() {
  const [status, setStatus] = React.useState('Status: Feeling Blue');

  return (
    <div className="w3-row-padding" style={{ maxWidth: '700px', margin: '20px auto' }}>
      <div className="w3-col m12">
        <div className="w3-card w3-round w3-white">
          <div className="w3-container w3-padding">
            <h6 className="w3-opacity">Social Media template by w3.css</h6>
            <textarea
              className="w3-border w3-padding"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              style={{ width: '100%', minHeight: '80px' }}
            />
            <button type="button" className="w3-button w3-theme">
              <i className="fa fa-pencil" /> Post
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
