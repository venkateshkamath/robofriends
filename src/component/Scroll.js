import React from 'react';
const Scroll =(props)=>{
	return(
		<div style={{overflowY:'scroll',border:'2px solid white', height:'550px'}}>
		{props.children}
		</div>

		);
};
export default Scroll;