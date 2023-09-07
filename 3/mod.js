//  Creating custom modules through NodeJS

average = (arr) =>{
    let sum = 0
    arr.forEach(element =>{
        sum += element;
    });
    return sum/arr.length;
}

// Export the function inside the module 
// module.exports= average;

// To export multiple functions
// we can export an object instead
// module.exports={
//     avg : average,
//     name : "Nongamba",
//     branch : "CSE"
// }

// Also module.exports is an object itself
module.exports.name = "Nongombi"; // returns { name: 'Nongombi' }