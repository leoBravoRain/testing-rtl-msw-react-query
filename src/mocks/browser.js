// src/mocks/browser.js
import { setupWorker } from "msw";
import { handlers } from "./handlers";

// This configures a Service Worker with the given request handlers.
// this is used in the development environment (different from testing environement. Testing is setup in setupTest.js)
export const worker = setupWorker(...handlers);
