import React from 'react';

export default class RightContainer extends React.Component{

    constructor(props){
        super(props);
        this.state={
            price:500,
            discount:250,
            convFee:99,
            totalPrice:349
        }
        this.calculateTotalPrice=this.calculateTotalPrice.bind(this);
    }

    componentDidMount(){
        // this.calculateTotalPrice();
    }

    calculateTotalPrice(){
        let price=0,userCart=this.props.productsInfo,products=this.props.cartDetails;
        for(let i in userCart){
            for(let j in products){
                if(products[j].Id==i){
                    price+=products[j].Price.DiscountedPrice*userCart[i];
                }
            }
        }
        this.setState({price:price,totalPrice:price+this.state.discount+this.state.convFee});
    }

    render(){
        return <>
            <div className='offerAndCoupons'>OFFER & COUPONS</div>
            <div className='offerRecom'> <img style={{'width':'25px','height':'25px',marginRight:'5px'}}src={'https://constant.myntassets.com/checkout/assets/img/additional-offer.png'}/>NEW Coupon is applied</div>
            <hr style={{'borderBottom':'2px solid red'}}></hr>
            <div>
                <div>Price Details</div>
                <div className='priceItem'>
                    <span>Total MRP</span>
                    <span style={{'float':'right'}}>Rs.{this.state.price}</span>
                </div>
                <div className='priceItem'>
                    <span>Discount on MRP</span>
                    <span style={{'float':'right'}}>Rs.{this.state.discount}</span>
                </div>
                <div className='priceItem'>
                    <span>Convenience Fee</span>
                    <span style={{'float':'right'}}>Rs.{this.state.convFee}</span>
                </div>
            </div>
            <hr style={{'borderBottom':'2px solid red'}}></hr>
            <div className='totalPrice'>
                <span>Total Amount</span>
                <span style={{'float':'right'}}>Rs.{this.state.totalPrice}</span>
            </div>
            <button className='btnOrder'>PLACE ORDER</button>
        </>
    }

}