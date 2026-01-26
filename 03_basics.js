//Date and Time in javascript 

// Dates 
// let myDate = new Date()
// console.log(myDate); //2026-01-26T14:25:42.598Z

// let myDate = new Date()
// console.log(myDate.toString()); //Mon Jan 26 2026 19:56:39 GMT+0530 (India Standard Time)

// let myDate = new Date()
// console.log(myDate.toDateString()); //Mon Jan 26 2026

// let myDate = new Date()
// console.log(myDate.toISOString()); 

//2026-01-26T14:31:06.212Z
//2026-01-26 => date (YYYY-MM-DD)
//T => separator (Date & time)
//14:31:06 => Time (HH:MM:SS) in 24-hour
//212 => Miliseconds
//Z => zulu time (UCT{universal coordinated Time}) 

// let myDate = new Date()
// console.log(myDate.toJSON()); //2026-01-26T14:41:44.737Z

// .toJSON vs .toISOStirng
//if we do === btw the give value it right true 
//.toJSON => convert obejct into a value safe for JSON

// let myCreatedDate = new Date(2024 , 0 ,3) //2024-01-02T18:30:00.000Z
// let myCreatedDate = new Date(2024 , 0 , 23 , 5 ,3)
let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate);

let myTimeStamp = Date.now() //1769442091807 write the value in miliseconds 
console.log(myCreatedDate.getTime());
