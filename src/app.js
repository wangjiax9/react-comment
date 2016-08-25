import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
const CommentBox = React.createClass({
    loadCommentForm(){
    
    },
    handleAddComment(text){
    	console.log("Eenter handleAddComment of CommentBox");
        this.state.data.push({author:"wjl",text:text});
        this.setState(this.state.data);
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
                <CommentForm onAdd={this.handleAddComment}/>
            </div>
        )
    }
});

React.render(<CommentBox/>,document.body);

