import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

class PostDetails extends Component {

  render () {
    const { owner, title, tags } = this.props.info
    return (
      <Card.Content>
        <Card.Header>
          { title['_content'] }
        </Card.Header>
        { owner && 
          <Card.Meta>By: <a href={`https://www.flickr.com/photos/${ owner.nsid}/`}> {this.props.info.owner.realname}</a> </Card.Meta>
        }
        { tags.tag.length > 0 && 
          <Card.Meta>Tags: { tags.tag.map((tag, i) => <span className="tag" key={i} onClick={() => this.props.fetchByTag(tag.raw)}> {tag.raw} </span> )}
          </Card.Meta>
        }
        <Card.Description>{ this.props.info.description['_content']}</Card.Description>
      </Card.Content>
    )
  }
}

export default PostDetails
