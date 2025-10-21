// module.exports = function() {};
// require

const  firstMod= require('./firstmod');
console.log(firstMod.sum(2,3));

try{
    let result = firstMod.divd(4,0);
    console.log("This line will not be executed if an error occurs above");
    console.log("Result of division:", result);
}
catch(err){
    console.error("Error is caught in input\n", err.message)
}

// Module wrapper function

(
    function(exports, require, module, __filename, __dirname){
        // Module code actually lives in here
    }
)