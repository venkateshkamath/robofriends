import React from'react';

const SearchBox=({searchChange})=>{
	return(
		<div className='pa2'>
		<input className='pa3 ma2 ba b--green bg-lightest-blue'type = 'search' placeholder='search robots' 
		onChange={searchChange} />

		</div>

		);//searchChange needs a curly braces.
}
export default SearchBox;