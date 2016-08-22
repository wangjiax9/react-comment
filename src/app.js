import React from 'react';
import CommentList from './CommentList';
let CommentBox = React.createClass({
  render(){
  	let list = ["sdfs","qpaoa","mxmxm"];
    return (
        <div>
            <h1>CommentBox</h1>
            <CommentList content={list}/>
        </div>
    )
  }
});

React.render(<CommentBox/>,document.querySelector("body"));

