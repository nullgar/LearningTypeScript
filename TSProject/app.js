var combine = function (input1, input2) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + " " + input2.toString();
    }
    return result;
};
var theNum1 = 435567;
var theNum2 = 44522;
var theStr1 = "Hello";
var theStr2 = "World!";
var result = combine(theNum1, theNum2);
var result2 = combine(theStr1, theStr2);
console.log(result);
console.log(result2);
//export{};
