// src/mocks/handlers.js
import { rest } from "msw";

// this should be imported from files
const worker1 = {
  id: 0,
  name: "Leo Bravo",
};

const worker2 = {
  id: 1,
  name: "Juan Perez",
};

const workers = [worker1, worker2];

const servicesNames = [
  "Corte de pelo hombre",
  "Corte de pelo mujer",
  "Pintado de uñas",
];

var services = [];

for (var i = 0; i < 3; i++) {
  services.push({
    id: i,
    // name: servicesNames[Math.floor(Math.random() * servicesNames.length)],
    name: servicesNames[i],
    // worker: workers[Math.floor(Math.random() * workers.length)],
    worker: workers[0],
  });
}

// handlers of requests
export const handlers = [
  // handle services endpoint GET
  rest.get("*/services", (req, res, ctx) => {
    // return response
    return res(
      // status code
      ctx.status(200),

      // data to add to body response
      ctx.json({
        data: services,
      })
    );
  }),

  // handle services endpoint GET
  rest.post("*/services", (req, res, ctx) => {
    // services.push(req.body);
    services.push({
      id: services.length,
      name: "test service",
      worker: workers[0],
    });

    return res(ctx.status(200), ctx.json("ok"));
  }),
];
