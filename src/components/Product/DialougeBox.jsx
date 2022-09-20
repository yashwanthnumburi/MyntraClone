import React from 'react';

export default class DialogueBox extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <>
            <div className='dialogueBox'>
                <div>
                {this.props.img && <img className='dialogueImg' src={this.props.img}/>}
                {this.props.text}
                </div>
            </div>
        </>
    }

}