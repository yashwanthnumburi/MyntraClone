import React from 'react';
import './product.css';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
import {getProductDetails} from './productionActions';
import Spinner from '../../Spinner';

export default class DisplayProduct extends React.Component{

    constructor(props){
        super(props);
        this.state={
            itemDetails:
                {
                    Images:[
                        'https://cdn.shopify.com/s/files/1/1414/2498/products/CS_ClassicWhite_06.jpg?v=1614938700',
                        'https://cdn.shopify.com/s/files/1/1414/2498/products/CS_ClassicWhite_05.jpg?v=1614938700',
                        'https://cdn.shopify.com/s/files/1/1414/2498/products/CS_ClassicWhite_04.jpg?v=1614938699',
                        'https://cdn.shopify.com/s/files/1/1414/2498/products/White_Shirt_featured.JPG?v=1569351738'
                        ],
                    Title:'White Shirt',
                    Description:'Premium cotton white satin with a glossy apperance',
                    Details:{
                        Rating:4.5,
                        NumberOfRatings:3,
                        Seller:'Yashwanth',
                        ProductDetails:'White Solid Formal shirt ,has a spread collar, button placket, 1 patch pocket, long roll-up sleeves, curved hem',
                        'Size&Fit':`Regular Fit The model (height 5'8) is wearing a size 38`,
                        'Material&Care':`85% TR, 15% Rayon
                        Machine Wash`
                    },
                    Price:{
                        DiscountedPrice:250,
                        OriginalPrice:500,
                        Offer:50
                    }
                }
        }
    }

    componentDidMount(){
        // getProductDetails().then(itemDetails=>{
        //     this.setState({itemDetails:itemDetails});
        // })
    }

    render(){
        return  <div className='row appBody'>
            {this.state.itemDetails ? <>
            <div className='imageContainer'>
                <ProductImage itemDetails={this.state.itemDetails} ></ProductImage>
            </div>
            <div className='detailsContainer'>
                <ProductDetails updateCartCount={this.props.updateCartCount} itemDetails={this.state.itemDetails}></ProductDetails>
            </div>
            </>:<Spinner></Spinner>}
        </div>
    }

}