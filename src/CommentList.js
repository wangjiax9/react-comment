import React from 'react';
class CommentList extends React.Component{
    render(){
        let conLi = ["������","ţ���","����","����"].map(name => (<li>{name}</li>));
        return (<ul>{conLi}</ul>);
    }
}
export default CommentList;

