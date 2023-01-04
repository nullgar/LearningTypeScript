var person = {
    name: "nullgar",
    age: 10000
};
var car = {
    make: "Ford",
    year: 2017,
    wheels: {
        tires: 4,
        make: "Bridgestone"
    },
    owners: ["nullgar", "frugalPhoenix", "V"]
};
var tupleCar = {
    make: "Subaru",
    year: 2015,
    wheels: {
        tires: 4,
        make: "Bridgestone"
    },
    owners: ["nullgar", "frugalPhoenix", "V"],
    accidents: [0, "None"] //Tells Typescript that this is a speacial array with a fixed length and fixed types
};
// const pc: object = {
//     type: "mac",
//     armChip: "M2",
//     cost: 4000
// }
var Role;
(function (Role) {
    Role[Role["DADA"] = 0] = "DADA";
    Role[Role["MAMA"] = 1] = "MAMA";
    Role[Role["BUBBY"] = 2] = "BUBBY";
})(Role || (Role = {}));
;
var networth = 1000;
console.log(person.age);
//console.log(pc["cost"]); //This does not work you need to be specific for object to work properly.
console.log(car);
//let owner: string;
for (var _i = 0, _a = car.owners; _i < _a.length; _i++) {
    var owner = _a[_i];
    console.log(owner.toUpperCase()[0] + owner.slice(1));
}
;
console.log('this', tupleCar.accidents);
