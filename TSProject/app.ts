const person: {
    name: string,
    age: number
} = {
	name: "nullgar",
	age: 10000
};

const car: {
    make: string,
    year: number,
    wheels: {
        tires: number,
        make: string,
        
    },
    owners: string[]
} = {
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
for (const owner of car.owners) {
    console.log(owner.toUpperCase()[0] + owner.slice(1))
}