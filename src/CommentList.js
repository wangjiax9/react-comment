import React from 'react';
class CommentList extends React.Component{
    render(){
        let conLi = ["Íú´®ÑÝ","Å£ºæºæ","°××ô","ÕÔÁÒ"].map(name => (<li>{name}</li>));
        return (<ul>{conLi}</ul>);
    }
}
export default CommentList;

