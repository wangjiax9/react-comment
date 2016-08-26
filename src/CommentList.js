import React from 'react';
import Style from '../css/g.scss';
import Comment from './Comment';
class CommentList extends React.Component{
    render(){
        let nodes = this.props.data.map((node,i)=>(
            <Comment key={i} data={node}/>
        ));
        return (
        	<ul className={Style.nav}>
                {nodes}
        	</ul>
        );
    }
}
export default CommentList;

