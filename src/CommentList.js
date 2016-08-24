import React from 'react';
import Comment from './Comment';
class CommentList extends React.Component{
    render(){
        let nodes = this.props.data.map((node,i)=>(
            <Comment data={node}/>
        ));
        return (
        	<ul>
                {nodes}
        	</ul>
        );
    }
}
export default CommentList;

