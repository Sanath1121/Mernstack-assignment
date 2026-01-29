const products = [
{ id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
{ id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
{ id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
{ id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
{ id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
];

function getProductById(id)
{
    return products.find(ele=>ele.id==id);
}

function getAllProducts(){
    return products;
}

function getProductsByCategory(category)
{
    return products.filter(product=>product.catogery==catogery);
}

function searchProducts(query){
    return products.find(product=>product.name.toLocaleLowerCase==query.toLocaleLowerCase)
}

function checkStock(productId, quantity){
    let s=true;
    if(getProductById(productId)!=undefined)
        s=products.find(product=>product.stock>quantity ? true : false);
    else
        s= false;
    return s;
}

function reduceStock(productId, quantity){
    let n=products.findIndex(product=>product.id==productId);
    if(n>-1)
        return products[n].stock-=quantity;
    else
        return "No product found";
}

export {getProductById,getAllProducts,getProductsByCategory,searchProducts,checkStock,reduceStock};



