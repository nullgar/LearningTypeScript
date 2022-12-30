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
// const pc: object = {
//     type: "mac",
//     armChip: "M2",
//     cost: 4000
// }
console.log(person.age);
//console.log(pc["cost"]); //This does not work you need to be specific for object to work properly.
console.log(car);
//let owner: string;
for (var _i = 0, _a = car.owners; _i < _a.length; _i++) {
    var owner = _a[_i];
    console.log(owner.toUpperCase()[0] + owner.slice(1));
}
