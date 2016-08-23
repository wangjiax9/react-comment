import React from 'react';
class CommentForm extends React.Component{
    addComment(){
        let text = this.refs.text.value;
        if(!text){
            return;
        }
        //send requeset
        this.refs.text.value = "";
        return;
    }
    render(){
        return(
            <div>
                <input type="text" placeholder="say something" ref="text"/>
                <input type="button" value="发表" onclick={this.addComment}/>
            </div>
        )
    }
}
export default CommentForm;