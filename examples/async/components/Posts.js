import React, { PropTypes, Component } from 'react'

export default class Posts extends Component {
  render() {
    if (this.props.posts.length > 0) {
      throw new Error('whatevah');
    }

    return (
      <ul>
        {this.props.posts.map((post, i) =>
          <li key={i}>{post.title}</li>
        )}
      </ul>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}
