const coolImages = require("cool-images");
let  image = coolImages.one();
console.log(image);

let images  =  coolImages.many(600, 800, 25);
images.map(element => console.log(element));

