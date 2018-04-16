import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts, resetPosts } from '../actions'
import '../App.css'
import 'semantic-ui-css/semantic.min.css';
import { Grid, Container, Transition } from 'semantic-ui-react'
import PostComponent from './PostComponent'
import SearchComponent from './SearchComponent'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      page:1,
      searchWord:'',
      loading: false,
      perPage:15,
    }
  }

  componentWillMount () {
    this.props.fetchData(this.state)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll.bind(this), false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll.bind(this), false);
  }

  onScroll() { 
    if ( (window.innerHeight + window.scrollY) >= ( document.body.offsetHeight - 50 ) ) {
      let page = ++this.state.page
      this.setState({loading: true})
      this.props.fetchData(this.state);

      //animation purposes
      setTimeout(() => {  this.setState({page, loading:false}) }, 500)
    }
  }

  handleSearch(e) {
    this.props.resetData();
    this.setState({searchWord:e.target.value, page:1, loading:true})
    this.props.fetchData(this.state) 
    //animation purposes
    setTimeout(() => {  this.setState({loading:false})} ,500)
  }
  fetchByTag(tag, e) {
    this.props.resetData();
    this.props.fetchData({ searchWord:tag, loading:true})
    //animation purposes
    setTimeout(() => {  this.setState({loading:false})} ,500)
  }

  render () {
    return (
      <Container fluid>
          <Container className="controls" fluid>
          <SearchComponent loading={this.state.loading} handleSearch={this.handleSearch.bind(this)} />
          </Container>
       
          <Grid padded>
            <Grid.Row columns={4}>
            {
              this.props.posts &&
              Object.values(this.props.posts)
              .map( (post, i) => 
                  <Transition key={i} visible={!this.state.loading} animation={'scale'} duration={1000}>
                    <Grid.Column >
                      {post &&   <PostComponent photo={post} info={this.props.info[post.id]} key={i+post.id} fetchByTag={this.fetchByTag.bind(this)}/> }
                    </Grid.Column> 
                  </Transition>
              )
            }
            </Grid.Row>
            
          </Grid>
      
      </Container>

    )
  }
}

const mapStateToProps = state => ({
  posts: state.receivePosts,
  info: state.info
})

const mapDispatchToProps = dispatch => ({
  dispatch,
  fetchData: (state) => dispatch(fetchPosts(state)),
  resetData: () => dispatch(resetPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
