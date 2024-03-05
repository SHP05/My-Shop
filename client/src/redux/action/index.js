export const addCart = (product) =>{
    return{
        type : "ADDITEM",
        payload : product 
    }
}

export const delCart = (product) =>{
    return{
        type : "DELETEITEM",
        payload : product 
    }
}