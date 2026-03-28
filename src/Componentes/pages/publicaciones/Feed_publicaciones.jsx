import React from 'react'

export default function FeedPublicaciones() {
  const [posts, setPosts] = React.useState([
    {
      id: 1,
      name: 'John Doe',
      avatar: 'https://www.w3schools.com/w3images/avatar2.png',
      time: '1 min',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      images: ['https://www.w3schools.com/w3images/lights.jpg', 'https://www.w3schools.com/w3images/nature.jpg'],
    },
    {
      id: 2,
      name: 'Jane Doe',
      avatar: 'https://www.w3schools.com/w3images/avatar5.png',
      time: '16 min',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      images: [],
    },
    {
      id: 3,
      name: 'Angie Jane',
      avatar: 'https://www.w3schools.com/w3images/avatar6.png',
      time: '32 min',
      text: 'Have you seen this? Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      images: ['https://www.w3schools.com/w3images/nature.jpg'],
    },
  ]);

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
      {posts.map((post) => (
        <div key={post.id} className="w3-container w3-card w3-white w3-round w3-margin">
          <br />
          <img
            src={post.avatar}
            alt="Avatar"
            className="w3-left w3-circle w3-margin-right"
            style={{ width: '60px' }}
          />
          <span className="w3-right w3-opacity">{post.time}</span>
          <h4>{post.name}</h4>
          <br />
          <hr className="w3-clear" />
          <p>{post.text}</p>
          {post.images.length > 0 && (
            <div className="w3-row-padding" style={{ margin: '0 -16px' }}>
              {post.images.map((img, idx) => (
                <div key={idx} className="w3-half">
                  <img src={img} style={{ width: '100%' }} alt="Post" className="w3-margin-bottom" />
                </div>
              ))}
            </div>
          )}
          <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom">
            <i className="fa fa-thumbs-up" /> Like
          </button>
          <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom">
            <i className="fa fa-comment" /> Comment
          </button>
        </div>
      ))}
    </div>
  )
}
