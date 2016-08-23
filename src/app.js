import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
let CommentBox = React.createClass({
    loadCommentForm(){
    
    },
    handleAddComment(text){
    	console.log("Eenter handleAddComment of CommentBox");
    	this.state.data.push({author:"wjl",text:text});
    },
    getInitialState(){
    	var data = [
          {author: "Pete Hunt", text: "This is one comment"},
          {author: "Jordan Walke", text: "This is *another* comment"}
        ];
     	return {data:data};
    },
    render(){
        
        return (
            <div>
                <h1>CommentBox</h1>
                <CommentList data={this.state.data}/>
                <CommentForm onCommentAdd={this.handleAddComment}/>
            </div>
        )
    }
});

React.render(<CommentBox/>,document.body);

