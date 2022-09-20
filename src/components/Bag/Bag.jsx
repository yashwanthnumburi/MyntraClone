import React from 'react';
import './bag.css';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';
import { getCartProducts, getItemDetailsInCart } from "../../homeActions";
import Spinner from '../../Spinner';

export default class Bag extends React.Component{

    constructor(props){
        super(props);
        this.state={
            cartDetails:[
                {
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
                    Images:[
                        'https://cdn.shopify.com/s/files/1/1414/2498/products/CS_ClassicWhite_06.jpg?v=1614938700',
                        'https://cdn.shopify.com/s/files/1/1414/2498/products/CS_ClassicWhite_05.jpg?v=1614938700',
                        'https://cdn.shopify.com/s/files/1/1414/2498/products/CS_ClassicWhite_04.jpg?v=1614938699',
                        'https://cdn.shopify.com/s/files/1/1414/2498/products/White_Shirt_featured.JPG?v=1569351738'
                    ],
                    Price:{
                        DiscountedPrice:250,
                        OriginalPrice:500,
                        Offer:50
                    }
                }
            ],
            showSpinner:true
        }
        this.getCartDetails=this.getCartDetails.bind(this);
    }

    componentDidMount(){
        // this.getCartDetails();
    }

    getCartDetails(){
        getCartProducts().then(item=>{
            getItemDetailsInCart(item.Products).then(cartDetails=>{
                console.log("came here",cartDetails)
                this.setState({cartDetails:cartDetails,showSpinner:false});
            })
        })
    }

    render(){
        return <div className='row bagContainer'>
                {/* {this.state.showSpinner && <Spinner></Spinner>} */}
                {this.state.cartDetails?<>
                <div className='col-sm-8 leftContainer'>
                    <LeftContainer productsInfo={this.props.productsInfo} userAddress={this.props.userAddress} cartDetails={this.state.cartDetails}></LeftContainer>
                </div>
                <div className='col-sm-4 rightContainer'>
                    <RightContainer cartDetails={this.state.cartDetails} productsInfo={this.props.productsInfo}></RightContainer>
                </div></>:''}
            </div>
    }


}