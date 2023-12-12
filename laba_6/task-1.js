let objects = [];
function createProduct(obj, callback){
    obj.id = objects.length + 1;
    callback(obj);
}

function logProduct(product){
    console.log(product);
}
function logTotalPrice(product){
    product.hasOwnProperty("price") ? console.log(product.price) : console.log(`${product.name} has no price`);
}

createProduct({name: 'book', price: 30}, logTotalPrice);
createProduct({name: 'apple'}, logTotalPrice);
createProduct({name: 'milk', price: 10}, logProduct);
createProduct({name: 'boots'}, logProduct);