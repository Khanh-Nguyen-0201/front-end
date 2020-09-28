import {applicationConstants} from "../constants";

export const addCompareProduct=(product)=>{
    return {
        type: applicationConstants.addCompare,
        payload: product
    }
}
export const removeCompareProductById=(productID)=>{
    return{
        type:applicationConstants.clearCompareById,
        payload: productID
    }
}
export const removeCompareProduct=()=>{
    return {
        type:applicationConstants.clearCompare,
        payload: null
    }
}
