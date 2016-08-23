import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
let CommentBox = React.createClass({
    //loadCommentForm(){
    //
    //},
    //handleAddComment(){
    //
    //},
    //getInitialState(){
    //  return {data:[]};
    //},
    render(){
        var data = [
          {author: "Pete Hunt", text: "This is one comment"},
          {author: "Jordan Walke", text: "This is *another* comment"}
        ];
        return (
            <div>
                <h1>CommentBox</h1>
                <CommentList data={data}/>
                <CommentForm onCommentAdd={this.handleAddComment}/>
            </div>
        )
    }
});

React.render(<CommentBox/>,document.body);

