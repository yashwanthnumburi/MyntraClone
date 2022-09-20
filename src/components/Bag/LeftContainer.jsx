import React from 'react';

export default class LeftContainer extends React.Component{

    constructor(props){
        super(props);
        this.renderItemDetails=this.renderItemDetails.bind(this);
        this.getExpectedDeliveryMessage=this.getExpectedDeliveryMessage.bind(this);
    }

    getExpectedDeliveryMessage(item){
        const date=new Date();
        // date.setDate(date.getDate() + item.Details.ExpectedDelivery);
        return `Delivery by ${date.toDateString()}`
    }

    renderItemDetails(){
        return this.props.cartDetails.map(item=><>
            <div className='itemCard'>
                <div className='cartproductImage' style={{'backgroundImage':`url(${item.Images[0]})`}}></div>
                <div className='cartProductDetails'>
                    <div className='cartProductTitle'>{item.Title}</div>
                    <div className='cartProductDesc'>{item.Description}</div>
                    <div className='cartProductSeller'>Sold By {item.Details.Seller}</div>
                    <div className='cartProductQuant'>Qty : 1</div>
                    <span className='cartProductDisPrice'>Rs.{item.Price.DiscountedPrice}</span>&nbsp;&nbsp;
                    <s className='cartProductOrgPrice'>Rs.{item.Price.OriginalPrice}</s>&nbsp;&nbsp;
                    <span className='cartProductOffer'>{item.Price.Offer}{'% OFF'}</span>
                    <div style={{'fontSize':'13px'}}>{this.getExpectedDeliveryMessage(item)}</div>
                </div>
            </div>

        </>)
    }

    render(){
        return <>
            <div className='delivery'>
                <span style={{marginTop:'5px','letterSpacing':'1px','fontWeight':'400'}}>{this.props.userAddress}</span>
                <span><button className='addressBtn'>Change Address</button></span>
            </div>
            <br></br>
            <div className='priceInfo'>
                <span>&nbsp;&nbsp;<i className="fa fa-inr"></i></span>&nbsp;&nbsp;
                <span className='princeInfoText'>The Price of some item(s) might have changed</span>
            </div>
            {this.renderItemDetails()}
            <div className='whislist'>
                <span><i className="navIcon fa fa-heart-o"></i>&nbsp;Add More from whishlist</span>
            </div>
        </>
    }

}