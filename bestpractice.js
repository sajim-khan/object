var shoppingCart = {
    books : 5,
    sunglasses : 2,
    Keyboard : 2, 
    mouse : 1,
    pen : 3
}

console.log(shoppingCart);

//ths is the best practice for get from object
var propertyName = 'mouse'; 
var  propertyValue = shoppingCart[propertyName]; 
console.log(propertyName, propertyValue);


//ths is the best practice to  set in object
shoppingCart[propertyName] = 23; 
console.log(shoppingCart);
