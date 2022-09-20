import axios from "axios";

export const getProductDetails=()=>{
    return axios.get('http://yashwanthnode.us-east-2.elasticbeanstalk.com/getallproducts').then(response=>{
        return response.data.Item;
    })
};

export const addProductToCart=(req)=>{
    return axios.post('http://yashwanthnode.us-east-2.elasticbeanstalk.com/addProductToCart',req).then(response=>{
        console.log(response);
        return response;
    });
}