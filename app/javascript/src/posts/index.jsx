import React from 'react'
import axios from 'axios'

class Posts extends React.Component {
  constructor(props) {
    super(props)

    // [{id, title, content}]
    this.state = {
      posts: [],
    }
  }

  componentWillMount() {
    axios.get('posts.json')
      .then((response) => {
        console.log(response.data)
        this.setState({ posts: response.data})
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>content</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.posts.map(post => (
              <tr>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.content}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    )
  }
}

export default Posts
