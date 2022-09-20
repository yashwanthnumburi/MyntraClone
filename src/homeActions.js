import axios from 'axios';

export const getCartProducts=()=>{
    return axios.get('http://yashwanthnode.us-east-2.elasticbeanstalk.com/getCartProducts').then(response=>{
        return response.data.Item;
    })
};

export const getItemDetailsInCart=(products)=>{
    return axios.post('http://yashwanthnode.us-east-2.elasticbeanstalk.com/getItemDetailsInCart',{products:products}).then(response=>{
        return response.data
    })
};