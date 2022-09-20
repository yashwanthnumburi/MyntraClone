import React from 'react';

export default class Spinner extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return <div className='spinnerContainer'>
            <div className="spinner-border text-danger spinner" role="status">
                    <span className="sr-only">Loading...</span>
            </div>
        </div>
    }

}