import React from 'react';
class Comment extends React.Component{
	render(){return (<li>{this.props.data.text}</li>)}

}
export default Comment;