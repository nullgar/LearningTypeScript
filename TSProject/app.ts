const combine = (input1: number | string, input2: number | string) => {
    let result;

    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;

    } else {
        result = input1.toString() + " " + input2.toString();
    }
    return result;
};

const combineWithCheck = (input1: number | string, input2: number | string, resultConversion: "asNumber" | "asText") => {
    let result;

    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;

    } else {
        result = input1.toString() + " " + input2.toString();
    }

    if (resultConversion === "asNumber") {
        return result = +input1 + +input2;
    } else {
        return result.toString();
    }
    
};

const theNum1 = 435567;
const theNum2 = 44522;
const theStr1 = "Hello";
const theStr2 = "World!"

const result = combine(theNum1, theNum2);
const result2 = combine(theStr1, theStr2);
const result3 = combineWithCheck(theNum1, theNum2, "asText");
console.log(result);
console.log(result2);
console.log(typeof result3);
//export{};