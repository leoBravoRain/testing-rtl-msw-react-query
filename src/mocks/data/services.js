const workers = require('./workers');

// dynamic data generation
const servicesNames = ["Corte de pelo hombre", "Corte de pelo mujer","Pintado de uñas"]

var services = [];

for(var i = 0; i < 3; i++){

  services.push({
    id: i,
    name: servicesNames[Math.floor(Math.random() * servicesNames.length)],
    worker: workers[Math.floor(Math.random() * workers.length)],
  })
}

// static data generation
// const services = [
//   {
//     id: 0,
//     name: "Corte de pelo de hombre",
//     worker: worker1,
//   },
//   {
//     id: 1,
//     name: "Corte de pelo de mujer",
//     worker: worker1,
//   },
//   {
//     id: 2,
//     name: "Corte de pelo de perro",
//     worker: worker2
//   },
// ];

module.exports = services;
