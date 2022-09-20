import React from 'react';


export default class ProductImage extends React.Component{


   generateImages(){
       {console.log(this.props.itemDetails.Images)}
           return this.props.itemDetails.Images.map(img=>
                <div style={{'backgroundImage':`url(${img})`}} className='productImage col-sm-6'>
                </div>          
        )
   }

    render(){
        return <>
        <div className='row'>
        {this.generateImages()}
        </div>
        </>
    }

}