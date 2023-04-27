const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
}

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
}


function calculateTotal(patient) {
  let refillTotal = patient.pricePerRefill * patient.refills;
  let subscriptionDiscount = patient.subscription ? refillTotal * 0.25 : 0;
  let couponDiscount = patient.coupon ? 10 : 0;
  let finalAmount = refillTotal - subscriptionDiscount - couponDiscount;
  return finalAmount;
}
// define calculateTotal fuction
// refillTotal will calculate the total cost of refills by miltiplying the pricPerRefill by the number of refills
// apply 25% off if they have subscriptionDiscount
// apply 10$ off discount if they have couponDiscount

const timmyTotal = calculateTotal(timmy);
const sarahTotal = calculateTotal(sarah);
const rockyTotal = calculateTotal(rocky);

console.log(`Timmy's grand total is $${timmyTotal}.`);
console.log(`Sarah's grand total is $${sarahTotal}.`);
console.log(`Rocky's grand total is $${rockyTotal}.`);
