import React from 'react';
import {addProductToCart} from './productionActions';
import {Redirect} from "react-router-dom";
import Spinner from '../../Spinner';
import DialogueBox from './DialougeBox';

export default class ProductDetails extends React.Component{

    constructor(props){
        super(props);
        this.state={
            addToCart:true,
            goToCart:false,
            showSpinner:false,
            showModal:false
        }
        this.handleClick=this.handleClick.bind(this);
        this.redirectToBag=this.redirectToBag.bind(this);
    }

    redirectToBag(){
        this.setState({goToCart:true});
    }

    handleClick(){
        this.setState({addToCart:!this.state.addToCart,showSpinner:true});
        // addProductToCart({productId:this.props.itemDetails.Id,count:1}).then(res=>{
        //     this.props.updateCartCount();
        //     this.setState({showSpinner:false,showModal:true});
        // });
        // localStorage.setItem('item',JSON.stringify(this.props.itemDetails));
        setTimeout(()=>{
            this.setState({showSpinner:false,showModal:true});
            this.props.updateCartCount();
        },2000);
        
    }

    showModal(){
        return <DialogueBox img={this.props.itemDetails.Images[0]} text={'Item Added'}></DialogueBox>
    }

    getExpectedDeliveryMessage(){
        const date=new Date();
        date.setDate(date.getDate() + 10);
        return `Get it by ${date.toDateString()}`
    }

    render(){
        return <>
        {this.state.showSpinner && <Spinner></Spinner>}
        {this.state.goToCart ? <Redirect to='/bag'></Redirect>:''}
        {this.state.showModal && this.showModal()}
        {this.props.itemDetails?
            <div className='row'>
                <div className='col-sm-12'>
                    <h1 className='productHeading'>{this.props.itemDetails.Title}</h1>
                    <h1 className='productDescription'>{this.props.itemDetails.Description}</h1>
                    <div className='ratingSummary'>
                        <span>{this.props.itemDetails.Details.Rating} &nbsp;<i class="fa fa-star" aria-hidden="true" style={{'color':'#49d0b1'}}></i></span>
                        <span style={{'color':'rgb(223, 219, 219)'}}>&nbsp;|</span>
                        <span>&nbsp;{this.props.itemDetails.Details.NumberOfRatings} Ratings</span>
                    </div>
                    <hr></hr>
                    <div>
                        <span className='discountedPrice'>Rs.{this.props.itemDetails.Price.DiscountedPrice}</span>&nbsp;&nbsp;
                        <s className='originalPrice'>Rs.{this.props.itemDetails.Price.OriginalPrice}</s>&nbsp;&nbsp;
                        <span className='offer'>({this.props.itemDetails.Price.Offer}{'% OFF'})</span>
                    </div>
                    <span className='tax'>inclusive of all taxes</span>
                    <div style={{'fontWeight':300}}>{this.getExpectedDeliveryMessage()}</div>
                    <div><span style={{'fontWeight':300}}>Seller</span> : <span className='seller'>{this.props.itemDetails.Details.Seller}</span></div>
                    <br></br>
                    <br></br>
                    <span className='selectSize'>SELECT SIZE</span> &nbsp;&nbsp; <span ><button className='sizeChart'>SIZE CHART ></button></span>
                    <br/>

                    
                    <br/>


                    <span>
                        {this.state.addToCart ?
                        <button className='addToCart' onClick={this.handleClick}><i className="navIcon fa fa-shopping-bag"></i>&nbsp;Add to Bag</button>
                    :<button className='addToCart' onClick={this.redirectToBag}>&nbsp;Go To Bag</button>}
                    </span>
                    <span><button className='addToWishlist'><i className="navIcon fa fa-heart-o"></i>&nbsp;Add to Wishlist</button></span>
                    
                    <br></br>
                    <hr></hr>
                    {/* <div>
                        <div>
                            <span className='discountedPrice'>Rs.{this.props.itemDetails.Price.DiscountedPrice}</span>&nbsp;&nbsp;
                            <s className='originalPrice'>Rs.{this.props.itemDetails.Price.OriginalPrice}</s>&nbsp;&nbsp;
                            <span className='offer'>({this.props.itemDetails.Price.Offer}{'% OFF'})</span>
                        </div>
                        <div style={{'fontWeight':300}}>{this.getExpectedDeliveryMessage()}</div>
                        <div><span style={{'fontWeight':300}}>Seller</span> : <span className='seller'>{this.props.itemDetails.Details.Seller}</span></div>
                    </div>
                    <hr></hr> */}
                    <div className='btnSizeGroup'>
                        <span><button className='btnSize'>S<span className='itemLeft'>1 Left</span></button></span>
                        &nbsp;&nbsp;
                        <span><button className='btnSize' >M<span className='itemLeft'>1 Left</span></button></span>
                        &nbsp;&nbsp;
                        <span ><button className='btnSize'>L<span className='itemLeft'>1 Left</span></button></span>
                        &nbsp;&nbsp;
                        <span><button className='btnSize' >XL<span className='itemLeft'>1 Left</span></button></span>
                    </div>

                    <h6 >PRODUCT DETAILS</h6>
                    {this.props.itemDetails.Details.ProductDetails}
                    <h6 style={{'marginTop':'20px'}}>SIZE & FIT</h6>
                    {this.props.itemDetails.Details['Size&Fit']}
                    <h6 style={{'marginTop':'20px'}}>MATERIAL & CARE</h6>
                    {this.props.itemDetails.Details['Material&Care']}
                </div>
            </div>:''}
        </>
    }

}