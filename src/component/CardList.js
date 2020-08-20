import React from 'react';
import Card from '../component/Card';


//Here robots comes as a prop from index.js so we need not import but use it in {} braces.
const CardList = ({robots})=>{
	
	return(
		<div>
		{
			robots.map((user,i)=>{
		return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>			
	})
		}

		</div>

		);

}
export default CardList;//we are maping over robots, so it should be used as a prop. Same for all, it acts as an argument.