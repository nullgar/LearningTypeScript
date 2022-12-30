const addTwoNums = (n1: number, n2: number, showResult: boolean, stringResult: string) => {
   
    const result = n1 + n2;
    if (booleanResult) {

        return stringResult + result;

    } else {
        console.log("There was an error.")
    }
};

const theNum1 = 435567;
const theNum2 = 44522;
const booleanResult = true;
const stringResult = "The reult is: ";

const result = addTwoNums(theNum1, theNum2, booleanResult, stringResult);
console.log(result);
//export{};