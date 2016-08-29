import React from 'react';
import ReactDOM from 'react-dom';
import Fetch from 'node-fetch';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
let CommentBox = React.createClass({
    loadServerData(){
        //Fetch("./data.json").then(function(res){
        //    console.dir(res);
        //});
    },
    handleAddComment(text){
    	console.log("Eenter handleAddComment of CommentBox");
        this.state.data.push({author:"wjl",text:text});
        this.setState(this.state.data);
    },
    getInitialState(){
        this.loadServerData();
    	var data = [
          {author: "Peteddd", text: "This is comment"},
          {author: "Jordan Walke", text: "This is *another* comment"}
        ];
     	return {data:data};
    },
    render(){
        
        return (
            <div>
                <h1>CommentBoxaaaa</h1>
                <CommentList data={this.state.data}/>
                <CommentForm onAdd={this.handleAddComment}/>
            </div>
        )
    }
});

ReactDOM.render(<CommentBox/>,document.querySelector("#react"));

