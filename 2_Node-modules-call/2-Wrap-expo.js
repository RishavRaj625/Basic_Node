console.log("Node module wrapper expo file")

console.log("__filename in wrapper explore: ", __filename)
console.log("__dirname in wrapper explore: ", __dirname)

module.exports.greet = function(name){
    console.log(`Hello ${name}`)
};