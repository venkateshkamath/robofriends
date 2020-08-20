import React,{Component} from 'react';
import CardList from '../component/CardList.js';
import Scroll from '../component/Scroll.js';
import SearchBox from '../component/SearchBox.js';
import ErrorBoundary from '../component/ErrorBoundary.js';
import './App.css';
class App extends Component{

	constructor(){
		super()
		this.state={
			robots:[],
			searchfield:''
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(user=>this.setState({robots:user}))
	}
	onSearchChange=(event)=>{
		this.setState({searchfield:event.target.value})		
	}
render(){
	const {robots, searchfield} = this.state;  //Instead of using this.state assingned this.state to an object robots, searchfield as wanted.
	const filteredRobots=robots.filter(robot=>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
	if(robots.length===0){
		return <h1> Loading.... </h1>
	}
	else{
	return(
		<div className='tc'>
		<h1 className='f1'>Robo Friends</h1>
		<SearchBox searchChange={this.onSearchChange}/>
		
		<Scroll>
		<ErrorBoundary>
		<CardList robots={filteredRobots} />
		</ErrorBoundary>
		</Scroll>
		</div>
		);
}
}
}

export default App;