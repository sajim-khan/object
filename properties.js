var shoppingCart = {
    books : 5,
    sunglasses : 2,
    Keyboard : 2, 
    mouse : 1,
    pen : 3
}

//for knowing property name and values
var penCount = shoppingCart.pen  //1st 
//alternative way for knowing property name and values
var penCount = shoppingCart["pen"];     //2nd
//console.log('Total pen :',penCount);



//alternative way for knowing property name and values and 
//ths is the best practice for get from object
var propertyName = 'mouse'; 
var  propertyValue = shoppingCart[propertyName]; 
//console.log(propertyName, propertyValue);
//ths is the best practice to  set in object
shoppingCart[propertyName] = 23; //3rd
console.log(shoppingCart);




// set property
shoppingCart.pen = 20;      //1st
console.log(shoppingCart);
shoppingCart['pen'] = 22;       //2nd
console.log(shoppingCart);


//for access all property/keys
var Properties = Object.keys(shoppingCart);
//console.log('Property Names are :',Properties);


//for access all property/key values
var propertyValue = Object.values(shoppingCart);
//console.log('Property Values are :',propertyValue);