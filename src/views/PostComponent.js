import PostDetails from './PostDetails'
import React, { Component } from 'react'
import { Card, Container, Image } from 'semantic-ui-react'

class PostComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      loaded: false
    }
  } 
  
  render() {
    const { title , farm, server, id, secret } = this.props.photo
    let source =`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
    return (
      <Container fluid className="post-container">
        <Card>
            <Image 
              key={id}
              src={source} 
              alt={title} 
              fluid
              onLoad={()=>{ this.setState({loaded: true})}} 
              href={this.props.info && `https://www.flickr.com/photos/${this.props.info.owner.nsid}/${id}`}
              target='_blank'
              className="photoImage"
              style={{display:this.state.loaded ? 'block' : 'none' }}
              />
          { this.props.info && <PostDetails fetchByTag={this.props.fetchByTag} info={this.props.info} /> }
        </Card>
      </Container>
      )
  }
}

export default PostComponent