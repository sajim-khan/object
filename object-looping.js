
var friendsAge = {
    arif : 24,
    shuvo : 30,
    asik : 31,
    sallahuddin : 25,
    ziad : 26,
    hasib : 27,
}

var shoppingCart = {
    books : 5,
    sunglasses : 2,
    Keyboard : 2, 
    mouse : 1,
    pen : 3,
    bottle : 2
}

var keys = Object.keys(shoppingCart);
console.log(keys);

var value = Object.values(shoppingCart);
console.log(value);


// var keys = [ 'books', 'sunglasses', 'Keyboard', 'mouse', 'pen', 'bottle' ]
console.log('In for loop');
for (var i = 0; i < keys.length; i++){
    //console.log(keys[i]);
    //console.log(value[i]);
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    //console.log(propertyName, propertyValue);
}

//for in loop
console.log('In for in loop :');
for (var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log( propertyName, value);
}