//object is a non-premitive data type
let user = {
    name:"Manu",
    address:{
        city:"Gurugarm",
        state:"Harayana",
    },
    favcolor:["balck","white"],
    demo:function(){
        return"demon function"
    },
}

// console.log(user.name, user.address, user.favcolor[1],user.demo())

// console.log("My name is "+user.name+" My fav color is "+user.favcolor[0])

// //string literal
// console.log(`My name is ${user.name} My address is ${user.address.city}`)

//object methods

console.log(Object.keys(user));

console.log(Object.values(user));

console.log(Object.entries(user));

// object freeze and seal

const car = {
    make:"Tata",
    model:"Harrier"
};

Object.freeze(car)//we cannot add or make chages in the existing key-value pair 

// Object.seal(car)// we cannont add a new key value pair but make changes in the existing key value pair

car.model = "Nexon";
car.color = "black";
console.log(car);