import React,{Component} from 'react';
class CommentForm extends Component{
    constructor(props){
        super(props);
        this.addComment = this.addComment.bind(this);
    }
    addComment(){
        console.log("Enter addComment of CommentForm!");
        console.log(this.refs);
        let text = this.refs.text.value;
        if(!text){
            return;
        }
        //send requeset
        this.props.onAdd(text);
        this.refs.text.value = "";
        return;
    }
    render(){
        return(
            <div>
                <input type="text" placeholder="say something" ref="text"/>
                <input type="button" value="发表" onClick={this.addComment}/>
            </div>
        )
    }
}
export default CommentForm;