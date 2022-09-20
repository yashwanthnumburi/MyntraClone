import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Link ,Route, Redirect} from 'react-router-dom';
import DisplayProduct from './components/Product/DisplayProduct';
import {getCartProducts} from './homeActions';
import Bag from './components/Bag/Bag';

export default class Home extends React.Component{

    constructor(props){
        super(props);
        this.state={
            bagCount:0,
            userAddress:'3A-7-18, Thuthavari Street, Eluru, WestGodavari, AndhraPradesh, 534001',
            productsInfo:{}
        };
        this.updateCartCount=this.updateCartCount.bind(this);
    }

    componentDidMount(){
        // this.updateCartCount();
    }

    updateCartCount(){
        this.setState({bagCount:1});
        // getCartProducts().then(item=>{
        //     let count=0,products=item.Products,productsInfo={};
        //     for(let item in products){
        //         count+=products[item];
        //         productsInfo[item]=products[item];
        //     }
        //     this.setState({bagCount:count,userAddress:item.Address,productsInfo:productsInfo});
        // })
    }

    render(){
        return <div className='appcontainer'>
            <Router>
                <Header bagCount={this.state.bagCount}></Header>
                <Route path='/bag' >
                    <Bag userAddress={this.state.userAddress} productsInfo={this.state.productsInfo}></Bag>
                </Route>
                <Route exact path="/MHTShirt" >
                    <DisplayProduct updateCartCount={this.updateCartCount} />
                </Route>
                <Route path='*'>
                        <Redirect to="/MHTShirt"></Redirect>
                </Route>
                
            </Router>
        </div>
    }

}


