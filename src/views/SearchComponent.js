import React, { Component } from 'react'
import { Input , Loader} from 'semantic-ui-react'

class SearchComponent extends Component {

  render () {
    return (
      <React.Fragment>
              <Input size='large' icon='search' placeholder='Search...'  onChange={this.props.handleSearch} />
                { this.props.loading && <Loader active size="medium" inline style={{marginLeft:'1em'}}/> }
      </React.Fragment>       
    )
  }
}

export default SearchComponent
