import React,{Component} from 'react';

class ErrorBoundary extends Component{
constructor(){
	super();
	this.state = {
		hasError:false,
	}
}
	componentDidCatch(error,info){
		this.setState({hasError:true})
	}
	render(){
		if(this.state.hasError){
			return <h1>OOPS..</h1>
		}
		 return this.props.children//Meaning the child of ErrorBoundary i.e is Cardlist since it is wrapped around
	}
}

export default ErrorBoundary;