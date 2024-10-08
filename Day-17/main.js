
//  Remove all falsy values from an array

function removeFalsyValues(array){

    return array.filter(Boolean);
}
const array = [0, 9, false, 2, null, 5, NaN, 3, undefined,8];

console.log(removeFalsyValues(array))

 