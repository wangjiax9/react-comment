import React from 'react';
import CommentList from './CommentList';
let CommentBox = React.createClass({
	handleAddComment(){
		
	},
	getInitialState(){
		return {data:[]};
	}
  	render(){
	  	let list = ["sdfs","qpaoa","mxmxm"];
	    return (
	        <div>
	            <h1>CommentBox</h1>
	            <CommentList data={this.state.data}/>
	        </div>
	    )
	}
});

React.render(<CommentBox/>,document.querySelector("body"));

