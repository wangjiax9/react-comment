import React from 'react';
import CommentList from './CommentList';
let CommentBox = React.createClass({
  render(){
    return (
        <div>
            <h1>CommentBox</h1>
            <CommentList/>
        </div>
    )
  }
});

React.render(<CommentBox/>,document.querySelector("body"));

