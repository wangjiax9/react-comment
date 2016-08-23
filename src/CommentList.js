import React from 'react';
class CommentList extends React.Component{
    render(){       
        return (
        	<ul>
        		<Coment content={this.pros.content}/>
        	</ul>
        );
    }
}
export default CommentList;

