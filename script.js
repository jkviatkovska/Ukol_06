const justFood = (number) => {
    const price = number * 100
    return `Catering od Just Food pre ${number} ľudí bude stáť ${price} Kč`;
}

const yourMama = (number) => {
    const price = number * 200
    return `Caterind od Your Mama pre ${number} ľudí bude stáť ${price} Kč`;
}

const flavourHaven = (number) => {
    const price = number * 350
    return `Catering od Favour Haven pre ${number} ľudí bude stáť ${price} Kč`;
}

const createEvent = (eventName, number, cateringFunction) => {
    const cateringMessage = cateringFunction(number);
    return `Udalosť ${eventName} s ${cateringMessage}`;
};


console.log(justFood(50)); 
console.log(yourMama(100)); 
console.log(flavourHaven(200)); 

console.log(createEvent("Inaugurácia prezidenta", 100, flavourHaven));
