import { setupGenkit, runServer } from "@oconva/qvikchat/genkit";
import { defineProductsEndpoints } from "./endpoints/products-endpoints";

// Setup Genkit
setupGenkit();

// define products
defineProductsEndpoints();

// Run server
runServer();
