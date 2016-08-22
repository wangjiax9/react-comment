import React from 'react';
import Comment from './Comment';
class CommentList extends React.Component{
    render(){ 
    	let nodes = this.pros.data.map((comment)=>(
    			<Coment data={this.pros.data}/>
    		));      
        return (
        	<ul>
        		{nodes}
        	</ul>
        );
    }
}
export default CommentList;

