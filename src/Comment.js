import React from 'react';
Class Comment extends React.Component{
	render(){
		return (
			<li>{this.pros.data.author}:{this.pros.data.text}</li>
		)
	}
}
export default Comment;