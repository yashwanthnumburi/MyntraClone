import React from 'react';
import './header.css';
import { Redirect } from 'react-router';


export default class Header extends React.Component{

    constructor(props){
        super(props);
        this.state={
            navigateToHome:false,
            navigateToBag:false
        }
        this.navigateToHome=this.navigateToHome.bind(this);
        this.navigateToBag=this.navigateToBag.bind(this);
    }

    navigateToHome(){
        this.setState({navigateToHome:true,navigateToBag:false})
    }

    navigateToBag(){
        this.props.bagCount>0 && this.setState({navigateToBag:true,navigateToHome:false})
    }

    render(){
        return <>
            <div className='header'>
                <div className='navContainer'>
                    <div className='companyName' onClick={this.navigateToHome}>YN</div>
                    <div className='navLink'>MEN </div>
                    <div className='navLink'> WOMEN </div>
                    <div className='navLink'> KIDS </div>
                    <div className='navLink'> HOME & LIVING </div>
                    <div className='navLink'> BEAUTY </div>
                    <div className="navSearchContainer">
                        <input type="text" className="navSearch form-control" placeholder="Search Products" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <div className='navIconsContainer'>
                        <div className='navI'><i className="navIcon fa fa-user-o"></i><div className='iconText'>Profile</div></div>
                        <div className='navI'><i className="navIcon fa fa-heart-o"></i><div className='iconText'>Wishlist</div></div>
                        <div className='navI' onClick={this.navigateToBag}><i className="navIcon fa fa-shopping-bag" style={{color:'black'}}><span className='bagCount'>{this.props.bagCount}</span></i><div className='iconText'>Bag</div></div>
                    </div>
                </div>
            </div>
            {this.state.navigateToHome && <Redirect to='/MHTShirt'></Redirect>}
            {this.state.navigateToBag && !window.location.toString().includes('bag') && <Redirect to='/bag'></Redirect>}
        </>
    }
}