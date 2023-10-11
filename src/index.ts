import { Hono } from "hono";
import { createHonoEndpoints } from "ts-rest-hono";
import { contract } from "./contract";
import { router } from "./router";
import { cors } from "hono/cors";

const app = new Hono();

app.use("*", cors());
app.get("/", (c) => c.text("Hello Hono!"));

createHonoEndpoints(contract, router, app);

export default app;
