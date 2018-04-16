import React from 'react'
import App from './App'
import Enzyme, { shallow, mount }  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './views/Home'
import PostComponent from './views/PostComponent'
import PostDetails from './views/PostDetails'
import SearchComponent from './views/SearchComponent'
import { spy } from 'sinon'

Enzyme.configure({ adapter: new Adapter() })

describe('Renders Components', ()=> {
	it('renders <App /> component', ()=> {
		const component = shallow(<App />)
		expect(component).toHaveLength(1)
	})

	const testPostProps = { 
		title:"Test Title", 
		farm:'farm', 
		server:'server', 
		id:'1', 
		secret:'secret' 
	}
	
	it('renders <PostComponent /> component', ()=> {
		const component = shallow(<PostComponent photo={testPostProps} />)
		expect(component).toHaveLength(1)
	})


	const testDetailProps = {
		owner: { 
			realname:'Test Owner', 
			nsid:'123'
		}, 
		title:'Test Title', 
		tags: { 
			tag: ['testTag'] 
		},
		description : {
			'_content': 'Test description'
		}
	}
	
	it('renders <PostDetails /> component', ()=> {
		const component = shallow(<PostDetails fetchByTag={()=>{}} info={ testDetailProps }/>)
		expect(component).toHaveLength(1)
	})
});

describe('Search component working' , () => {
	it('Search component renders', ()=> {
		const component = shallow(<SearchComponent />)
		expect(component).toHaveLength(1)
	})

	it('Search component sends keyword to bound method', ()=> {
		const testSearch = spy()
		const component = mount(<SearchComponent handleSearch={testSearch}/>)
		const input = component.find('input')
		input.simulate('change', { target: { value: 'Test' } })
		expect(testSearch.calledOnce);
	})
})