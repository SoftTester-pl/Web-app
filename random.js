
export const getRandomCar = () => {
  let cars = [
    { name: 'Honda', price: 20000 + "$" },

    { name: 'Toyota', price: 30000 + "$"},

    { name: 'Nissan', price: 25000 + "$"},

    { name: 'Mazda', price: 27000 + "$"},

    { name: 'Ford', price: 40000 + "$"},

    { name: 'BMW', price: 80000 + "$"},

    { name: 'Mercedes', price: 90000 + "$"}, 

    { name: 'Audi', price: 100000 + "$"},

    { name: 'Porsche', price: 110000 + "$"},

    { name: 'Ferrari', price: 120000 + "$"},

    { name: 'Lamborghini', price: 150000 + "$"},

    { name: 'McLaren', price: 200000 + "$"},

    { name: 'Bugatti', price: 250000 + "$"},

    { name: 'Bentley', price: 300000 + "$"},

    { name: 'Rolls Royce', price: 400000 + "$"},

    { name: 'Maybach', price: 600000 + "$"},

    { name: 'Koenigsegg', price: 800000 + "$"},

    { name: 'Pagani', price: 1000000 + "$"},
  ];

  let randomCar = cars[Math.floor(Math.random() * cars.length)];

  return randomCar;
}