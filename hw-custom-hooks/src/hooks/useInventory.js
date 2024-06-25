import { useEffect, useState } from "react";

const productList = [
    {name: "nvidia 6090Ti", price: 2000},
    {name: "nvidia 6090gtx", price: 1899},
    {name: "nvidia 6080gtx", price: 1750},
    {name: "nvidia 6070Ti", price: 1599}
]

export const useInventoryData = () => {

    const [products, setProducts] = useState(productList);
    
    const fetchProducts = () => {
        return products;
    };

    const removeProduct = (name) => {
        setProducts(products.filter(product => product.name !== name));
    };

    return {
        products: fetchProducts(),
        removeProduct
    };
};

export default useInventoryData;