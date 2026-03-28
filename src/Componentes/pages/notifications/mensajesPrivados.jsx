import React from 'react'

export default function MensajesPrivados() {
  const [messages, setMessages] = React.useState([
    {
      id: 1,
      name: 'Juan Davila',
      avatar: 'https://www.w3schools.com/w3images/avatar2.png',
      message: 'Hey! How are you doing?',
      time: 'Now',
    },
    {
      id: 2,
      name: 'Maria Jane',
      avatar: 'https://www.w3schools.com/w3images/avatar5.png',
      message: 'Let\'s catch up later',
      time: '5 min',
    },
  ]);

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto' }}>
      <h3>Mensajes Privados</h3>
      {messages.map((msg) => (
        <div key={msg.id} className="w3-container w3-card w3-white w3-round w3-margin-bottom">
          <div className="w3-row">
            <div className="w3-col" style={{ width: '80px' }}>
              <img
                src={msg.avatar}
                className="w3-circle"
                style={{ width: '60px' }}
                alt={msg.name}
              />
            </div>
            <div className="w3-rest w3-padding">
              <h5 style={{ margin: '0 0 5px 0' }}>{msg.name}</h5>
              <p style={{ margin: '0 0 5px 0' }}>{msg.message}</p>
              <span className="w3-small w3-opacity">{msg.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
